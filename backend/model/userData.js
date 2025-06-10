const mongoose=require('mongoose');
//defining the schema for user collection
const userSchema=mongoose.Schema({
    userId:String,
    userName:String,
    email:String,
})
const userData=mongoose.model('user',userSchema); //creating a model for user collection,for that singular form of the collection is used,ie user,becoz s will be added automatically by mongoose
module.exports=userData;//exporting the model to use it in other files