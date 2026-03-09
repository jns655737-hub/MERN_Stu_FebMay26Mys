// Filter Method
// let marks=[75,78,56,59,67,77,45];
// let passed=marks.filter(mark=>mark >=65);
// console.log("Marks obtained by students",marks);
// console.log("list of passed students:",passed);

//
let students=[
    {name:"Jeevan",marks:98},
    {name:"vishnu",marks:60},
    {name:"thilak",marks:97}
];
let passedd=students.filter(marks1=> marks1.marks>=90).map(s=>s.name);
// let passedd1=passedd.map(marks1=> marks1.name)
console.log("list of students",students);
// console.log("passed students",passedd1);
console.log(passedd);


