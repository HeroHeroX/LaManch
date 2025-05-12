import express from 'express'
import {placeOrder, placeOrderStripe, placeOrderPayPal, allOrders, userOrders, updateStatus, verifyStripe } from '../controllers/orderController.js'
import adminAuth from '../middleware/adminAuth.js'
import authUser from '../middleware/auth.js'

const orderRouter = express.Router()

//ADMIN FEATURE
orderRouter.post('/list',adminAuth ,allOrders)
orderRouter.post('/status',adminAuth ,updateStatus)

//PAYMENT
orderRouter.post('/place',authUser,placeOrder)
orderRouter.post('/stripe',authUser,placeOrderStripe)
orderRouter.post('/place',authUser,placeOrderPayPal)

//USER FEATRUE
orderRouter.post('/userorders',authUser,userOrders)

//VERIFY PAYMENT
orderRouter.post('/verifyStripe', authUser, verifyStripe)

export default orderRouter

