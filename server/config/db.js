const mongoose = require('mongoose');
const config = require('config');

const db = config.get('mongoUri');

const connectDb = async () => {
  try {
    await mongoose.connect(db, { useNewUrlParser: true });
    console.log('MongoDb connected...');
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

module.exports = connectDb;
