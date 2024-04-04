import mongoose from "mongoose";

const BookSchema=mongoose.Schema({
    BookName:{
        type:String,
        required:true
    },
    Author:{
        type:String,
        required:true
    },
    Discription:{
        type:String,
        required:true
    },
    ImageUrl:{
        type:String,
        required:true
    }
});

export const Book=mongoose.model("Book",BookSchema);