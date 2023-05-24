import React  from 'react';
import ReactDOM from 'react-dom';

function SearchBar(){
    const business = '';
    const location = '';

    function handleClick(){
        alert('Search successful');
    }

    return(
     <div>
        <p><textarea>{business}</textarea></p>
        <p><textarea>{location}</textarea></p>
        <p></p>
        <button onClick={handleClick}>Submit</button>
     </div>   
    )
}

export default SearchBar;