import "./searchBarError.css";
const SearchBarError = ({ setShowModal }) => {
  return (
    <div className="searchBarErrorDiv">
      <div className="searchBar_heading">
        <div>
          <h1>Zelp</h1>
          <i className="fa-brands fa-yelp" style={{ fontSize: "25px" }}></i>
        </div>
        <div
          className="searchBar_closeModal"
          onClick={() => setShowModal(false)}
        >
          <i className="fa-solid fa-xmark"></i>
        </div>
      </div>
      <div className="searchBarErrorInfo">
        <h1>Please Type what you want to search!</h1>
        <p>
          You can <span>search</span> by <span>category</span>, such as{" "}
          <span>'Coffee'</span> or <span>'Ramen'</span>, or by the{" "}
          <span>name</span> of a specific restaurant, such as{" "}
          <span>'Starbucks</span>
        </p>
      </div>
    </div>
  );
};

export default SearchBarError;
