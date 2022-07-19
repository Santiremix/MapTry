import React from "react";
import {
  MapContainer,
  TileLayer,
  useMap,
  Marker,
  MarkerProps,
  Popup,
} from "react-leaflet";
import data from "../assets/data.json";

const MapView = () => {
  console.log(data);

  const resp = data.map((place) => {
    return (
      <Marker position={[place.location.latitude, place.location.longitude]}>
        <Popup>{place.description}</Popup>
      </Marker>
    );
  });

  return (
    <MapContainer
      center={[39.4730789903991, -0.37663455848786936]}
      zoom={13}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* <Marker position={[39.4730789903991, -0.37663455848786936]}>
        <Popup>Bienvenido al Centro de Valencia</Popup>
      </Marker> */}
      {resp}
    </MapContainer>
  );
};

export default MapView;
