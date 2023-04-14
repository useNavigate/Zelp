
  import "./businessCard.css"
  import StarRating from "../StarRating/StarRating"
import { Link } from "react-router-dom";
  const BusinessCard =({business})=>{


      return (
        <div className="businessCard">
          <div className="businessCardPicture">
            {business?.photo ? <img className="bizPic" src={`${business.photo}`} width="250px" height="200px"/> :"no picture"}
          </div>
          <ul className="businessCardInfo">
            <li className="businessName">
              <Link to ={`business/${business.id}`}>

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
