const mongoose = require("mongoose");
const { CONNECTION_STRING } = require("../config/index");

const dbConnect = async () => {
  try {
    const conn = await mongoose.connect(CONNECTION_STRING);
    console.log(`Database connected to host :${conn.connection.host}`);
  } catch (error) {
    console.log(CONNECTION_STRING);
    console.log(`Error occurred while Database connection: ${error}`);
  }
};

module.exports = dbConnect;
