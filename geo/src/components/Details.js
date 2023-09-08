import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './Details.css'; 

function Details() {
  const [location, setLocation] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://127.0.0.1:6001/locations/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setLocation(data);
      });
  }, []);

  return (
    <div className="details-container">
      <h1>{location.name_en}</h1>
      <img src={location.image} alt={location.name_en}></img>
      <p>{location.short_description_en}</p>
      <h4>{location.states_name_en}</h4>
      <h4>{location.region_en}</h4>
      <h5>LONGITUDE: {location.longitude}</h5>
      <h5>LATITUDE: {location.latitude}</h5>
    </div>
  );
}

export default Details;
