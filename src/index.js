import 'dotenv/config'

import mongoose from 'mongoose';

import connectDb from './db/index.js';

connectDb();
// import { DB_NAME } from './constants';

/*
below is approch -1 
const app = express();
//since we want as file loads db function automaticlly get connected so we use iife(immediatly invoked)
(async()=>{
  try {
    await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
    app.on("error",(error)=>{
      console.log("error",error);
      throw error;
    })

    app.listen(process.env.PORT,()=>{
      console.log(`App is listening on port ${process.env.PORT}`);
    })
  } catch (error) {
    console.log(error)
    throw error
  }
})() */