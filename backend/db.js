const mongoose = require("mongoose");
require("dotenv").config({ path: __dirname + '/.env' });

let isConnected = false;

const connectToMongo = async () => {
  if (isConnected) {
    console.log(" Already connected");
    return;
  }

  const uri = process.env.MONGO_URI;
  if (!uri) {
    console.error(" MONGO_URI is missing!");
    return;
  }

  console.log(" Attempting to connect to MongoDB with URI:");


  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnected = true;
    console.log(" MongoDB connected successfully!");
  } catch (error) {
    console.error("MongoDB connection FAILED:");
    console.error(error.message);
  }
};

module.exports = connectToMongo;
