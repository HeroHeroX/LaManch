import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";

//PLACING ORDERS USING COD METHOD
const placeOrder = async (req,res) => {

    try {
        
        const { userId, items, amount, address }= req.body;

        const orderData = {
            userId,
            items,
            address,
            amount,
            paymentMethod:"COD",
            payment:false,
            date: Date.now()
        }

        const newOrder = new orderModel(orderData)
        await newOrder.save()

        await userModel.findByIdAndUpdate(userId,{cartData:{}})

        res.json({success:true, message:"Oreder Placed"})

    } catch (error) {
        console.log(error);
        res.json({success:false, message: error.message})
        
    }
}

//WITH STRIPE
const placeOrderStripe = async (req,res) => {
    
}

//WITH PAYPAL
const placeOrderPayPal = async (req,res) => {
    
}

//ALL ORDERS DATA FOR ADMIN
const allOrders = async (req,res) => {
    
}

//USER ORDER DATA FOR FRONTEND
const userOrders = async (req,res) => {
    
}

//UPDATE ORDER STATUS
const updateStatus = async (req,res) => {
    
}

export {placeOrder, placeOrderStripe, placeOrderPayPal, allOrders, userOrders, updateStatus}