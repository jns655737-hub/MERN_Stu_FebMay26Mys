//Relational pattern

const mongoose=require("mongoose");
async function main() {
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/embrel");
        console.log("Connected to themongoDB");
        const blogSchema=new mongoose.Schema({
            title:String,
            comments:[
                {text:String}
            ]
        });

        const Blog=mongoose.model("Blog",blogSchema);
        await Blog.deleteMany();    

        //one-to-many(embedded)
        const blog=await Blog.create({
            title:"Mongoose basics",
            comments:[
                {text:"Great article"},
                {text:"Helpful article"}
            ]
        })

        console.log("Embedding:");
        console.log(await Blog.find());
        
        //one to many relationship(referencing)
        const postSchema=new mongoose.Schema({
            title:String
        });
        const commentSchema=new mongoose.Schema({
            title:String,
            post:{
                type:mongoose.Schema.Types.ObjectId,
                ref:'Post'
            }
        })
        const Post=mongoose.model('Post',postSchema)
         const Comment=mongoose.model('Comment',commentSchema);

         await Post.deleteMany();
         await Comment.deleteMany();

         const post=await Post.create({title:"NodeJS Basics"})
         await Comment.create([
            {text:"Nice post!",post:post._id},
            {text:"Good",post:post._id}
         ]);
         console.log("Referencing:");
         console.log(await Comment.find().populate('post'));
         
         //Many-to-Many
         const studentSchema=new mongoose.Schema({
            name:String,
            courses:[
                {
                    type:mongoose.Schema.Types.ObjectId,
                    ref:'Course'
                }
            ]
         })

         const courseSchema=new mongoose.Schema({
            title:String,
            students:[
                {
                    type:mongoose.Schema.Types.ObjectId,
                    ref:'Student'
                }
            ]
         })
         const Student=mongoose.model('Student',studentSchema)
         const Course=mongoose.model('Course',courseSchema)
         
         const coursel=await Course.create({title:"MongoDB"});
         const coursel2=await Course.create({title:"Node.js"});

         const stud1=await Student.create({name:"Jeevan",
            courses:[coursel._id,coursel2._id]
         })

         const stud2=await Student.create({name:"Shreyas",
            courses:[coursel2._id]
         })
        
         coursel.students.push(stud1._id,stud2._id)
         coursel2.students.push(stud2._id)
         await coursel.save();
         await coursel2.save();

         console.log("Many-to-Many:");
         console.log(await Student.find().populate('courses'));
           console.log(await Course.find().populate('students'));
         
    }
    catch(err){
        console.log("Error:",err.message);
    }
    finally{
        await mongoose.disconnect();
        console.log("Connction Disconnected");
    }
}
main();