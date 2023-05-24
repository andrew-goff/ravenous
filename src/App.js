import logo from './logo.svg';
import './App.css';
import BusinessList from './businessList.js';
import searchBar from './searchBar.js';
import { React } from 'react';
import ReactDOM  from 'react-dom';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >  
        </a>
        <h1>Search fror Businesses</h1>
        <searchBar />
      </header>
      <div>
        <h1>Local Restaurants</h1>
        <BusinessList />
      </div>
    </div>
  );
}

export default App;
