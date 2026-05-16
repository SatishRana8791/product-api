const express=require('express');
const cors=require('cors');
const helmet=require('helmet');
const ratelimit=require('express-rate-limit');
const app=express();

app.use(cors());
app.use(helmet());

const limiter=ratelimit({
    windowMs:15*60*1000,
    max:100,
});
app.use(limiter);

const productRouter=require('./routes/product.route.js');
const categoryRouter=require('./routes/category.route.js');
const authRouter=require('./routes/auth.route.js');
const userrouter=require('./routes/user.route.js');
const middleware=require('./middleware/logger.js');
const errorhandlerMiddleware = require('./middleware/errorHandler.js');
const reviewRouter=require('./routes/review.route.js');
const paymentRouter=require('./routes/payment.route.js');
const adminRouter= require('./routes/admin.route.js');
const orderrouter=require('./routes/order.route.js');

app.use(express.json());
app.use(middleware);

app.use('/api/v1/auth' , authRouter);
app.use('/api/v1/products', productRouter);
app.use('/api/v1/category',categoryRouter);
app.use('/api/v1/users',userrouter);
app.use('/api/v1/reviews' , reviewRouter);
app.use('/api/v1/payment' , paymentRouter);
app.use('/api/v1/admin', adminRouter);
app.use('/api/v1/orders', orderrouter);



app.get('/',(req,res)=>{
    res.send("hello world");
});

app.use(errorhandlerMiddleware);

module.exports=app;