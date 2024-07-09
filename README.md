# Simple Social App

### Full-Stack Social Media App | BVT Final Project

This repository contains the source code for Simple Social App, a full-stack social media application built using React.js, Tailwind CSS, HeadlessUI, Node.js, Express.js, and MySQL. Simple Social App provides basic functionality for just making posts on the homepage which then also become visible on the profile page. 

I plan to finish building a scaled-up version of this project in the future. It will be a complete platform for users to connect, share posts comments and upload images, as well as interact with friends, and engage in social networking activities. 

### Here is a link to my developer log.
* [Simple Social App Dev Log](https://docs.google.com/document/d/12SU_ReQ18mVtkEsgQ9GXoQQ5SkGSlRjd5UZzcHFen1g/edit?usp=sharing)


### App pages
- **Register Page**:

  ![Register Page](https://i.imgur.com/M34shY2.png)

- **Login Page**:

  ![Login Page](https://i.imgur.com/KSyqDXs.png)

- **Homepage**:

  ![Homepage](https://i.imgur.com/ADb0LhL.png)

- **Profile Page**:

  ![Profile Page](https://i.imgur.com/T79v0fD.png)

- **Logout Button**

  ![Logout Button](https://i.imgur.com/dNB3I8S.png)




### Features Implemented:

- **Frontend Design**: Utilized HeadlessUI and Tailwind CSS for a modern (partially) responsive user interface. 
- **Database Schema**: Designed using MySQL tables and columns.
- **RESTful API**: Implemented Node.js and Express.js to crate a RESTful API for handling CRUD operations.
- **Authenication and Authorization**: Implemented user authentication and authorization using JWT.
- **User Management**: Implemented user registration, login, and password hashing. 
- **Posts**: Enabled users to create, view, update, and delete posts. 
- **Sidebar Menu**: Enabled users to click on buttons that link to multiple pages with complete UI features added in the scaled up version of this app.
- **Navbar Menu**: Enabled users to click on the profile avatar in right-hand corner to view a logout button.

## Run Locally

Clone the project

```bash
  git clone https://github.com/ConnorBstill/module-4-express-api.git
```

Configure MySQL database settings in the backend by creating a .env file at the below path destination:

```bash
social-media-back-end/.env
```
The .env file should contain the environment variables found in index.js file on lines 21 - 24. Here's an example of how it should look:
```bash
DB_HOST = localhost
DB_USER = root
DB_PASSWORD = 
DB_NAME = social_media_app_schema (or any name you wish to call your database schema)

DB_PORT = 3306
JWT_KEY = SOCIAL_MEDIA_APP_JWT_SECRET_KEY_port_3306 (or any JWT secret key name you wish to call your JWT key)

PORT = 3001
```

The databased script has been added to the project Source.

- Download MySQL Workbench. 
- Upload the MySQL script for this project included in the social-media-app-both-ends src folder.
- Open MySQl workbench and create a new schema, then double click it the name so the texts are bold.
- Click the lightning button to add the schema data from the script into your new schema. The database is now setup! 

---

#### If using VSCode IDE open a split terminal ('Cntrl + Shift + 5' - shortcut for windows users) 

In the first terminal run these commands.

Go to Server directory

```bash
  cd social-media-back-end
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  nodemon index.js
```

#### In the second terminal run these commands. 

Go to the frontend directory

```bash
  cd social-media-front-end
```

Install dependencies

```bash
  npm install
```

Start the frontend

```bash
  npm run dev
```




