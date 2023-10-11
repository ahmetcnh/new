import mongoose from "mongoose";


const meetingSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique: true,    
    },
    datetime: {
        type: Date,
        required: true,
        unique: true,
    },
    endtime:{
        type: Date,
        required: true,
        unique: true,
    },
    isAvailable: {
        type: Boolean,
        required: true,
    },
},{collection:"meeting",timestamps:true})

export const Meeting = mongoose.model("Meeting", meetingSchema)