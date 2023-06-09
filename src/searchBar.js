//React component that implements the Search Bar form functionality
import React, { useRef }  from 'react';
import { useState } from 'react';
import { business } from './business';
import './businessList.css';
import SearchForm from './SearchForm';
import { render } from 'react-dom';
import ReactDOM from 'react-dom';

function SearchBar(){
    const searchForm = useRef(null);

    const handleClickEvent = () => {
        const form = searchForm.current
        alert(`Search successful ${form['business'].value} ${form['location'].value}`)
    }

    return(
        <div>
          <h1 className="Search-h1">Search for Businesses</h1>
          <form className="Search-label" ref={searchForm}>
            <SearchForm className="Search-label" label={'Set Business:'} name={'business'} />
            <SearchForm className="Search-label" label={'Set Location:'} name={'location'} />
          </form>  
          <button onClick={handleClickEvent}>Submit</button>
        </div>
        
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<SearchBar />);
export default SearchBar;