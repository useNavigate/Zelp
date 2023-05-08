import { Link } from "react-router-dom";

import "./business.css";
const EditReviewButton = ({ business,bizId,myReview}) => {
  if (business === undefined || business === null || business.length === 0) {
    return null;
  }


  return (

    <Link
      className="_reviewButton"
      to={{pathname:`/edit/${myReview.rating}-${bizId}-${business.name}`,
      state:{myReview}}}
    >
      <i className="fa-regular fa-star"></i> Edit Review
    </Link>
  );
};


export default EditReviewButton
