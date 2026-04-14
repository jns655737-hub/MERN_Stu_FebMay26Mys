//Validation and schema constraints
const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true//constrains
        },
    age:{type:Number,min:18},
    role:{type:String,
        enum:["admin","user","manager"]
    },
    email:{type:String,
        match:/.+@.+\..+/
        //word@fiygg.com
    }
});
const User = mongoose.model("HookValidationUser",userSchema);

async function runValidation() {
    try{
        const invalidUser=new User({
              age:15,
              role:"Guest",
              email:"rhfehfhemail"
        });

        const validUser=new User({
            name:"Jeevan",
            age:22,
            role:"user",
            email:"jeeva@gmail.com"
        })

        await validUser.validate();
        console.log("valid users");
        
       }
       catch(error){
        console.log("Validation errors found:");

        for(const fieldName in error.errors){
            console.log(fieldName+":"+error.errors[fieldName].message);
            
        }
       }
}
runValidation();