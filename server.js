// requiring express
const express = require('express');
const routes = require('./controllers');
const session = require('express-session');
const exphbs = require('express-handlebars');
const path = require('path');

// initializing express
const app = express();
// setting port for Heroku and default port 3001
const PORT = process.env.PORT || 3001;

// initializing sequelize through config folder and file
const sequelize = require('./config/config');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: 'foobar',
  cookie: {
    maxAge: 1 * 60 * 60 * 1000,
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

const hbs = exphbs.create();

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(session(sess));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(routes);


// setting up port and syncing database
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}!`);
  // dont reset database with changes made
  sequelize.sync({ force: false });
});