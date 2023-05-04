import "../SearchBar/searchBarError.css"
const ReviewErrorModal =({setImageButtonClick})=>{
    return (
      <div>
        <div className="searchBar_heading">
          <div>
            <h1>Zelp</h1>
            <i className="fa-brands fa-yelp" style={{ fontSize: "25px" }}></i>
          </div>
          <div
            className="searchBar_closeModal"
            onClick={() => setImageButtonClick(false)}
          >
            <i className="fa-solid fa-xmark"></i>
          </div>
        </div>
        <div className="reviewErrorModal_warning">

            Please rate the restaurant and write a review before attaching
            images. Thank you!

        </div>
      </div>
    );
}

export default ReviewErrorModal
