function Search() {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Landmarks:</label>
      <input 
        type="text"
        id="search"
        placeholder="Type a name to search"/>
    </div>
  )
}

export default Search;
