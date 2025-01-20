import connectDB from "./db/index.js";
import {app} from "./app.js";
import dotenv from "dotenv";

dotenv.config({
    path : './.env',
})

const port = process.env.PORT || 5000;

connectDB()
.then(()=>{
    app.listen(port , ()=>{
        console.log(`The App is listening at port ${port}`);
    })
})
.catch((error)=>{
    console.log("mongodb connection error ", error);
})
