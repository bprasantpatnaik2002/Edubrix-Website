import mongoose from "mongoose"
import 'dotenv/config'

const BlogSchema = new mongoose.Schema({
    blog:{
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

export const Blog=mongoose.model("Blog",BlogSchema);