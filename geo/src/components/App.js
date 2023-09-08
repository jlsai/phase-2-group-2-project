import { Route, Routes} from "react-router-dom"
import React, {useState, useEffect} from "react"

import landmarks from '../images/landmarks.png'
import Home from './Home';
import Header from './Header';
import LandmarkPage from './LandmarkPage';
import Visited from './Visited';
import Profile from './Profile';
import Favorites from './Favorites';
import NewLandmarkForm from './NewLandmarkForm';
import Details from "./Details";
import MyMap from "./MyMap";

function App() {

  const [locations, setLocations] = useState([]);
  const [favLocations, setFavLocations] = useState([]) 
  const [currFavorites, setCurrFavorites] = useState(0);
	const [search, setSearch] = useState("");

	useEffect(() => {
		fetch("http://localhost:6001/locations")
		.then(response => response.json())
		.then(data => {
			setLocations(data);
		})
	}, [])

  function setNewFavLocations(newFavLocations) {
    setFavLocations(newFavLocations)
  }

  function deleteFavoriteLocation(deletedLocation) {
    const newFavLocations = favLocations.filter(location => {
      return location.id !== deletedLocation.id;
    })
    setFavLocations(newFavLocations)
  }

	function handleFavorite(newLocation) {
    console.log(newLocation)
    console.log(newLocation.favorited)
    console.log(locations);
    console.log(locations[newLocation.id - 1])
		locations[newLocation.id - 1].favorited = newLocation.favorited;
		setLocations([...locations])
    newLocation.favorited ? setCurrFavorites(currFavorites + 1) : setCurrFavorites(currFavorites - 1)
	} 

  function addNewLocation(newLocation) {
    setLocations([...locations, newLocation])
  }
  
  function deleteLocation(id) {
    const newLocations = locations.filter(location => {
      return location.id !== id;
    }) 
    const newFavorites = favLocations.filter(location => {
      return location.id !== id;
    })

    setLocations(newLocations)
    setFavLocations(newFavorites)
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
        <Route exact path="/" element={<Home/>}/>
        <Route path="/visited" element={<Visited/>}/>
        <Route path="/Form" element={<NewLandmarkForm addNewLocation={addNewLocation}/>}/>
        <Route path="/landmarks" element={<LandmarkPage modifiedLocations={modifiedLocations} searchChange={searchChange} handleFavorite={handleFavorite} search={search} deleteFavoriteLocation={deleteFavoriteLocation} deleteLocation={deleteLocation}/>}/>
        <Route path="/profile" element={<Profile currFavorites={currFavorites}/>}/>
        <Route path="/Favorites" element={<Favorites handleFavorite={handleFavorite} setNewFavLocations={setNewFavLocations} deleteFavoriteLocation={deleteFavoriteLocation} favLocations={favLocations} deleteLocation={deleteLocation}/>}/>
        <Route path="/landmarks/:id" element={<Details />}/>
        <Route path="/map" element={<MyMap />} />
        </Routes>
    </div>
    
    </>
  );
}

export default App;
