import React from 'react';
import './Search.css'; 
import { Link } from "react-router-dom"

function Search({search, searchChange}) {

  function handleChange(event) {
    searchChange(event.target.value);
  }

  return (
    <div className='searchContainer'>
      <div className="searchbar">
        <input 
          type="text"
          id="search"
          placeholder="Search a location"
          value={search}
          className='style'
          onChange={handleChange}
        />
        <Link to="/Form" className='FormBtn'>Add a new Landmark</Link>
      </div>
    </div>
  )
}

export default Search;
