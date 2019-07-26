const connectDB = require('../config/db');
connectDB();

const runSeeders = async () => {
  try {
    await require('./userRole')();
    await require('./user')();
    await require('./categories')();
    // await require('./startup')();

    console.log('\x1b[36m Seeding Completed \x1b[0m');
  } catch (err) {
    console.log(`\x1b[31m Error has occured ${err} error \x1b[0m`);
    process.exit(1);
  }
  process.exit(0);
};

runSeeders();
