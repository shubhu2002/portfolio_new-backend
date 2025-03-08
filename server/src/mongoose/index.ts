import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()

const mongo_uri = process.env.MONGO_URI ?? ""
// console.log("mongo_uri - ",mongo_uri)

const MongooseConnect = async () => {
  try {
    await mongoose.connect(mongo_uri);
    console.log("MongoDB connected");
  } catch (error) {
    console.log("MongoDB connection Fails", error);
    process.exit(1);
  }
};

export default MongooseConnect;
