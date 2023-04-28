const db=require("../db")

module.exports=class productCrud{
constructor(name,price,details){
    this.name=name;
    this.price=price;
    this.details=details
}


 static add(product_data){
const name=product_data.name
const details=product_data.details
const price=product_data.price

console.log(product_data,"data in model")
const conn=db;
conn.execute(
        `INSERT INTO products1 (name, price, details) VALUES ('${name}', '${price}', '${details}')`
    ).then(([a,b])=>{
    console.log(a,"db in model product")
    })

 }   

static deleteById(product_id){
    console.log(":from models/product/deleteById()")
   return db.execute(
        "DELETE FROM `ecommerce1`.`products1` WHERE (`id` = '"+product_id+"')")
    // ).then((a)=>{
    // console.log(a,"item is deleted deleteById() in model product");

   
    // })
    // .catch(err=>{console.log("error in deleteById() in model/product.js and err is:",err)})



}

}