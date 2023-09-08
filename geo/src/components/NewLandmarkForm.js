import React, {useState} from "react";
import landmarks from '../images/landmarks.png';
import './NewLandmarkForm.css';

function NewLandmarkForm({addNewLocation}) {

  const initial = {
      "favorited": false,
      "name_en": "",
      "short_description_en": "",
      "longitude": "",
      "latitude": "",
      "category": "",
      "states_name_en": "",
      "region_en": "",
      "image": "",
  }

  const [location, setLocation] = useState(initial)

  function handleChange(event) {
    const {name, value} = event.target
    
    setLocation({
      ...location,
      [name]: value
    })
  }

  function handleSubmit(event) {
    event.preventDefault();
    fetch("http://127.0.0.1:6001/locations", {
      method: "POST",
      headers: {"content-type": "application/json"},
      body: JSON.stringify(location)
    })
    .then(response => response.json())
    .then(data => {
      addNewLocation(data)
      setLocation(initial)
    })
  }

  return (
    <div className="form">
      
      <form onSubmit={handleSubmit}>
      <img src={landmarks} className="logo3"></img>
        <input className="form-child" name="name_en" type="text" placeholder="ENTER NAME" value={location.name_en} onChange={handleChange}></input>
        <input className="form-child" name="short_description_en" type="text" placeholder="ENTER DESCRIPTION" value={location.short_description_en} onChange={handleChange}></input>
        <input className="form-child" name="image" type="text" placeholder="ENTER IMAGE" value={location.image} onChange={handleChange}></input>
        <input className="form-child" name="category" type="text" placeholder="ENTER CATEGORY" value={location.category} onChange={handleChange}></input>
        <input className="form-child" name="states_name_en" type="text" placeholder="ENTER COUNTRY" value={location.states_name_en} onChange={handleChange}></input>
        <input className="form-child" name="region_en" type="text" placeholder="ENTER REGION" value={location.region_en} onChange={handleChange}></input>
        <input className="form-child" name="longitude" type="text" placeholder="ENTER LONGITUDE" value={location.longitude} onChange={handleChange}></input>
        <input className="form-child" name="latitude" type="text" placeholder="ENTER LATITUDE" value={location.latitude} onChange={handleChange}></input>
        <input className="submit" type="submit" value="submit"></input>
      </form>
    </div>
  )
}

export default NewLandmarkForm;
