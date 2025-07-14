const mongoose = require("mongoose");
let isConnected = false;
const connectToMongo = async () => {
  if (isConnected) {
    console.log(" Already connected to MongoDB");
    return;
  }
  const uri = process.env.MONGO_URI;
  if (!uri) {
    throw new Error(" MONGO_URI is missing in environment variables");
  }

  console.log(" Connecting to MongoDB…");

  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnected = true;
    console.log(" MongoDB connected successfully");
  } catch (error) {
    console.error(" MongoDB connection FAILED:", error);
    throw error;
  }
};

module.exports = connectToMongo;
