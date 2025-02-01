import mongoose from "mongoose"
import 'dotenv/config'

const ReviewSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    text:{
        type:String,
        required:true
    },
    link:{
        type:String,
        required:true
    }
},{timestamps:true});

export const Review=mongoose.model("Review",ReviewSchema);