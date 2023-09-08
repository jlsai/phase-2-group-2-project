import { useEffect, useState } from "react";
import LandmarkCard from "./LandmarkCard";

function Favorites({handleFavorite, favLocations, setNewFavLocations, deleteFavoriteLocation, deleteLocation}) {

    useEffect(() => {
      fetch("http://127.0.0.1:6001/favorites")
      .then(response => response.json())
      .then(data => {
        setNewFavLocations(data)
      })
    }, [])

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
        deleteLocation={deleteLocation}
        id={location.id}
      />
    })
    
    return (
      <div>{displayLocations}</div>
    )
  }
  
  export default Favorites;