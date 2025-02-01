import mongoose from "mongoose"
import 'dotenv/config'

const AdminSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
},{timestamps:true});

export const Admin=mongoose.model("Admin",AdminSchema);