import React from "react";
import ReactDOM from "react-dom";

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

function Business(){
    const business1items = business1.map((business1Item => business1Item))
    const business2items = business2.map((business2Item => business2Item))    
    return(
        <div>
            <div>Business 1</div>
            {
                business1.map((item) => <li>{item}</li>)
            }
            <div>Business 2</div>
            {
                business2.map((item) => <li>{item}</li>)
            }
            <p></p>
        </div>
    );
    
}
const root = ReactDOM.createRoot(document.getElementById('root'));
const element = <Business />;
root.render(element);
export default Business;