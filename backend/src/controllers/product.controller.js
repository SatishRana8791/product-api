
const product=require('../models/product.model.js');

const fetchAllProducts= async ( req , res)=>{
    //code here 
    try{
        //search params
        const page=parseInt(req.query.page) || 1 ;
        const limit=parseInt(req.query.limit) || 12 ;
        
        //skip the initial 
        const skip=(page-1)*limit;

        const keyword={};
        if(req.query.search){
            keyword.name = { $regex: req.query.search, $options: 'i' }
        }
        
        if(req.query.category){
            keyword.category = req.query.category 
        }
        console.log(req.query)

        const totalProducts=await product.countDocuments(keyword);

        const data=await product.find(keyword).skip(skip).limit(limit);

        res.status(200).json({ 
            success:true,
            message:"Fetched All Products Successfully",
            totalProducts,page,limit,
            data:data
        });
    }
    catch(error){
        res.status(500).json({
            success:false,
            message:error.message,
            data:null
        });
    }
}

const fetchProductById = async (req,res)=>{
    //code here
    try{
        const data=await product.findById(req.params.id);
        if(!data){
            return res.status(404).json({
                success:false,
                message:"product not found",
                data:null
            });
        }

        res.status(200).json({
            success:true,
            message:"product fetch by Id successfully",
            data:data
        });
    }
    catch(error){
        res.status(404).json({
            success:false,
            message:error.message
        });
    }
}

const createNewProduct=async ( req , res )=>{
    //code here 
    try{
        const data=req.body;
        if( !data.name || !data.price || !data.quantity || !data.inStock ){
            return res.status(400).json({
                success:false,
                message:"data values are not found"
            });
        }

        const newProduct=await product.create(data);
        res.status(201).json({
            success:true,
            message:"New product created successfully",
            data:newProduct
        });
    }
    catch(error){
        res.status(400).json({
            success:false,
            message:error.message
        });
    }
}  

const uploadProductImage=async ( req , res )=>{
    //code here 
    try{
        const foundproduct=await product.findById(req.params.id);
        if(!foundproduct){
            return res.status(404).json({
                "success":false,
                "message":"no product found",
                "data":null
            });
        }
        if(!req.file){
            return res.status(400).json({
                "success":false,
                "message":"image not get",
                "data":null
            });
        }
        const updatedProduct=await product.findByIdAndUpdate(req.params.id , { image: req.file.filename }, { new: true } );
        return res.status(200).json({
            "success":true,
            "message":"image uploaded successfully",
            "data":updatedProduct
        });
    }

    catch(error){
         res.status(400).json({
            success:false,
            message:error.message
        });
    }
}

const updateProduct = async ( req , res )=>{
    //code here 
    try{
        const data=await product.findByIdAndUpdate(req.params.id,req.body,{ new:true });
        if(!data){
            return res.status(404).json({
                success:false,
                message:"product not found"
            });
        }

        res.status(200).json({
            success:true,
            message:"product updated successfully",
            data:data
        });
    }
    catch(error){
        res.status(400).json({
            success:false,
            message:error.message
        });
    }
}

const deleteProduct=async ( req , res )=>{
    //code here
    try{
        const data=await product.findByIdAndDelete(req.params.id);
        if(!data){
            return res.status(404).json({
                success:false,
                message:"product not found"
            });
        }
        res.status(204).send()
    }
    catch(error){
        res.status(400).json({
            success:false,
            message:error.message
        });
    }
}


module.exports={ fetchAllProducts,fetchProductById,createNewProduct,uploadProductImage,updateProduct,deleteProduct};


