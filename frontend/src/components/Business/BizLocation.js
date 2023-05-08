import { useLoadScript } from "@react-google-maps/api";
import { useEffect, useState } from "react";
import "./business.css";
import BizGMap from "../Map/Marker";
const BizLocation = ({ business }) => {


  return (
    <>
      <div style={{ width: "100%" }}>
        <h1
          style={{
            marginTop: "30px",
            fontSize: "24px",
            fontWeight: "700",
          }}
        >
          Location & Hours
        </h1>
      </div>
      <div className="locationWrapper">
        <div className="bizLocation">
          <BizGMap business={business} class_name={"locationMap"} />
          <div className="locationAddress">
            <h2>{business.city}{" "}{business.state},{business.zipCode}</h2>
            <h3>{business.name}</h3>
          </div>
        </div>

        <div className="hours">
          <ul>
            <li>Mon</li>
            <li>Tue</li>
            <li>Wed</li>
            <li>Thu</li>
            <li>Fri</li>
            <li>Sat</li>
            <li>Sun</li>
          </ul>
          <ul>
            <li>09:00</li>
            <li>09:00</li>
            <li>09:00</li>
            <li>09:00</li>
            <li>09:00</li>
            <li>09:00</li>
            <li>09:00</li>
          </ul>
          <ul>
            <li>Am</li>
            <li>Am</li>
            <li>Am</li>
            <li>Am</li>
            <li>Am</li>
            <li>Am</li>
            <li>Am</li>
          </ul>
          <ul>
            <li>-</li>
            <li>-</li>
            <li>-</li>
            <li>-</li>
            <li>-</li>
            <li>-</li>
            <li>-</li>
          </ul>
          <ul>
            <li>09:00</li>
            <li>09:00</li>
            <li>09:00</li>
            <li>09:00</li>
            <li>09:00</li>
            <li>09:00</li>
            <li>09:00</li>
          </ul>
          <ul>
            <li>Pm</li>
            <li>Pm</li>
            <li>Pm</li>
            <li>Pm</li>
            <li>Pm</li>
            <li>Pm</li>
            <li>Pm</li>
          </ul>
        </div>
      </div>
    </>
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
