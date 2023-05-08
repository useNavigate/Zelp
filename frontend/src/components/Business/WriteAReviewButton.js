import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./business.css";
const WriteAReviewButton = ({ business,id}) => {
    const sessionUser = useSelector((state) => state.session.user);


      if (
        business === undefined ||
        business === null ||
        business.length === 0
      ) {
        return null;
      }

  return sessionUser ? (
    <Link
      className="_reviewButton"
      to={`/review/0-${id}-${business.name}`}
    >
      <i className="fa-regular fa-star"></i> Write a Review
    </Link>
  ) : (
    <Link to="/login" className="_reviewButton">
      Write a Review
    </Link>
  );
};


export default WriteAReviewButton
