// import express
const express = require ('express')
// import connection to the database
const sequelize = require('./config/connection')

require('./models'); // this line is temporary until models routes is built

//set up the Express app
const app = express()
const PORT = process.env.PORT || 3001

// connect to the database before starting the Express server
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
  });
});

