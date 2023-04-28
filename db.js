const mysql=require("mysql2")

const db_connection=mysql.createPool({
    host:"localhost",
    user:"root",
    password:"123456",
    database:'ecommerce1'
    })
    

//code to import comnnection
    // const db=require("./db.js")
    // const conn=db;
    // conn.execute(
    //     "SELECT * FROM expense1"
    // ).then(([a,b])=>{
    // console.log(a)
    // })



module.exports =db_connection.promise()