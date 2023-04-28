const express=require("express")
const product=require("../controller/product_opreation")
const router=express.Router()

const app=express()
router.post("/add-product",product.postAddProduct);
router.post("/edit-product",product.postEditProduct);
router.get("/get-all-product",product.getAllProduct);
router.post("/deleteProductById:id",product.deleteProductById);


// (req,res)=>{
//     console.log(req.params)
// console.log("delete is working")

module.exports=router;

