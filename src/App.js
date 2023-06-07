import './App.css';
import './businessList.css';
import BusinessList from './businessList.js';
import SearchBar  from './searchBar.js';
import {business} from './business.js';
import React from 'react';
import ReactDOM  from 'react-dom';

function App() {
  return(
      <div>
        <SearchBar />
        {
          business.map(business => <BusinessList businessObject = {business} />)
        }
      </div> 
  );
}

export class BusinessApp extends React.Component {
  render(){
    return(      
      <BusinessList imageSrc={this.props.businessObject.imageSrc} name={this.props.businessObject.name} address={this.props.businessObject.address} city={this.props.businessObject.city}/>
    )
  }
}

export default App;
