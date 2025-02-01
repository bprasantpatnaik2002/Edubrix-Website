import mongoose from "mongoose"
import 'dotenv/config'

const ParentSchema = new mongoose.Schema({
    link:{
        type:String,
        required:true
    }
},{timestamps:true});

export const Parent=mongoose.model("Parent",ParentSchema);