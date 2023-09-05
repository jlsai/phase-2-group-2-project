function LandmarkCard({name, desc, country, image, linkUrl, favorited, id, handleFavorite}) {

  function handleClick() {
    fetch("http://127.0.0.1:6001/locations/" + id, {
      method: "PATCH",
      headers: {"content-type": "application/json"},
      body: JSON.stringify({favorited: !favorited})
    })
    .then(response => response.json())
    .then(data => {
      handleFavorite(data)

      if (data.favorited) {
        fetch("http://127.0.0.1:6001/favorites", {
          method: "POST",
          headers: {"content-type": "application/json"},
          body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(postData => {
          console.log(postData)
        })
      } else {
        fetch("http://127.0.0.1:6001/favorites/" + id, {
          method: "DELETE"
        })
        .then(response => response.json())
        .then(() => {
          console.log("Deleted")
        })
      }
    })
  }

  return (
    <div>
      <h2>{name}</h2>
      <img src={image} alt={name}></img>
      <p>{desc}</p>
      <h5>{country}</h5>
      <link href={linkUrl}></link>
      <button onClick={handleClick}>{favorited ? "♥ UNFAVORITE" : "♡ FAVORITE"}</button>
    </div>
  )
}

export default LandmarkCard;
