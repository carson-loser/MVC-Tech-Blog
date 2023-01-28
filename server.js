// requiring express
const express = require('express');

// initializing express
const app = express();
// setting port for Heroku and default port 3001
const PORT = process.env.PORT || 3001;

// initializing sequelize through config folder and file
const sequelize = require('./config/config');


// setting up port and syncing database
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}!`);
  // dont reset database with changes made
  sequelize.sync({ force: false });
});