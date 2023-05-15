
  import "./businessCard.css"
  import StarRating from "../StarRating/StarRating"
  import AOS from "aos";
  import "aos/dist/aos.css";
  import { useEffect } from "react";
import { Link } from "react-router-dom";
  const BusinessCard =({business})=>{


      return (
        <div
          className="businessCard"
          data-aos="fade-up"
          data-aos-offset="300"
        >
          <div className="businessCardPicture">
            {business?.photo ? (
              <div
                className="bizPic"
                style={{
                  backgroundImage: `url(${business?.photo})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  width: "250px",
                  height: "200px",
                }}
              />
            ) : (
              "no picture"
            )}
          </div>
          <ul className="businessCardInfo">
            <li className="businessName">
              <Link to={`business/${business.id}`}>
                <h1>{business.name}</h1>
              </Link>
            </li>
            <li>Do you recommend this business?</li>
            <li>
              <StarRating business={business} businessId={business.id} />
            </li>
          </ul>
        </div>
      );

  }

  export default BusinessCard
