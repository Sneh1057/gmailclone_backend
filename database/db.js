import mongoose from "mongoose";
import dotenv from 'dotenv';

const DATABASE = process.env.DATABASE;

const connection = ()=>{
    const DB_URI = `${DATABASE}`;
       try {  mongoose.connect(DB_URI,{useNewUrlParser:true});
         console.log("database connected successfully");
    }catch(error){
        console.log('Error while connecting with the database',error.message);
    }
}
 export default connection;