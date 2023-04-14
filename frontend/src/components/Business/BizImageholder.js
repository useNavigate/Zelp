import FixedStarRating from "../StarRating/FixedStarRating";
import "./business.css";
const BizImageHolder =({business})=>{
// debugger
    return (
      <div
        className="bizImageHolder"
        style={{
          backgroundImage: `url(${business?.photo})`,
          backgroundSize: "cover",
          backgroundPosition:"center"

        }}
      >
        <div className="bizRating">
          <h1>{business?.name}</h1>

          <div>
            <FixedStarRating rating={business?.rating} />
            {business?.reviews && (
              <span className="ratingLength">
                {business?.reviews.length} reviews
              </span>
            )}
          </div>
          <span className="bizCategory">{business?.category}</span>
        </div>
      </div>
    );
}

export default BizImageHolder
