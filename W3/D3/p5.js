//Basics of objects
let person={name:"Jeevan",age:22,city:"Tumkur"};
console.log(person);
console.log("City:",person.city);
console.log("age:",person['age']);

//modification
person.age=63
console.log(person);
person.name="vishnu";
console.log(person);

//adding new property
person.isStudent=true;
console.log(person);

//modification
person.isStudent=false
console.log(person);

//delete a property
delete person.city;
console.log(person);

//object constructor
const car=new Object();
car.make="Audi";
car.model="A4";
car.year=2026;

console.log(car);


