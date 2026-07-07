const mongoose = require('mongoose');


// const connectToMongo = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI, {
//       serverSelectionTimeoutMS: 10000,
//       socketTimeoutMS: 45000,
//       family: 4,
//     });

//     console.log("MongoDB connected successfully");
//   } catch (err) {
//     console.error("MongoDB connection failed:", err.message);
//     process.exit(1);
//   }
// };

const connectToMongo = async () => {
  try {
    // Check if URI exists
    if (!process.env.MONGO_URI) {
      throw new Error("MONGO_URI is not defined in .env file");
    }

    await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 5000, 
      family: 4,
    });

    console.log("MDB Status: Connected");
  } catch (err) {
    console.error("MDB Status: Connection Failed");
    console.error("Error Detail:", err.reason || err.message); 
    process.exit(1);
  }
};
module.exports = connectToMongo;
