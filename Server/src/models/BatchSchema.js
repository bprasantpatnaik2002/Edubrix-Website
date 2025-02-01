import mongoose from "mongoose"
import 'dotenv/config'

const BatchSchema = new mongoose.Schema({
    course:{
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

export const Batch=mongoose.model("Batch",BatchSchema);