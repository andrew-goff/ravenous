//React component that implements the Search Bar form functionality
import React, { useState }  from 'react';
import { business } from './business';
import './businessList.css';
import SearchForm from './SearchForm';
import { render } from 'react-dom';
import { useForm } from 'react-hook-form';
import ReactDOM from 'react-dom';

function SearchBar(){
    const [businessValue, setBusiness] = useState('');
    const [locationValue, setLocation ] = useState('');

    //const {register, handleSubmit} = useForm();

    const handleSubmit = (event) => {
      alert(JSON.stringify(businessValue + locationValue));
      event.preventDefault();
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
          <form className="BusinessSearchForm" onSubmit={handleSubmit}>
            <label className="Searchbar-label">Set Business:</label>
            <input name="business" value={businessValue} onChange={handleInputChange} />
            <label className="Searchbar-label">Set location:</label>
            <input name="location" value={locationValue} onChange={handleTextChange} />
            <input type="submit" />
          </form>  
          <button>Submit</button>
        </div>
        
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(<SearchBar />);
export default SearchBar;