const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");

require("dotenv").config();

const app = express();
const port = process.env.PORT;

const corsOptions = {
  origin: "*",
  credentials: true,
  "access-control-allow-credentials": true,
  optionSuccessStatus: 200,
};

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(async (req, res, next) => {
  try {
    req.db = await pool.getConnection();
    req.db.connection.config.namedPlaceholders = true;
    await req.db.query('SET SESSION sql_mode = "TRADITIONAL"');
    await req.db.query(`SET time_zone = '-8:00'`);
    await next();
    req.db.release();
  } catch (err) {
    console.log(err);
    if (req.db) req.db.release();
    throw err;
  }
});

/*-----------*/

// These endpoints can be reached without needing a JWT
app.get("/test", async (req, res) => {
  const [cars] = await req.db.query(`SELECT * FROM car`);

  console.log("/test endpoint reached");

  res.json(cars);
});

app.put("/test", async (req, res) => {
  const {
    newMakeValue
  } = req.body;

  const [insert] = await req.db.query(
    `
    INSERT INTO car (make, model, year, date_created, user_id, deleted_flag)
    VALUES (:newMakeValue, :newModelValue, :newYearValue, NOW(), :user_id, :deleted_flag);
  `,
    {
      newMakeValue,
      user_id: 1,
      deleted_flag: 0,
    }
  );
  res.json({
    id: insert.insertId,
    newMakeValue,
    userId: 1,
  });
});

app.delete("/test/:id", async (req, res) => {
  console.log(req.params);
  const { id } = req.params;
  await req.db.query(`UPDATE car SET deleted_flag = 1 WHERE id = :carId`, {
    carId: id,
  });
  res.json("Success!");
});

/*-----------*/

// The entire block of code represents an Express route handler async function to ensure the server can handle requests efficiently without getting stuck during slow operations.
// This handler is responsible for handling HTTP POST requests sent to the '/register' route path.

app.post("/register", async function (req, res) {
  try {
    console.log('req.body', req.body);
    const { password, username } = req.body;

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert user data into the database
    const [user] = await req.db.query(
      `INSERT INTO user (user_name, password) 
      VALUES (:username, :hashedPassword);`,
      {
        username,
        hashedPassword,
      }
    );

    // Creating a JWT
    const jwtEncodedUser = jwt.sign(
      { userId: user.insertId, username }, // Use username from req.body for JWT
      process.env.JWT_KEY
    );

    console.log("jwtEncodedUser", jwtEncodedUser);

    res.json({ jwt: jwtEncodedUser, success: true });
  } catch (err) {

    console.error("Error registering user:", err);
    json({ err, success: false });
  }
});


app.post('/log-in', async function (req, res) {
  try {
    const { username, password: userEnteredPassword } = req.body;

    const [[user]] = await req.db.query(`SELECT * FROM user WHERE user_name = :username`, { username });

    if (!user) res.json('Username not found');
  
    const hashedPassword = `${user.password}`
    const passwordMatches = await bcrypt.compare(userEnteredPassword, hashedPassword);

    if (passwordMatches) {
      const payload = {
        userId: user.id,
        username: user.username,
        userIsAdmin: user.admin_flag
      }
      
      const jwtEncodedUser = jwt.sign(payload, process.env.JWT_KEY);

      res.json({ jwt: jwtEncodedUser, success: true });
    } else {
      res.json({ err: 'Password is wrong', success: false });
    }
  } catch (err) {
    console.log('Error in /authenticate', err);
  }
});




// Jwt verification checks to see if there is an authorization header with a valid jwt in it.
app.use(async function verifyJwt(req, res, next) {
  const { authorization: authHeader } = req.headers;
  
  if (!authHeader) res.json('Invalid authorization, no authorization headers');

  const [scheme, jwtToken] = authHeader.split(' ');

  if (scheme !== 'Bearer') res.json('Invalid authorization, invalid authorization scheme');

  try {
    const decodedJwtObject = jwt.verify(jwtToken, process.env.JWT_KEY);

    req.user = decodedJwtObject;
  } catch (err) {
    console.log(err);
    if (
      err.message && 
      (err.message.toUpperCase() === 'INVALID TOKEN' || 
      err.message.toUpperCase() === 'JWT EXPIRED')
    ) {

      req.status = err.status || 500;
      req.body = err.message;
      req.app.emit('jwt-error', err, req);
    } else {

      throw((err.status || 500), err.message);
    }
  }

  await next();
});


/*-----------*/

app.post("/social_post", async (req, res) => {
  const {
    newMessageValue
  } = req.body;

  const { userId } = req.user;

  const [insert] = await req.db.query(
    `INSERT INTO social_post (message, date_created, user_id, deleted_flag)
      VALUES (:newMessageValue, NOW(), :user_id, :deleted_flag);
      `,
    {
      newMessageValue,
      user_id: userId,
      deleted_flag: 0,
    }
  );

  console.log("Insert result:", insert);

  res.json({
    id: insert.insertId,
    newMessageValue,
    userId,
  });
});

// PUT endpoint for updating a social post
app.put("/social_post", async (req, res) => {
  const { id, message } = req.body;

  const [posts] = await req.db.query(
    `UPDATE social_post SET message = :message WHERE id = :id;`,
    {
      id,
      message,
    });
  res.json({ id, message, success: true });
});

// GET endpoint for fetching user's social posts
app.get("/social_post", async (req, res) => {
  const { userId } = req.user;

  const [posts] = await req.db.query(`SELECT * FROM social_post WHERE user_id 
    AND deleted_flag = 0;`, { userId }
  );

  res.json({ posts });
});

// DELETE endpoint for deleting a social post
app.delete("/social_post/:id", async (req, res) => {
  const { id: postId } = req.params;
  await req.db.query(`UPDATE social_post SET deleted_flag = 1 WHERE id = :postId`,
    { postId }
  );
  res.json({ success: true });
});

/*-----------*/

// Starts the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
