import "./map.css";
import { fetchUnreviewedBusiness } from "../../store/business";
import { useDispatch, useSelector } from "react-redux";
import { useState, useMemo, useEffect } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const place = ["places"];
export default function BizGMap({ business }) {

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_MAPS_API_KEY,
    libraries: place,
    // libraries: ["places"]
  });
  if (!business) {
    return null;
  }
  if (!isLoaded) return <div>Loading...</div>;
  return <Map business={business} />;
}

function Map({ business }) {
  const center = useMemo(
    () => ({ lat: business.lat, lng: business.lng }),
    [business]
  );
  const [selected, setSelected] = useState(null);

  return (
    <>

      <GoogleMap
        zoom={15}
        center={center}
        mapContainerClassName="map-container"
        options={{
          keyboardShortcuts: false, // Disable keyboard shortcuts
        }}
      >
        <Marker
          position={{
            lat: business?.lat,
            lng: business?.lng,
          }}
          animation={1}
        />


      </GoogleMap>
    </>
  );
}
