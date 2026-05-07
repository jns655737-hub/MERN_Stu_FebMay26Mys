//Event Delegation in React
//Instead of attaching a separate click handler 
// to every element We attach one handler to the parent
//parent -> child
//Bubbles up to the parent

//Why is it used
//Advantages:1.Reduces repeated eventhandlers
          // 2.code is cleaner and manageable
          // 3.Its useful when rendering many similar items

import { useState } from "react";

export function EventDeligation() {
    const[selectedItem,setSelectedItem]=useState('None');

    //Parent click handler
    const handleListClick =(event) =>{
        const clickedItem = event.target.closest('li[data-item]');

        if(!clickedItem)
            return;

        const itemName=clickedItem.dataset.item;
        console.log('Clicked Items:',itemName);
        setSelectedItem(itemName);
    };
    return(
        <section>
            <h2>Event delegation</h2>
            <ul onClick={handleListClick}>
                <li data-item="Laptop">Laptop</li>
                <li data-item="Mobile phone">MobilePhone</li>
                 <li data-item="car">car</li>        
            </ul>
            <p>Selected:{selectedItem}</p>
        </section>
    )
}