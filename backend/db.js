const mongoose = require("mongoose");

const connectToMongo = () => {
  mongoose.connect("mongodb://localhost:27017/yourdbname")
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log("Connection error:", err));
};

module.exports = connectToMongo;
       