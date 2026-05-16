
const mongoose=require('mongoose');

const orderSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    products:[
        {
            productId:{ type:mongoose.Schema.Types.ObjectId , ref: "product"},
            quantity: { type: Number, required: true }
        }
    ],
    totalAmounts:{
        type:Number,
        required:true
    },
    deliveryAddress:{
        type:String,
        required:true
    },
    status:{
        type:String,
        default: "pending" 
    },
    paymentId:{
        type:String,
        required:true
    }
},{timestamps : true });

const order = mongoose.model('order', orderSchema);
module.exports= order ;