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


app.post("/register", async function (req, res) {
  try {
    console.log('req.body', req.body);
    const { password, username } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const [user] = await req.db.query(
      `INSERT INTO user (user_name, password) 
      VALUES (:username, :hashedPassword);`,
      {
        username,
        hashedPassword,
      }
    );

    const jwtEncodedUser = jwt.sign(
      { userId: user.insertId, username }, 
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

app.get("/social_post", async (req, res) => {
  const { userId } = req.user;

  const [posts] = await req.db.query(`SELECT * FROM social_post WHERE user_id 
    AND deleted_flag = 0;`, { userId }
  );

  res.json({ posts });
});

app.delete("/social_post/:id", async (req, res) => {
  const { id: postId } = req.params;
  await req.db.query(`UPDATE social_post SET deleted_flag = 1 WHERE id = :postId`,
    { postId }
  );
  res.json({ success: true });
});


app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
