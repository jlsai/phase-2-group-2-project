function Search({search, searchChange}) {

  function handleChange(event) {
    searchChange(event.target.value);
  }

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Landmarks:</label>
      <input 
        type="text"
        id="search"
        placeholder="Type a name to search"
        value={search}
        onChange={handleChange}
        />
    </div>
  )
}

export default Search;
