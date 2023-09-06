import { Route, Routes} from "react-router-dom"
import React, {useState, useEffect} from "react"

import landmarks from '../images/landmarks.png'
import Home from './Home';
import Header from './Header';
import LandmarkPage from './LandmarkPage';
import Visited from './Visited';
import Profile from './Profile';
import Favorites from './Favorites';

function App() {

  const [locations, setLocations] = useState([]);
  const [currFavorites, setCurrFavorites] = useState(0);
	const [search, setSearch] = useState("");

	useEffect(() => {
		fetch("http://localhost:6001/locations")
		.then(response => response.json())
		.then(data => {
			setLocations(data);
		})
	}, [])

	function handleFavorite(newLocation) {
		locations[newLocation.id - 1].favorited = newLocation.favorited;
		setLocations([...locations])
    newLocation.favorited ? setCurrFavorites(currFavorites + 1) : setCurrFavorites(currFavorites - 1)
	}

  console.log(currFavorites)

	function searchChange(newSearch) {
		setSearch(newSearch);
	}

	const modifiedLocations = locations.filter(location => {
		return location.name_en.toLowerCase().includes(search.toLowerCase())
	})

  console.log(locations)

  return (
    <> 
    <Header />
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/landmarks" element={<LandmarkPage modifiedLocations={modifiedLocations} searchChange={searchChange} handleFavorite={handleFavorite} search={search}/>}/>
        <Route path="/visited" element={<Visited handleFavorite={handleFavorite}/>}/>
        <Route path="/profile" element={<Profile currFavorites={currFavorites}/>}/>
        <Route path="/Favorites" element={<Favorites />}/>

        </Routes>
    </div>
    
    </>
  );
}

export default App;
