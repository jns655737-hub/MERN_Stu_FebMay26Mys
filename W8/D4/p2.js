//TimeStamp and some advance queries
const mongoose=require("mongoose");

async function main() {
    try{
         await mongoose.connect("mongodb://127.0.0.1:27017/datedb");
         console.log("MongoDB connected");

         //reference
         const demoschema=new mongoose.Schema(
            {
                name:String
            },
            {
                timestamps:true//createAt and updateAt created by itself
            }
         );
         const Model=mongoose.model('Timestamp',demoschema);
        //  await Model.deleteMany();
        //  await Model.create([
        //     {name:"Jeevan"},
        //     {name:"shreyas"},
        //     {name:"vishnu"},
        //     {name:"punith"},
        //     {name:"thilak"},
        //     {name:"rohith"}
        //  ])

        const recent=await Model.find({
            createdAt:{
                $gte:new Date(Date.now()-1500000)
            }
        }).sort({createdAt:-1});
        console.log("Recent Data:",recent);

        // const recentSort=await Model.find({
        //     createdAt:{
        //         $lt:new Date(Date.now()-900000)
        //     }
        // })
        // console.log("Recent Data:",recentSort);
    }
    catch(error){
          console.log(error.message);    
    }
    finally{
        await mongoose.disconnect();
        console.log("Connction Disconnected");
    }
}
main();