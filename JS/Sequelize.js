var Sequelize = require("sequelize")

var sequelize = new Sequelize('postgres://user:pass@irasus.com:5432/postgres');

var User = sequelize.define('user', {
    firstName: {
      type: Sequelize.STRING
    },
    lastName: {
      type: Sequelize.STRING
    }
  });
  
  // force: true will drop the table if it already exists
  User.sync({force: true}).then(function () {
    // Table created
    return User.create({
      firstName: 'John',
      lastName: 'Hancock'
    });
  });

sequelize
  .authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.');
    User.create({
        firstName: 'JohnBB',
        lastName: 'HancockBB'
      });

  })
  .catch(function (err) {
    console.log('Unable to connect to the database:', err);
  });