
const mongoose= require('mongoose');
const dotenv=require('dotenv');
dotenv.config();

const product=require('../models/product.model.js');
// const user=require('../models/user.model.js');

const products=[
    {
        name: 'Nike Air Max 270',
        price: 7999,
        quantity:4,
        inStock: true,
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500',
    },
    {
        name: 'Apple iPhone 15',
        price: 79999,
        quantity:5,
        inStock: true,
        image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=500',
    },
    {
        name: 'Samsung 4K Smart TV 55"',
        price: 49999,
        quantity:34,
        inStock: true,
        image: 'https://images.unsplash.com/photo-1461151304267-38535e780c79?w=500',
    },
]

const seedDb= async ()=>{
    // code here 
    try{
        // connect to databases 
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB Connected Successfully");

        // const adminUser=await user.findOne({role : admin});
        // if (!adminUser) {
        //     console.log('No admin user found! Please create an admin user first.')
        //     process.exit(1)
        // }
    
        // clear existing data
        await product.deleteMany({});
        console.log("All product details deleted");
    
        // insert new data
        await product.insertMany(products);
        console.log("Products Inserted Successfully");
    
        // disconnect
        await mongoose.disconnect();
        console.log("Mongoose Disconnected Successfully");


    }
    catch(error){
        console.log(error.message);
        process.exit(1);
    }
}

seedDb();