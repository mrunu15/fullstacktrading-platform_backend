const {Schema} = require("mongoose");

const OrdersSchema = new Schema({
    name: String,
    qty: Number,
    price: Number,
    node: String,
    
});

module.exports = {OrdersSchema};