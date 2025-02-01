import mongoose from "mongoose"
import 'dotenv/config'

const CouponSchema = new mongoose.Schema({
    coupon:{
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

export const Coupon=mongoose.model("Coupon",CouponSchema);