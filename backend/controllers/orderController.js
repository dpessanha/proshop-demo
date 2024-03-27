import asyncHandler from '../middleware/asyncHandler.js'
import Order from '../models/orderModel.js'

// @desc  Create New Order
// @route POST /api/orders
// @access Private
const addOrderItems = asyncHandler(async (req, res) => {
  res.send('Add Order Items')
})

// @desc  Get Logged In User Orders
// @route GET /api/orders/myorders
// @access Private
const getMyOrders = asyncHandler(async (req, res) => {
  res.send('Get My Orders')
})

// @desc  Get Order By ID
// @route GET /api/orders/:id
// @access Private
const getOrderById = asyncHandler(async (req, res) => {
  res.send('Get Order By Id')
})

// @desc  Update Order to Paid
// @route PUT /api/orders/:id/pay
// @access Private
const updateOrderToPaid = asyncHandler(async (req, res) => {
  res.send('Update Order to Paid')
})

// @desc  Update Order to Delivered
// @route PUT /api/orders/:id/deliver
// @access Private/Admin
const updateOrderToDelivered = asyncHandler(async (req, res) => {
  res.send('Update Order to Delivered')
})

// @desc  Get all Orders
// @route GET /api/orders
// @access Private/Admin
const getAllOrders = asyncHandler(async (req, res) => {
  res.send('Get all Orders')
})

export {
  addOrderItems,
  getMyOrders,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDelivered,
  getAllOrders,
}
