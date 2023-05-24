import React from "react";
import ReactDOM from "react-dom";

function Business(){
    const business1 = [ 
        {
            imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
            name: 'Papa Jons Pizzeria',
            address: '23 Darlington Street',
            city: 'Albany',
            state: 'NY',
            zipcode: '12123',
            category: 'Takeaway',
            rating: 4,
            reviewcount: 15,
        }  
    ];
const business2 = [ 
        {
            imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
            name: 'Pizzeria',
            address: '124 Main Street',
            city: 'Albury',
            state: 'NY',
            zipcode: '12146',
            category: 'Pizzeria Takeaway',
            rating: 4,
            reviewcount: 15,
        }
            
    ];   
    return(
        <div>
            <div>Business 1</div>
                <p>{business1}</p>
            <div>Business 2</div>
                <p>{business2}</p>
        </div>
    );
    
}

export default Business;