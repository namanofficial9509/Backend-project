import mongoose from 'mongoose';
import mongooseAggregatePaginate from 'mongoose-aggregate-paginate-v2';


const videoSchema = new mongoose.Schema({
  videoFile:{
    type:String, //cloudinary url
    required:true,
    unique:true,
    index:true,
  },

  thumbnail:{
    type:String, //cloudinary url
    required:true,
  },

  title:{
    type:String,
    required:true,
  },

  owner:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
    required:true,
    unique:true,
  },

  description:{
    type:String,
    required:true,
  },

  duration:{
    type:Number, // we get duration from cloudinary
    required:true,
  },

  views:{
    type:Number,
    default:0,
  },

  isPublished:{
    type:Boolean,
    default:true,
  },

  


},{timestamps:true})

export const Video = mongoose.model("Video",videoSchema);