const { default: mongoose } = require("mongoose");

const connectDB = async () => {
  try {
    const connectedLink = await mongoose.connect(process.env.DB_LINK);
    console.log(`The database is connected: ${connectedLink.connection.host}`);
  } catch (error) {
    console.log("🚀 ~ connectDB ~ error:", error);
  }
};

module.exports = connectDB;
