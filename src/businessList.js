import './App.css';
import Business from './business.js';
import React  from 'react';
import ReactDOM from 'react-dom';

const businessList = ['https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
'Papa Jons Pizzeria', '23 Darlington Street', 'Albany', 'Albany', 'NY', ''];
const businessList2 = ['https://content.codecademy.com/programs/react/ravenous/pizza.jpg', 'Pizzeria'];

function BusinessList(){
    const business1items = businessList.map((business1Item => business1Item))
    const business2items = businessList2.map((business2Item => business2Item))    

    return(
        <div>
            <h1>List of all local restaurant and takeaway businesses:</h1>
            <div>Business 1</div>
            {
                businessList.map((item) => <li>{item}</li>)
            }
            <div>Business 2</div>
            {
                businessList2.map((item) => <li>{item}</li>)
            }
            <p></p>
        </div>
    );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
const element = <BusinessList />;
root.render(element);
export default BusinessList;