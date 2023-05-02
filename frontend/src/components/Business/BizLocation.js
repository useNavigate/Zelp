import { useLoadScript } from "@react-google-maps/api";
import { useEffect, useState } from "react";
import "./business.css";
import BizGMap from "../Map/Marker";
const BizLocation = ({ business }) => {
  return (
    <div className="locationWrapper">
      <h1
        style={{
          marginTop: "30px",
          marginBottom: "30px",
          fontSize: "24px",
          fontWeight: "700",
        }}
      >
        Location&Hours
      </h1>
      <div className="bizLocation">
        <div className="locationMap">
          <BizGMap business={business} />
        </div>

        <div className="hours">
          <div>Mon 9:00 AM - 9:00 PM </div>
          <div>Tue 9:00 AM - 9:00 PM </div>
          <div>Wed 9:00 AM - 9:00 PM </div>
          <div>Thu 9:00 AM - 9:00 PM </div>
          <div>Fri 9:00 AM - 9:00 PM </div>
          <div>Sat 9:00 AM - 9:00 PM </div>
          <div>Sun 9:00 AM - 9:00 PM </div>
        </div>
      </div>
    </div>
  );
};

export default BizLocation;



const Geocode = ({ lat, lng }) => {
  const [address, setAddress] = useState("");

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_MAPS_API_KEY,
    libraries: ["places"],
  });

  useEffect(() => {
    if (isLoaded) {
      const geocoder = new window.google.maps.Geocoder();
      geocoder.geocode({ location: { lat, lng } }, (results, status) => {
        if (status === "OK" && results[0]) {
          setAddress(results[0].formatted_address);
        }
      });
    }
  }, [isLoaded, lat, lng]);

  return <div>{address}</div>;
};
