import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("connected");

    }catch(error){
        console.error(error.message)
        process.exit(1);
    }
};

export default connectDB;