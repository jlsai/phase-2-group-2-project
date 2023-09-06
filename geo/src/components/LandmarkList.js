import LandmarkCard from './LandmarkCard';

function LandmarkList({locations,  handleFavorite, visited}) {

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
      visited={visited}
      id={location.id}
    />
  })

  return (
    <div>{displayLocations}</div>
  )
}

export default LandmarkList;
