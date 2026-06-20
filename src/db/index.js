import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDb = async ()=>{
  try {
    const connectionInstance =  await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
    console.log(`\n mongoDb database connected !! DB host: ${connectionInstance.connection.host}`)
  } catch (error) {
    console.log("MongoDb connection error",error);
    //node.js has by default a process using which we can exit the current process excution
    process.exit(1)
  }
}

export default connectDb;