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
      <div>
        <SearchBar />
        {
          business.map(business => <BusinessApp businessObject = {business} />)
        }
      </div> 
  );
}

export default App;
