
//Sorting limiting and the pagination
const mongoose=require("mongoose");
const Product=require("./p3")

async function sortPagination() {
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/merntrainig");//to connect with DB
        console.log("MongoDB connected successfully");

        const sortedAscending=await Product.find({categeory:"Stationary"}).sort({price:1});
        console.log("sorting in ascending order:",sortedAscending);
        
    }
    catch(error){
    console.log("Crud demo error",error.message);         
        }
}
sortPagination()
