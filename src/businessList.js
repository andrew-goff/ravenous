import './App.css';
import { business1 } from './business.js';
import { React } from 'react';
import { ReactDOM } from 'react-dom';

function businessList(){
    const [businessList] = business1;

    return(
        <div id="Business List">
            <h1>List of all Businesses:</h1>
            <p>{businessList}</p>
        </div>
    );
}

export default businessList;