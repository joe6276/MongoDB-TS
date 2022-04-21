import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()



const connectDb=async()=>{
await mongoose.connect(process.env.URL as string).then(()=>{
        // console.log('Connected to Mongo');
        

    }).catch((error:any)=>{
        console.log(error.message);
        
    })
}


// console.log(process.env.URL );
// console.log( typeof process.env.URL );

export default connectDb