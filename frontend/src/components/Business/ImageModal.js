const ImageModal=({setShowModal,reviews})=>{
    return (
      <div>
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

        <div style={{ display: "flex" }}>
          {Object.values(reviews)
            .reverse()
            .map((review) => {
              return review.imageUrls.map((url, i) => (
                <div
                  key={url}
                  style={{
                    backgroundImage: `url(${url})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    width: "100px",
                    height: "100px",
                  }}
                ></div>
              ));
            })}
        </div>
      </div>
    );
}

export default ImageModal
