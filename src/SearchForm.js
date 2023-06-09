import React  from 'react';
import { useState } from 'react';
import { business } from './business';
import './businessList.css';
import ReactDOM from 'react-dom';

export default function SearchForm({name, label}) {
    const [state, setState ] = useState("");

    return(
        <div>
           <label className="Search-label">{label}</label>
           <input type="text" value={state} name={name} onChange={(e) => setState(e.target.value)} />
           {state}
        </div>   
    );
}

