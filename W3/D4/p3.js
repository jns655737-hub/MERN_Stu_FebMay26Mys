//Array map
// let numArray=[1,2,3,4,5];
// let Square=numArray.map(num=>num*num);
// console.log(Square);


let price=[100,200,300,400];
let pricewithgst=price.map(price=>price+price*0.18);
console.log("price w/o tax:",price);
console.log("price with taxes:",pricewithgst);

//using map how to extract files
let users=[
    {name:"Jeevan",age:22},
    {name:"ns",age:23}
];

let names=users.map(monkey=>monkey.name);
console.log("",names);

