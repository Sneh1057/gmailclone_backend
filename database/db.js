import mongoose from "mongoose";
import dotenv from 'dotenv';



const connection = ()=>{
    
    const DB_URI = `mongodb://user2001:Sneh1050@ac-hpvwoda-shard-00-00.jkkf5yq.mongodb.net:27017,ac-hpvwoda-shard-00-01.jkkf5yq.mongodb.net:27017,ac-hpvwoda-shard-00-02.jkkf5yq.mongodb.net:27017/?ssl=true&replicaSet=atlas-69orwu-shard-0&authSource=admin&retryWrites=true&w=majority`;
       try {  mongoose.connect(DB_URI,{useNewUrlParser:true});
         console.log("database connected successfully");
         
    }catch(error){
        console.log('Error while connecting with the database',error.message);
    }
}
 export default connection;