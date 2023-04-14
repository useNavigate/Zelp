import { useState } from "react";
import "./starRating.css"
import { Link } from "react-router-dom";

const StarRating =({businessId,business})=>{
    const [rating,setRating] = useState(0)
    const [hover,setHover] = useState(0)
    return(
        <div className ="star-rating">
            <Link to ={`/review/${rating}-${businessId}-${business.name}`}>
            {[...Array(5)].map((star,i)=>{
                i+=1
                return (
                    <button
                      key={i+99}
                      className={i <= rating ? "on" : "off"}
                      onMouseEnter={() => setRating(i)}
                      onMouseLeave={() => setHover(rating)}
                    >
                      <i className="fa-solid fa-star"></i>
                    </button>
                );
            })}
            </Link>
        </div>
    )
}


export default StarRating

