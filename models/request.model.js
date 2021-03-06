const mongoose = require("mongoose");

const RequestSchema = new mongoose.Schema({
    user_id: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true,
        default: "available"
    },
    title: {
        type: String,
        required: true
    },
    category:{
        type: mongoose.Schema.Types.ObjectID,
        ref:'Category',
        require: true
    },
    description: String,
    cover_image_url: String,
    detail_image_urls:[String],
    original_budget_price: String,
    current_budgeet_price:String,
    created_date: {
        type: Date,
        default: Date.now
    },
    expire_date: Date,
    payment: String,
    shipment: String
})

module.exports = mongoose.model("request", RequestSchema)