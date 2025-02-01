import mongoose from "mongoose"
import 'dotenv/config'

const ServiceSchema = new mongoose.Schema({
    icon:{
        type:String,
        required:true
    },
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

export const Service=mongoose.model("Service",ServiceSchema);