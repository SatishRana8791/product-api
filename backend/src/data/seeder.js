
const mongoose= require('mongoose');
const dotenv=require('dotenv');
dotenv.config();

const product=require('../models/product.model.js');


const products = [
  // Shoes / Footwear
  {
    name: 'Apple iPhone 15 Pro',
    price: 134999,
    quantity: 5,
    inStock: true,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=500',
  },
  {
    name: 'Sony WH-1000XM5 Headphones',
    price: 29999,
    quantity: 8,
    inStock: true,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=500',
  },
  {
    name: 'Nike Air Jordan 1',
    price: 12999,
    quantity: 6,
    inStock: true,
    category: 'Shoes',
    image: 'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=500',
  },
  {
    name: 'The Language of Hearts',
    price: 299,
    quantity: 15,
    inStock: true,
    image: 'https://siteimages.simplified.com/blog/image-199-1.png?auto=compress&fm=png',
  },
  {
    name: 'Canon EOS R50 Camera',
    price: 74999,
    quantity: 3,
    inStock: true,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500',
  },
  {
    name: 'Levi\'s Sherpa Denim Jacket',
    price: 5999,
    quantity: 12,
    inStock: true,
    category: 'Clothing',
    image: 'https://images.unsplash.com/photo-1601333144130-8cbb312386b6?w=500',
  },
  {
    name: 'Apple Watch Series 9',
    price: 41999,
    quantity: 4,
    inStock: true,
    category: 'Watches',
    image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500',
  },
  {
    name: 'To Kill a Mockingbird',
    price: 349,
    quantity: 10,
    inStock: true,
    image: 'https://covers.openlibrary.org/b/id/8236088-M.jpg',
  },
  {
    name: '1984 by George Orwell',
    price: 399,
    quantity: 12,
    inStock: true,
    image: 'https://covers.openlibrary.org/b/id/7878060-M.jpg',
  },
  {
    name: 'Adidas Ultraboost 23',
    price: 14999,
    quantity: 9,
    inStock: true,
    category: 'Shoes',
    image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=500',
  },
  {
    name: 'Samsung 4K OLED TV 55"',
    price: 89999,
    quantity: 2,
    inStock: true,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=500',
  },
  {
    name: 'Leather Crossbody Bag',
    price: 3499,
    quantity: 15,
    inStock: true,
    category: 'Bags',
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500',
  },
  {
    name: 'Nike Air Max 270',
    price: 7999,
    quantity: 4,
    inStock: true,
    category: 'Shoes',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500',
  },
  {
    name: 'Samsung Galaxy S23',
    price: 64999,
    quantity: 5,
    inStock: true,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1610792516307-ea5acd9c3b00?w=500',
  },
    {
    name: 'Titan Analog Watch',
    price: 4999,
    quantity: 11,
    inStock: true,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=500',
  },
    {
    name: 'Yoga Mat',
    price: 799,
    quantity: 22,
    inStock: true,
    category: 'Sports',
    image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=500',
  },
    {
    name: "Levi's 511 Slim Jeans",
    price: 2999,
    quantity: 15,
    inStock: true,
    category: 'Clothing',
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=500',
  },
    {
    name: 'Apple MacBook Air M2',
    price: 99999,
    quantity: 2,
    inStock: true,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500',
  },
  {
    name: 'Adidas Ultraboost 22',
    price: 12999,
    quantity: 6,
    inStock: true,
    category: 'Shoes',
    image: 'https://images.unsplash.com/photo-1556906781-9a412961c28c?w=500',
  },
  {
    name: 'Puma RS-X Sneakers',
    price: 5999,
    quantity: 8,
    inStock: true,
    category: 'Shoes',
    image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=500',
  },
  {
    name: 'Converse Chuck Taylor',
    price: 3999,
    quantity: 10,
    inStock: true,
    category: 'Shoes',
    image: 'https://images.unsplash.com/photo-1607522370275-f14206abe5d3?w=500',
  },
  {
    name: 'Vans Old Skool',
    price: 4499,
    quantity: 0,
    inStock: false,
    category: 'Shoes',
    image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=500',
  },

  // Electronics
  {
    name: 'Apple iPhone 15',
    price: 79999,
    quantity: 3,
    inStock: true,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500',
  },
  {
    name: 'Sony WH-1000XM5 Headphones',
    price: 29999,
    quantity: 7,
    inStock: true,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=500',
  },

  // Clothing
  {
    name: "Men's Cotton Hoodie",
    price: 1999,
    quantity: 20,
    inStock: true,
    category: 'Clothing',
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500',
  },

  // Accessories
  {
    name: 'Fossil Gen 6 Smartwatch',
    price: 18999,
    quantity: 4,
    inStock: true,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500',
  },

  // Bags
  {
    name: 'Fastrack Backpack',
    price: 1799,
    quantity: 14,
    inStock: true,
    category: 'Bags',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500',
  },

  // Home
  {
    name: 'Philips Air Fryer',
    price: 8999,
    quantity: 5,
    inStock: true,
    image: 'https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=500',
  },
  {
    name: 'Cosori Air Fryer Pro',
    price: 7499,
    quantity: 8,
    inStock: true,
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500',
  },

  // Sports
  {
    name: 'Cricket Bat',
    price: 2999,
    quantity: 10,
    inStock: true,
    category: 'Sports',
    image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=500',
  },

  // Electronics
  {
    name: 'Wireless Gaming Keyboard',
    price: 4999,
    quantity: 8,
    inStock: true,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1595225476474-87563907a212?w=500',
  },
  //Books
  {
    name: 'Pride and Prejudice',
    price: 279,
    quantity: 18,
    inStock: true,
    image: 'https://covers.openlibrary.org/b/id/8239410-M.jpg',
  },
  {
    name: 'The Hobbit',
    price: 449,
    quantity: 7,
    inStock: true,
    image: 'https://covers.openlibrary.org/b/id/7850529-M.jpg',
  },
  {
    name: 'Warrior Queens of India',
    price: 529,
    quantity: 9,
    inStock: true,
    image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500',
  },
  {
    name: 'The Rajputs: Warriors of India',
    price: 649,
    quantity: 8,
    inStock: true,
    image: 'https://i.ytimg.com/vi/H8zE_EQrYYQ/maxresdefault.jpg',
  },
  {
    name: 'The Ramayana - Mythology',
    price: 399,
    quantity: 15,
    inStock: true,
    image: 'https://i.pinimg.com/736x/66/dd/c4/66ddc40d895208649668f74df692de0e.jpg',
  },
  {
    name: 'The Mahabharata - Indian Epic',
    price: 449,
    quantity: 11,
    inStock: true,
    image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500',
  },
];

const seedDb= async ()=>{
    // code here 
    try{
      // connect to databases 
      await mongoose.connect(process.env.MONGO_URI);
      console.log("MongoDB Connected Successfully");
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