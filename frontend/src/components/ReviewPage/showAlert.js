const Alert=({setShowAlert,})=>{
    return (
      <div className="uploadImageModalDiv">
        <div className="searchBar_heading">
          <div>
            <h1>Zelp</h1>
            <i className="fa-brands fa-yelp" style={{ fontSize: "25px" }}></i>
          </div>
          <div
            className="searchBar_closeModal"
            onClick={() => setShowAlert(false)}
          >
            <i className="fa-solid fa-xmark"></i>
          </div>
        </div>
        <div className="uploadImageWrapper">
          <div className="uploadImageModalDiv">
            <img
              src="https://img.freepik.com/free-vector/online-review-concept-illustration_114360-1398.jpg"
              width="300px"
              style={{marginLeft:"30px"}}
            />
            <div className="imageHowto">
              <p>
                <span>Please</span> provide both a <span>star rating</span> and
                an <span>explanation for your review</span>.

              </p>
              <br></br>
              <p>
                <span>Thank You!</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Alert
