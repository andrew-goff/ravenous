import './App.css';
import './businessList.css';
import BusinessList from './businessList.js';
import  SearchBar  from './searchBar.js';
import { React } from 'react';
import ReactDOM  from 'react-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">       
      </header>
      <div>
        <SearchBar />
        <BusinessList />
      </div>
    </div>
  );
}

export default App;
