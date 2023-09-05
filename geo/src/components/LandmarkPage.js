import React, {useState, useEffect} from "react"
import Search from './Search'
import LandmarkList from './LandmarkList'
import NewLandmarkForm from './NewLandmarkForm'

function LandmarkPage() {

	const [locations, setLocations] = useState([]);
	const [search, setSearch] = useState("");

	useEffect(() => {
		fetch("http://localhost:6001/locations")
		.then(response => response.json())
		.then(data => {
			setLocations(data);
		})
	}, [])

	console.log(locations)

	function handleFavorite(newLocation) {
		locations[newLocation.id - 1].favorited = newLocation.favorited;
		setLocations([...locations])
	}

	function searchChange(newSearch) {
		setSearch(newSearch);
	}

	const modifiedLocations = locations.filter(location => {
		return location.name_en.toLowerCase().includes(search.toLowerCase())
	})

	return (
		<div>
		<Search search={search} searchChange={searchChange}/>
		<LandmarkList locations={modifiedLocations} handleFavorite={handleFavorite}/>
		<NewLandmarkForm />
		</div>
	)
}

export default LandmarkPage;
