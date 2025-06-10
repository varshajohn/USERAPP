const express = require('express');
const app=new express();
const cors = require('cors');
const PORT=4000;
require('./connection'); // Importing the connection file to connect to MongoDB
const userModel=require('./model/userData'); // Importing the user model to interact with the user collection
app.use(cors()); // Enabling CORS to allow requests from different origins
app.use(express.json()); // Middleware to parse JSON request bodies
//API to fetch data from DB
app.get('/users',async(req,res)=>{
    try{
        const data=await userModel.find(); // Fetching all user data from the user collection
        res.send(data);
    }
    catch(error){
        console.log("error while connecting");
    }

})
//API to insert a new document
app.post('/newuser',(req,res)=>{
    try{
        var item=req.body; // Getting the new user data from the request body
        var userdata=new userModel(item); // Creating a new instance of the user model with the new user data
        const savedData= userdata.save();
        res.send("Post Successfully");
    }
    catch(error){
        console.log("error while connecting to server");
    }
})

//API for delete operation
app.delete('/userremoval/:id',async(req,res)=>{
    try{
        var uid=req.params.id;
        const result=await userModel.findByIdAndDelete(uid); // Finding the user by ID and deleting it
        res.send("Deleted Successfully");
    }
    catch(error){
        console.log("error occured while deleting");
    }
})
//API for update operation
app.put('/updateuser/:id',async(req,res)=>{
    try{
        var uid=req.params.id; // Getting the user ID from the request parameters
        var item=req.body; // Getting the updated user data from the request body
        const result=await userModel.findByIdAndUpdate(uid,item); // Finding the user by ID and updating it with the new data
        res.send("Updated Successfully");
    }
    catch(error){
        console.log("error occured while updating");
    }
})
//SERVER IN LISTENING MODE
app.listen(PORT, () => {
    console.log(`The server is listening on port ${PORT}`);
    })