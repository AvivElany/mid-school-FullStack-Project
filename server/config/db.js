require('dotenv').config();
const mongoose = require('mongoose');

const mode = process.env.NODE_ENV;  // 'prod' or 'dev'

let uri;
if (mode==='prod') {
  uri = process.env.MONGODB_URI_PROD
  console.log('Environment set to PRODUCTION mode')
} else {
  uri = process.env.MONGODB_URI_DEV
  console.log('Environment set to DEVELOPMENT mode')
}

const connectDB = async () => {
  try {
    // mongoose.connect expects at least one required parameter: uri
    // uri =  _connection_string_ / _database_name_
    await mongoose.connect(uri);
    console.log('Successfully connected to MongoDB')
  } catch (err) {
    console.log('Error connecting to MongoDB', err.message)
    process.exit(1)
  }
};

module.exports = connectDB;