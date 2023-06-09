//Main component of the Ravenous website that gets the Search Bar functionality and the array of local businesses
import './App.css';
import './businessList.css';
import BusinessList from './businessList.js';
import BusinessApp from './BusinessApp.js';
import SearchBar from './searchBar.js';
import {business} from './business.js';
import React from 'react';
import ReactDOM  from 'react-dom';

function App() {
  return(
      <div className="App-div">
        <header className="App-header">            
          <h1 className="App-h1">Local Restaurants</h1>
        </header>
        <SearchBar />
        <h1 className="App-h1">List of all local restaurant and takeaway businesses:</h1>
        {
          business.map(business => <BusinessApp businessObject = {business} />)
        }
      </div> 
  );
}

export default App;
