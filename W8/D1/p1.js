//connecting to MongoDb to nodejs using mongoos and defining schema & models
const mongoose=require("mongoose");

async function main() {
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/abcmern");//to connect with DB
        console.log("MongoDB connected successfully");
        
        const userSchema = new mongoose.Schema({
            name:String,
            age:Number,
            role:String
        });
        const User=mongoose.model("User",userSchema);

        console.log("Mongoose Schema and model created successfully");
        console.log("Model name:",User.modelName);
        
        await mongoose.connection.close();
        console.log("Connection closed");
        
    }
    catch(error){
        console.log("Failed to connect DB",error.messge);
    }
}
main();