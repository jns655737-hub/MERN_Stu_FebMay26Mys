//JSON ,Stringify and parse
const employee={
    id:101,
    name:"Jeevan",
    dept:"cse",
    isActive:true
};

//converting js to json
const jsonString=JSON.stringify(employee);
console.log(jsonString);

//converting json into js
const heyy=JSON.parse(jsonString);
console.log(heyy);

