//Applied filters to the query using comparision operters
const mongoose =require("mongoose")

async function runFilterDemo() {
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/merntrainig");//to connect with DB
        console.log("MongoDB connected successfully");

        const productSchema = new mongoose.Schema({
                        name:String,
                        price:Number,
                        categeory:String,
                        status:String
                    });
        const Product =mongoose.models.Product || mongoose.model("Product",productSchema);

        await Product.create([{
                name:"Soap",
                price:41,
                categeory:"Stationary",
                status:"Active"
            },{
                name:"Pen",
                price:10,
                categeory:"Stationary",
                status:"In-Active"
            },{
                name:"Mobile",
                price:10000,
                categeory:"Mobile-Shop",
                status:"Active"
            },{
                name:"Bat",
                price:12000,
                categeory:"Sports-Shop",
                status:"In-Active"
            }]);

            // const equalQuery=await Product.find({status:{$eq:"Active"}})
            // console.log("Products which are Active:",equalQuery);

            // const greatItem=await Product.find({status:{$gt:5000}})
            // console.log("Products which are Active:",greatItem);

            // const lessItem=await Product.find({status:{$lt:5000}})
            // console.log("Products which are Active:",lessItem);

            const equalQuery=await Product.find({name:{$ne:"Bat"}})
            console.log("Products name is not bat:",equalQuery);
            
            await mongoose.connection.close();
            console.log("Connection closed");
    }
    catch(error){
             console.log("Crud demo error",error.message);
             
        }
}
runFilterDemo();