import 'dotenv/config'

import mongoose from 'mongoose';

import connectDb from './db/index.js';
import app from './app.js';

connectDb()
.then(()=>{
  app.on("error",(error)=>{
     console.log("error",error);
     throw error;
  })
  app.listen(process.env.PORT || 8000,()=>{
    console.log(`SERVER IS RUNNIGN ON PORT ${process.env.PORT}`);
    
  })
})
.catch((error)=>{console.log("Mongo db connection failed !!",error)})














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