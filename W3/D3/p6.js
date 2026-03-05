//Nested Objects and Method
const student={
   firstname:"Jeevan",
   lastname:"NS",
    scores:{
        maths:97,
        sci:56
    },
    hobbies:["reading","playing cricket"],
    fullname:function(){
        return this.firstname+" "+this.lastname;
    },
    greet(){
        console.log("Hi",this.fullname());
    }
};
// console.log(student);
student.greet();

// console.log(student.scores.maths);

