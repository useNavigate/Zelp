import "./map.css";

import { useDispatch, useSelector } from "react-redux";
import { useState, useMemo, useEffect } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";


const place = ["places"];
export default function GMap({ business }) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_MAPS_API_KEY,
    libraries: place,
  });
  if (!isLoaded) return <div>Loading...</div>;
  return <Map business={business} />;
}

function Map({ business }) {
  const center = useMemo(() => ({ lat: 40.736181, lng: -73.993937 }), []);
  const [show, setShow] = useState(false);

  if (!business) {
    return null;
  }

  const markers = [];
  Object.values(business).forEach((biz) => {
    let location = { lat: biz.lat, lng: biz.lng };
    markers.push(location);
  });

  return (
    <>
      <div className="places-container">
      </div>
      <GoogleMap
        zoom={15}
        center={center}
        mapContainerClassName="map-container"
      >
        {markers.map((location, i) => (
          <Marker
            position={location}
            animation={window.google.maps.Animation.DROP}
            key={i+9999999}
          />
        ))}
        {show && <h1>{business.name}</h1>}
      </GoogleMap>
    </>
  );
}

