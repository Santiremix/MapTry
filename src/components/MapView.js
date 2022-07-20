import React, {useEffect, useState} from 'react'
import { MapContainer, TileLayer, useMap, Marker, MarkerProps, Popup } from 'react-leaflet'
import data from '../assets/data.json'

const MapView = () => {

    const resp = data.map((place) => {
        return (
          <Marker position={[place.location.latitude, place.location.longitude]}>
            <Popup>
                <b>{place.name}</b> <br/><br/>
                {place.description}
            </Popup>
          </Marker>
        );
      });

      const [state, setState] = useState({
        longitude: 0,
        latitude: 0,
    })

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            function(position) {
                setState({
                    longitude: position.coords.longitude,
                    latitude: position.coords.latitude
                    
                })
                console.log(state)
            },
            function(error) {
                console.log(error)
            },
            { 
                enableHighAccuracy: true
            }
        );
    }, [])

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

  {resp}

  <Marker position={[state.latitude, state.longitude]} >
    <Popup>
      Estás Aquí
    </Popup>
  </Marker>

</MapContainer>
  )
}

export default MapView