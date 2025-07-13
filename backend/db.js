const mongoose = require("mongoose");
require("dotenv").config({ path: __dirname + '/.env' });
let isConnected = false;

const connectToMongo = async () => {
  if (isConnected) {
    console.log(" MongoDB already connected");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGO_URI,{
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = true;
    console.log(" MongoDB Atlas connected");
  } catch (err) {
    console.error(" MongoDB connection error:", err);
    throw err;
  }
};

module.exports = connectToMongo;
