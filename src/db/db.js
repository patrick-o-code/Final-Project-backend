import mongoose from "mongoose";
import {NAME} from "../constants.js";

const connectDB = async  () => {  
    try {
        const connectionInstance = await mongoose.connect('mongodb+srv://prateek:P7000735364@cluster0.fx3i7os.mongodb.net',{NAME})
        console.log('MongoDB Connected: $connectionInstance');
 
    } catch (error) {
        console.log("DB connection FILE", error)
        process.exit(1);
        
    }
}

export default connectDB