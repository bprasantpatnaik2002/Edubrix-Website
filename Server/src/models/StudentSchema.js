import mongoose from "mongoose"
import 'dotenv/config'

const StudentSchema = new mongoose.Schema({
    
    link:{
        type:String,
        required:true
    }
},{timestamps:true});

export const Student=mongoose.model("Student",StudentSchema);