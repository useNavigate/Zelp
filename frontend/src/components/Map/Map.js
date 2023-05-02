import "./map.css";
import { useState, useMemo, useEffect } from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { Link } from "react-router-dom";

import FixedStarRating from "../StarRating/FixedStarRating";

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
  const [selectedBusiness, setSelectedBusiness] = useState(null);

  useEffect(() => {
    if (!show) return;

    const closeMenu = () => {
      setShow(false);
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [show]);

  useEffect(() => {
    setSelectedBusiness(null);
  }, [business]);

  if (!business) {
    return null;
  }

  const markers = [];
  Object.values(business).forEach((biz) => {
    let location = { lat: biz.lat, lng: biz.lng };
    markers.push({
      position: location,
      name: biz.name,
      category: biz.category,
      photo: biz.photo,
      rating: biz.rating,
      id:biz.id
    });
  });

  const handleMarkerClick = (business) => {
    setSelectedBusiness(business);
  };

  return (
    <>
      <div className="places-container"></div>
      <GoogleMap
        zoom={15}
        center={center}
        mapContainerClassName="map-container"
      >
        {markers.map((business, i) => (
          <Marker
            position={business.position}
            animation={window.google.maps.Animation.DROP}
            key={i + 9999999}
            onClick={() => handleMarkerClick(business)}
          />
        ))}
        {selectedBusiness && (
           <Link to={`/business/${selectedBusiness.id}`}>
          <InfoWindow
            position={selectedBusiness.position}
            onCloseClick={() => setSelectedBusiness(null)}
          >

            <div className="infoWindow">
              <div className="infoWindow_img"
                style={{
                  backgroundImage: `url(${selectedBusiness.photo})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <FixedStarRating rating={selectedBusiness.rating} />
              <h2>{selectedBusiness.name}</h2>
              <p>{selectedBusiness.category}</p>
            </div>
          </InfoWindow>
          </Link>
        )}
      </GoogleMap>
    </>
  );
}





