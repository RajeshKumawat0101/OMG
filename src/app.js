import express from "express";
import cors from "cors";
import bodyparser from "body-parser";
import orderRouter  from "./routes/order.routes.js";

const app = express();
 
app.use(cors({origin : process.env.CORS_ORIGIN}));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(bodyparser.json());

app.use("/api/v1/orders",orderRouter);



export {
    app
}

