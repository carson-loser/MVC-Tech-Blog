// requiring sequelize module from node to work with db
const Sequelize = require('sequelize');
// require .env file to access db
require('dotenv').config();

// sequelize variable for connection
let sequelize;

// new sequelize instance for db with jawsdb url env variable 
if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
  // if jawsdb url not available then creates sequelize instance with .env info
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    }
  );
}

// exporting file to use in other files
module.exports = sequelize;