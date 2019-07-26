const mongoose = require('mongoose');
const mongoURI = require('config').get('mongoURI');

module.exports = function() {
  mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
  });
  mongoose.connection.on('connected', function() {
    console.log(`\x1b[36m Mongoose default connection is open to ${mongoURI} \x1b[0m`);
  });

  mongoose.connection.on('error', function(err) {
    console.log(`\x1b[33m Mongoose default connection has occured ${err} error \x1b[0m`);
  });

  mongoose.connection.on('disconnected', function() {
    console.log('\x1b[31m Mongoose default connection is disconnected \x1b[0m');
  });

  process.on('SIGINT', function() {
    mongoose.connection.close(function() {
      console.log(
        '\x1b[35m Mongoose default connection is disconnected due to application termination \x1b[0m'
      );
      process.exit(0);
    });
  });
};
