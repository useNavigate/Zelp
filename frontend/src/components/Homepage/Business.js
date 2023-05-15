import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { fetchBusinesses } from "../../store/business";
import BusinessCard from "./businessCard";
import { fetchUnreviewedBusiness } from "../../store/business";
  import AOS from "aos";
  import "aos/dist/aos.css";

const Business = ({user}) => {
  const dispatch = useDispatch();
  const businesses = useSelector((state) => Object.values(state.business));

  useEffect(() => {
    AOS.init({
      once: false,
    });
    AOS.refresh();
  }, []);


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
      <div
        className="businessCardHolder"
        // data-aos="fade-up"
        // data-aos-offset="300"
      >
        {businesses?.map((business, i) => {
          return <BusinessCard business={business} key={`businessCard-${i}`} />;
        })}
      </div>
    </div>
  );
};
export default Business;
