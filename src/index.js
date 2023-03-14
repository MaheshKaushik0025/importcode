const express = require("express")
const app = express();
const port = 8081
app.get("/welcome",(req,res)=>{
    res.send("Welcome to Dominos!")
})
app.get("/about",(req,res)=>{
    res.send({  
        phone: '18602100000', 
             email: 'guestcaredominos@jublfood.com' 
       }
       )
})
app.listen(port,()=>{
    console.log(`page is running at ${port}`)
})