import React from 'react'
import { MapContainer, TileLayer, useMap, Marker, MarkerProps, Popup } from 'react-leaflet'
import data from '../assets/data.json'

const MapView = () => {
    

  return (
    <MapContainer center={[39.4730789903991, -0.37663455848786936]} zoom={13} scrollWheelZoom={true}>
    <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[39.4730789903991, -0.37663455848786936]}>
    <Popup>
      Bienvenido al Centro de Valencia
    </Popup>
  </Marker>

  {data.map(place => {
        <Marker 
        position={[place.location.latitude, place.location.longitude]}
        />
        console.log(place.location)
    })}
</MapContainer>
  )
}

export default MapView