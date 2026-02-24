const mongoose = require("mongoose");
require("dotenv").config();

const { MONGODB_URL } = process.env;


exports.connect = async () => {
	try {
	  console.log("MONGODB_URL", MONGODB_URL);
    await mongoose.connect(MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("DB Connection Success");
  } catch (err) {
    console.log("DB Connection Failed");
    console.error(err);
    process.exit(1);
  }
};