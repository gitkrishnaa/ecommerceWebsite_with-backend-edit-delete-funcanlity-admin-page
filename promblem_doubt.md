11111111111111111111111
in model
static deleteById(product_id){
    console.log(":from models/product/deleteById()")
   return db.execute(
        "DELETE FROM `ecommerce1`.`products1` WHERE (`id` = '"+product_id+"')")
    // ).then((a)=>{
    // console.log(a,"item is deleted deleteById() in model product");

   
    // })
    // .catch(err=>{console.log("error in deleteById() in model/product.js and err is:",err)})



}
in controller
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