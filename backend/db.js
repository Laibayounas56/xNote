const mongoose = require("mongoose");

let isConnected = false;

const connectToMongo = async () => {
  if (isConnected) {
    console.log(" MongoDB already connected");
    return;
  }

  try {
    await mongoose.connect("mongodb+srv://xNote:xNote578@cluster0.33egmgq.mongodb.net/xNote?retryWrites=true&w=majority&appName=Cluster0", {
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
