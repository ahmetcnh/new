import mongoose from "mongoose";
const dburl="mongodb://127.0.0.1:27017/new"

mongoose.connect("mongodb://127.0.0.1:27017/new")
.then(() => {
    console.log("db active");
})
.catch((err) => {
    console.log("db is not active:",err);
})

