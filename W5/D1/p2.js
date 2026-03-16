const items={
    item1:"Laptop",
    item2:"Server",
    item3:"cloudAPI"
};

for(const [items5,itemName] of Object.entries(items)){
    console.log(`${items5}:${itemName}`);
    
}