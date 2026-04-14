//pre-remove hook
const mongoose =require("mongoose")

async function runRemoveHookDemo() {
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/hooks");
        const courseSchema=new mongoose.Schema({
            title:String,
            tag:String,
        });
        courseSchema.pre("deleteOne",{
            document:true,query:false
        },function(){
            console.log("Pre-delete hook",this.title);   
        },);
        const Course=mongoose.model.HookCourse ||
        mongoose.model("HookCourse",courseSchema);
        await Course.deleteMany({tag:"remove-hook-demo"});


        const course =new Course({
            title:"Database design basics",
            tag:"remove-hook-demo",
        });

        await course.save();
        console.log("Document save successfully");
        
        await course.deleteOne();
        console.log("Document Deleted successfully");

        // const deletedStudent=await course.findByIdAndDelete(course._id);
        //     console.log("Deleted with firstStudent():",deletedStudent)

        await mongoose.connection.close();
        console.log("Connction closed");
    }
    catch(error){
        console.log("Remove hook error",error.message);
    }
}
runRemoveHookDemo();