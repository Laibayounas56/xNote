const mongoose = require("mongoose");

const connectToMongo = () => {
 mongoose.connect("mongodb+srv://xNote:xNote578@cluster0.33egmgq.mongodb.net/xNote?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => console.log(" MongoDB Atlas connected"))
    .catch((err) => console.error(" Connection error:", err));
};

module.exports = connectToMongo;
