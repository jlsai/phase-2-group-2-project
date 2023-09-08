import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom"

import MyMap from "./MyMap"
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
  


    useEffect(() => {
        fetch(`http://127.0.0.1:6001/locations/${id}`)
        .then(response => response.json())
        .then(data => {
            setLocation(data)
        })
    }, [id])

    if (Object.keys(location).length === 0) {
        return null;
    }
    
    return (
      <div className="container">
        <Link to="/landmarks" className="backbtn">
          <h1>&lt;</h1>
        </Link>
        <div className="details-container">
          <h1>{location.name_en}</h1>
          <img src={location.image} alt={location.name_en} />
          <p>{location.short_description_en}</p>
          <h4>{location.states_name_en}</h4>
          <h4>{location.region_en}</h4>
          <h5>LONGITUDE: {location.longitude}</h5>
          <h5>LATITUDE: {location.latitude}</h5>
        </div>
        <div className="map-container">
          <MyMap lat={location.latitude} long={location.longitude} />
        </div>
      </div>
    );
    
}

export default Details;
