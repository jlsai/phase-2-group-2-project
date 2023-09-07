
import React, { useState } from "react"

import './LandmarkCard.css';

function LandmarkCard({ name, desc, country, image, linkUrl, favorited, id, handleFavorite, deleteFavoriteLocation, handleRemove }) {

  const removeLoc = () => {
    handleRemove(id)
  }

  function handleClick() {
    fetch("http://127.0.0.1:6001/locations/" + id, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ favorited: !favorited })
    })
      .then(response => response.json())
      .then(data => {
        handleFavorite(data)

        if (data.favorited) {
          fetch("http://127.0.0.1:6001/favorites", {
            method: "POST",
            headers: { "content-type": "application/json" },
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
              deleteFavoriteLocation(data)
            })
        }
      })
  }


  return (
    <div className="cardStyle">
      <h2>{name}</h2>
      <img className="cardImg" src={image} alt={name}></img>
      <h3>{country}</h3>
      <p>{desc}</p>
      <link href={linkUrl}></link>
      <button onClick={handleClick}>{favorited ? "♥ UNFAVORITE" : "♡ FAVORITE"}</button>
      <button onClick={removeLoc}>DELETE</button>
    </div>
  )
}

export default LandmarkCard;
