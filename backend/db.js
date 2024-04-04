import mongoose from "mongoose";

export const ConnectMongo = () => {
    mongoose.connect(process.env.MONGOOSE_URL)
        .then(() => {
            console.log("connected successfully")
        })
        .catch(() => {
            console.log("some error occur to connected to database")
        })
}