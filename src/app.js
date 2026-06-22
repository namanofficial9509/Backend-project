import express from 'express';
import cors from 'cors';
import cookieParser from "cookie-parser";

 const app = express();

 //app.use(cors())  mostly just this is enough but at production we can configure(using some property) more it like below

 app.use(cors({
  origin:process.env.CORS_ORIGIN,
  credentials:true,
 }))

 //handling json comes from forms
 app.use(express.json({
  limit:"16kb"
 }))

 //url data handling
 app.use(express.urlencoded({extended:true}));

 //storing static files in backend in server(public folder)
 app.use(express.static("public"));

 app.use(cookieParser());

 export default app;