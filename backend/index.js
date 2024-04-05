import express from "express"
import cors from 'cors'
import bookRouter from './router/bookRouter.js'
import {config} from 'dotenv'
const PORT=process.env.PORT || 8000

import {ConnectMongo} from  './db.js'
const app = express()

config({
    path:'.env'
});
ConnectMongo();
app.use(cors({
    origin:[process.env.FRONTEND_URL],
    methods:["GET","POST","PUT","DELETE"],
    credentials:true
}))


app.use(express.json());
app.use("/api",bookRouter)

app.listen(PORT,() => {
    console.log(`Server is running on http://localhost:${PORT}`)
});