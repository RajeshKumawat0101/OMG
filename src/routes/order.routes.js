import express from "express";
import { addOrder, deleteOrder, viewOrders } from "../controllers/order.controllers.js";

 
const router = express.Router();

router.route("/addorder").post(addOrder);
router.route("/deleteorder/:id").delete(deleteOrder);
router.route("/view-orderlist").get(viewOrders);

 
export default router;