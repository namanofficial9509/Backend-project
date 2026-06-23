import {v2 as cloudinary} from 'cloudinary';
import fs from 'fs';

// Configuration
    cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY, 
        api_secret: process.env.CLOUDINARY_API_SECRET,
    }); 

const uploadOnCloudinary = async (localFilePath)=>{
      try {
        if(!localFilePath){
          //since no localfilepath is given we can return a null or a error message
          return null
        }
        //upload the file on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath,{
          resource_type:'auto'
        })
        //file uploaded successfully
        console.log("file has been uploaded succesfully on cloudinary",response.url);
        return response
      } catch (error) {
        //remove the locally saved temporary file as the upload operation get failed
        fs.unlinkSync(localFilePath)
        return null
      }
}

export {uploadOnCloudinary};