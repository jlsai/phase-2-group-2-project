import { useEffect, useState } from "react";
import LandmarkCard from "./LandmarkCard";

function Visited({handleFavorite}) {

    const [favLocations, setFavLocations] = useState([]) 

    useEffect(() => {
      fetch("http://127.0.0.1:6001/favorites")
      .then(response => response.json())
      .then(data => {
        setFavLocations(data)
      })
    }, [])

    function deleteFavoriteLocation(deletedLocation) {
      const newFavLocations = favLocations.filter(location => {
        return location.id !== deletedLocation.id;
      })
      setFavLocations(newFavLocations)
    }

    const displayLocations = favLocations.map(location => {
      return <LandmarkCard 
        key={location.id}
        name={location.name_en}
        desc={location.short_description_en}
        country={location.states_name_en}
        image={location.image}
        linkUrl={location.link}
        favorited={location.favorited}
        handleFavorite={handleFavorite}
        deleteFavoriteLocation={deleteFavoriteLocation}
        id={location.id}
      />
    })
    
    return (
      <div>{displayLocations}</div>
    )
  }
  
  export default Visited;