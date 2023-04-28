const db=require("./db.js")
const router=require("./routes/admin.js")
const express=require("express")
const app=express()
const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:false}))
const conn=db;
///cors
const cors=require("cors")
app.use(cors())
const port=4100;
// conn.execute(
//     "SELECT * FROM expense1"
// ).then(([a,b])=>{
// console.log(a)
// })
app.use(express.json())




app.get("/",(req,res)=>{
res.send("hello this is hom")
})
app.use("/admin",router
    )
app.listen(port,()=>{
   console.log("port has been started at "+port)
})
