import './Map.css'; 
import React, { useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, CircleMarker, Popup } from "react-leaflet" 
import { Icon } from 'leaflet';
import "leaflet/dist/leaflet.css"
import markerIcon from '../images/maps-and-flags.png';

function MyMap({lat, long}) {

  console.log("LOL")
  const marker = {
    geocode: [lat, long]
  }

  const customIcon = new Icon({
    iconUrl: markerIcon,
    iconSize: [38, 38]
  })

  return (
    <MapContainer id="map" center={[lat, long]} zoom={12}>

      <TileLayer
        url={"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}
      />

      <Marker position={marker.geocode} icon={customIcon}></Marker>
      <CircleMarker center={[lat, long]} radius={100}>
        <Popup>Popup</Popup>
      </CircleMarker>
    
    </MapContainer>
  )
}

export default MyMap;