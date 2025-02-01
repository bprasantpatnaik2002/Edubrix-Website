import mongoose from "mongoose"
import 'dotenv/config'

const NewsUpdateSchema = new mongoose.Schema({
    news:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    img:{
        type:String,
        required:true
    },
    link:{
        type:String,
        required:true
    }
},{timestamps:true});

export const NewsUpdate=mongoose.model("NewsUpdate",NewsUpdateSchema);