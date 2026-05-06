const express=require('express');
const authMiddleware=require('../middleware/auth');

const { fetchAllProducts, fetchProductById, createNewProduct,uploadProductImage, updateProduct, deleteProduct } = require('../controllers/product.controller');
const router=express.Router();
const upload=require('../config/multer');


router.get('/', fetchAllProducts);
router.get('/:id', fetchProductById);
router.post('/',authMiddleware, createNewProduct);
router.put('/:id',authMiddleware, updateProduct);
router.delete('/:id',authMiddleware, deleteProduct);
router.post('/:id/upload', upload.single('image'), uploadProductImage);
module.exports = router;