import { useEffect ,useState} from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchSearchTerm } from "../../store/business";
import SearchCard from "../SearchCard/SearchCard";
import "./searchPage.css";
import GMap from "../Map/Map";
import Loading from "../Utils/Loading";

const SearchResult = () => {
  const { searchTerm } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSearchTerm(searchTerm)).then(()=>{
      setIsLoading(false);
    });
  }, [searchTerm]);

  const businesses = useSelector((state) => state.business);
  if (isLoading) {
    return <Loading/>;
  }
  return businesses &&
    businesses.business &&
    Object.values(businesses.business).length > 0 ? (
    <div className="searchPageWrapper">
      <div className="searchCardsHolder">
        <h1>All "{searchTerm}" results</h1>
        {Object.values(businesses.business).map((business, i) => (
          <SearchCard
            key={business.name}
            biz={business}
            reviews={businesses.reviews && businesses.reviews[business.id]}
            index={i}
          />
        ))}
      </div>
      <div className="googleMap">
        <GMap business={businesses.business} />
      </div>
    </div>
  ) : (
    <div className="noResult">
      <h1>
        No result for <span className="invalidSearchTerm"> "{searchTerm}"</span>
      </h1>

    </div>
  );
};
export default SearchResult;
