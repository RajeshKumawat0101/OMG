import mongoose from "mongoose";
import { Order } from "../models/order.models.js";

const viewOrders = async (req, res) => {
    try {
        let page = (req?.body?.page)|| 1;
        const limitValue = (req?.body?.limitValue) || 10;
        const totalOrders = await Order.countDocuments();
        const totalPage = Math.ceil(totalOrders / limitValue);
        if(page > totalPage){
            page = totalPage;
        }
        const skipValue = (page-1)*limitValue;
        const orders = await Order.find().skip(skipValue).limit(limitValue);
        if(!orders){
            throw new Error("Orders not found");
        }
        return res.status(200).json({message : "Successfully fetched orderes", data : orders,page,totalPage});
    
    } catch (error) {
        console.log("eroro ",error.message);
        return res.status(500).json({message : " Something went wrong"});
    }
}

const addOrder = async (req, res) =>{
    try {
        const {patientName, doctorName, medicines} = req?.body;
        if(!patientName || !doctorName || (Array.isArray(medicines) && medicines.length == 0)){
            throw new Error("All Fields are required")
        }
        const order = await Order.create({
            patientName,
            doctorName,
            medicines
        });
        if(!order){
            throw new Error("order not created");
        }
        res
        .status(201)
        .json({
            message : "order successfully submitted",
            data : order
        })
    } catch (error) {
        return res.status(500).json({message : " something wrong happened", error});
    }
}

const deleteOrder = async (req, res) => {
    try {
        const id = req?.params?.id;
    
        const validId = mongoose.Types.ObjectId.isValid(id);
        if(!validId){
           throw new Error("Not a valid order");
        }
    
        const deletedOrder = await Order.findOneAndDelete({_id : id})
        if(!deletedOrder){
            throw new Error("Not found the order that being to delete");
        }
        return res.status(200).json({code : 200 , message : " order deleted successfully"});
    } catch (error) {
        return res.status(500).json({message : " Something went wrong"});
    }
}

export {
    addOrder,
    deleteOrder,
    viewOrders,
}