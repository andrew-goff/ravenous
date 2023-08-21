//React component that implements the Search Bar form functionality
import React, { useState }  from 'react';
import { business } from './business';
import './businessList.css';
import SearchForm from './SearchForm';
import { render } from 'react-dom';
import './utils/api.js';
import { useForm } from 'react-hook-form';
import ReactDOM from 'react-dom';

function SearchBar(){
    const [businessValue, setBusiness] = useState('');
    const [locationValue, setLocation ] = useState('');

    const data = [businessValue, locationValue];
    const [sortState, setSortState] = useState("none");

    let blue = '#2624cb';
    const [sortColor, setsortColor] = useState(blue);


    const handleSubmit = (event) => {
      if(businessValue === '' ){
        alert("Select a business to search for a review!");
      }

      else {
        alert(JSON.stringify("Searching with " + businessValue + " , " + locationValue + " , " + setSortState.option.value));
        event.preventDefault();
      }
    }

    function handleTextColorChange(){
      let gold = "burlywood";
      setsortColor(gold);
    }

    const handleInputChange = (event) => {
      setBusiness(event.target.value);
      //setState(JSON.stringify(data));
    }

    const handleTextChange = (event) => {
      setLocation(event.target.value);
    }

    return(
        <div>
          <h1 className="Search-h1">Search for Businesses</h1>
          <select defaultValue={'BEST MATCH'} style= {{color: sortColor}} onClick={handleTextColorChange} onChange={(e => setSortState(e.target.value))}>
            <option value="Best Match">Best Match</option>
            <option value="Highest Rated">Highest Rated</option>
            <option value="Most Reviewed">Most Reviewed</option>
          </select>
          <form className="BusinessSearchForm" onSubmit={handleSubmit}>
            <label className="Searchbar-label">Set Business:</label>
            <input type="text" name="business" value={businessValue} onChange={handleInputChange} />
            <label className="Searchbar-label">Set location:</label>
            <input type="text" name="location" value={locationValue} onChange={handleTextChange} />
            <input type="submit" />
          </form>  
          <Btn onClick={handleSubmit}>Submit</Btn>
        </div>
        
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(<SearchBar />);
export default SearchBar;