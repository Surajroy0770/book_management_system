import express from "express"
import cors from 'cors'
import bookRouter from './router/bookRouter.js'
import {config} from 'dotenv'

import {ConnectMongo} from  './db.js'
const app = express()

config({
    path:'./config/config.env'
});
ConnectMongo();
app.use(cors({
    origin:[process.env.FRONTEND_URL],
    methods:["GET","POST","PUT","DELETE"],
    credentials:true
}))


app.use(express.json());
app.use("/api",bookRouter)

app.listen(process.env.PORT,() => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`)
});