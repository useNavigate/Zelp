import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { fetchBusinesses } from "../../store/business";
import BusinessCard from "./businessCard";
import { fetchUnreviewedBusiness } from "../../store/business";

const Business = ({user}) => {
  const dispatch = useDispatch();
  const businesses = useSelector((state) => Object.values(state.business));



  useEffect(() => {
    dispatch(fetchUnreviewedBusiness());
  }, [dispatch,]);

    if (businesses === undefined || businesses === null || businesses.length === 0) {
      return null;
    }

  return (
    <div className="businessCardsWrapper">
      <div className="businessCardHeader">
        <h1>Your Next Review Awaits</h1>
      </div>
      <div className="businessCardHolder">

        {businesses?.map((business, i) => {
          return <BusinessCard business={business} key={`businessCard-${i}`} />;
        })}


      </div>
    </div>
  );
};
export default Business;
