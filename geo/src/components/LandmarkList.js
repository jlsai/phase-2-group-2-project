import LandmarkCard from './LandmarkCard';


function LandmarkList({locations,  handleFavorite, deleteFavoriteLocation, deleteLocation}) {


  const displayLocations = locations.map(location => {
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
    <div className="card-container">{displayLocations}</div>
  )
}

export default LandmarkList;
