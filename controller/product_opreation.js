
const product=require("../models/products");
const db=require("../db.js")
const express=require("express");
const app=express()

const sample_product={
    name:"book",
    details:"this is first book",
    price:400
}


module.exports.postAddProduct=(req,res)=>{
   const product_data=new product(req.body.name,req.body.price,req.body.details)
    
    product.add(product_data)

res.redirect("http://127.0.0.1:5500/view/")
}

module.exports.postEditProduct=(req,res)=>{
    const prod_id=req.body.product_id;
    const product_data=new product(req.body.name,req.body.price,req.body.details)
  db.execute("UPDATE `ecommerce1`.`products1` SET `name` = '"+product_data.name+"', `price` = "+product_data.price+", `details` = '"+product_data.details+"' WHERE (`id` = '"+prod_id+"')")
    console.log(product_data,req.body.product_id,"postEditProduct() contoller")
    res.redirect("http://127.0.0.1:5500/view/")
 }
 

module.exports.deleteProductById=(req,res)=>{
  
     console.log(req.params)
    
     
        const x=product.deleteById(req.params.id)
     x.then(a=>{
        res.redirect("http://127.0.0.1:5500/view/")
        //this is not working
     })
     .then(a=>{
        console.log("data is deleted")
     })
     .catch(err=>{
        console.log(err)
        res.redirect("http://127.0.0.1:5500/")
     })
   
 console.log("from controller/product_opration/deleteProductById")
 
 }
 



module.exports.getAllProduct=(req,res)=>{
   db.execute("SELECT * FROM products1").then(a=>{console.log(a[0])

    res.json(a[0])
})
.catch(err=>{
    res.json(["error in db from controller - getAllProduct"+" | error is :",err])
})
}
