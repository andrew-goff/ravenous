import './businessList.css';
import './App.css';
import {business1} from './business.js';
import {business2} from './business.js';
import React  from 'react';
import ReactDOM from 'react-dom';

//const businessList = ['Papa Jons Pizzeria', '23 Darlington Street', 'Albany', 'NY', '12123', 'Takeaway', 4 , 15];
//const businessList2 = ['Pizzeria', '124 Main Street', '', 'NY', '', 4, 66];

function BusinessList(){
    //const business1items = businessList.map((business1Item => business1Item))
    //const business2items = businessList2.map((business2Item => business2Item))    

    return(
        <div className="App">
            <header className="App-header">            
                <h1 className="App-h1">Local Restaurants</h1>
            </header>
            <h1 className="App-h1">List of all local restaurant and takeaway businesses:</h1>
                <img src={'https://content.codecademy.com/programs/react/ravenous/pizza.jpg'} className="business1-logo" alt="logo" />
                <p>{this.props.imageSrc}</p>
                <p>{this.props.name}</p>
                <p>{this.props.address}</p>
                <p>{this.props.city}</p>
                <p>{this.props.state}</p>
                <p>{this.props.zipcode}</p>
                <img src={'https://content.codecademy.com/programs/react/ravenous/pizza.jpg'} className="business1-logo" alt="logo" />
            <div>
                {
                //   business1items.map((item) => <li>{item}</li>)
                }
            </div>
            <div>
                {
                //    business2items.map((item) => <li>{item}</li>)
                }
            </div>            
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
const element = <BusinessList />;
root.render(element);
export default BusinessList;