import { useState } from "react";
import FixedStarRating from "../StarRating/FixedStarRating";
import "./business.css";
import { Modal } from "../../Context/Modal";
import ImageModal from "./ImageModal";

const BizImageHolder = ({ business, reviews }) => {
  const [showModal, setShowModal] = useState(false);

const imageNum = Object.values(reviews)
  .reduce((acc, review) => {
    acc += review.imageUrls.length;
    return acc;
  }, 0);

  function checkTime() {
    const now = new Date();
    const hours = now.getHours();
    const isOpen = hours >= 9 && hours <= 21;

    return isOpen ? "Open" : "Closed";
  }
  return (
    <div className="blackGrad">
      <div
        className="bizImageHolder"
        style={{
          backgroundImage: `url(${business?.photo})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="dark"></div>
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
          <span className="bizCategory">
            <span style={{ color: "rgba(88,180,255,1)" }}>
             {" "} <i className="fa-solid fa-circle-check"></i>Claimed
            </span>
            -{business?.category}
          </span>
          <div>
            <h3 style={{color:"green"}}>{checkTime()}</h3>:<h4>9:00 am ~ 9:00 pm</h4>
          </div>
        </div>
        {imageNum > 0 ? (
          <div className="MoreImages">
            <h1 onClick={() => setShowModal(true)}>View {imageNum} Images</h1>
          </div>
        ) : (
          <div className="MoreImages">
            <h1>No Images available</h1>
          </div>
        )}
      </div>
      {showModal && (
        <Modal>
          <ImageModal setShowModal={setShowModal} reviews={reviews} />
        </Modal>
      )}
    </div>
  );
};

export default BizImageHolder;
// {
//   Object.values(reviews)
//     .reverse()
//     .map((review) => {
//       return review.imageUrls.map((url) => (
//         <img key={url} src={url} alt="Review image" />
//       ));
//     });
// }
