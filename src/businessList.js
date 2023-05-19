import './App.css';
import Business from './business.js';
import { React } from 'react';


function BusinessList(){
    const businessList = Business;

    return(
        <div id="Business List">
            <h1>List of all local restaurant and takeaway businesses:</h1>
            <p>{businessList}</p>
        </div>
    );
}

export default BusinessList;