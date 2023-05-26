import React  from 'react';
import { useState } from 'react';
import './businessList.css';
import ReactDOM from 'react-dom';

function SearchBar(){
    const [business, setBusiness ] = useState("");
    const [location, setLocation ] = useState("");

    function handleClick(){
        alert('Search successful');
    }

    return(
     <div>
        <h1 className="Search-h1">Search for Businesses</h1>
        <label>Set Business:
            <input type="text" value={business} onChange={(e) => setBusiness(e.target.value)}></input>
        </label>
        <label>Set Location:
            <input type="text" value={location} onChange={(e) => setLocation(e.target.value)}></input>
        </label>
        <button onClick={handleClick}>Submit</button>
     </div>   
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<SearchBar />);
export default SearchBar;