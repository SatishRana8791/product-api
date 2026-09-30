
const category=require('../models/category.model.js');

const fetchAllCategory=async ( req , res )=>{
    //code here
    try{
        const data=await category.find();
        res.status(200).json({
            success:true,
            message:"Fetched All category Successfully",
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

const fetchCategoryById=async ( req, res)=>{
    //code here 
    try{
        const data=await category.findById(req.params.id);
        if(!data){
            return res.status(404).json({
                success:false,
                message:"category not found",
                data:null
            });
        }
        res.status(200).json({
            success:true,
            message:"category fetch by Id successfully",
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

const createNewCategory=async( req , res )=>{
    //code here
    try{
        const data=req.body;
        if( !data.name || !data.description ){
            return res.status(400).json({
                success:false,
                message:"data values are not found"
            });
        }
        const newCategory=await category.create(data);
        res.status(201).json({
            success:true,
            message:"New category created successfully",
            data:newCategory
        });
    }
    catch(error){
        res.status(400).json({
            success:false,
            message:error.message
        });
    }
}

const updateCategory=async ( req , res )=>{
    //code here 
    try{
        const data=await category.findByIdAndUpdate(req.params.id , req.body , { new : true });
        if(!data){
            return res.status(404).json({
                success:false,
                message:"category not found"
            });
        }

        res.status(200).json({
            success:true,
            message:"category updated successfully",
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

const deleteCategory=async ( req , res )=>{
    //code here 
    try{
        const data=await category.findByIdAndDelete(req.params.id);
        if(!data){
            return res.status(404).json({
                success:false,
                message:"category not found"
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

module.exports={ fetchAllCategory, fetchCategoryById, createNewCategory, updateCategory,deleteCategory };



