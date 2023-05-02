import { useParams } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import csrfFetch from "../../store/csrf";
import { fetchBusiness } from "../../store/business";
import { receiveReview } from "../../store/review";

const ReviewEditPage = () => {
  const {review} = useParams()
  const location = useLocation()
  const {myReview} = location.state
  const dispatch = useDispatch();
  const bizInfo = review.split("-")
  const arr = review.split("-");
  const [hover, setHover] = useState(0);
  const [BID, setBID] = useState(arr[1]);
  const [rating, setRating] = useState(myReview.rating);
  const [body, setBody] = useState(myReview.body);
  const [userId, setUserId] = useState(myReview.userId);
  const [redirect, setRedirect] = useState(false);
  const [bName, setBname] = useState(arr[2]);
  const [photoFile, setPhotoFile] = useState(null);
  const [photoUrl, setPhotoUrl] = useState(null);
  const [imageFiles, setImageFiles] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);
  const myButton = useRef();
// debugger
  useEffect(() => {
    dispatch(fetchBusiness(BID));
  }, []);
 const handleSubmit = async (e) => {
   e.preventDefault();
   const formData = new FormData();
   formData.append("review[business_id]", BID);
   formData.append("review[user_id]", userId);
   formData.append("review[rating]", rating);
   formData.append("review[body]", body);

   if (photoFile) {
     formData.append("review[photo]", photoFile);
   }
   for (let i = 0; i < imageFiles.length; i++) {
     formData.append("review[images][]", imageFiles[i]);
   }

   const response = await csrfFetch(`/api/reviews/${myReview.id}`, {
     method: "PATCH",
     body: formData,
   });

   if (response.ok) {
     const post = await response.json();

     setPhotoFile(null);
     setImageFiles([]);
     setImageUrls([]);
     setRedirect(true);
   }
 };
  const handleFiles = ({ currentTarget }) => {
    const files = currentTarget.files;

    setImageFiles(files);
    if (files.length !== 0) {
      let filesLoaded = 0;
      const urls = [];
      Array.from(files).forEach((file, index) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = () => {
          urls[index] = fileReader.result;

          if (++filesLoaded === files.length) setImageUrls(urls);
        };
      });
    } else setImageUrls([]);
  };
  if (!myReview) {
    return <Redirect to="/login" />;
  }

  if (redirect) {
    return <Redirect to={`/business/${BID}`} />;
  }


  return (
    <form className="reviewForm" onSubmit={handleSubmit}>
      <h2>{bName}</h2>
      <div className="reviewFormWrapper">
        <div className="star-rating">
          {[...Array(5)].map((star, i) => {
            i += 1;
            return (
              <span
                key={i + 88}
                className={i <= rating ? "on" : "off"}
                onMouseEnter={() => setRating(i)}
                onMouseLeave={() => setHover(rating)}
              >
                <i className="fa-solid fa-star"></i>
              </span>
            );
          })}
        </div>

        <textarea
          value={body}
          placeholder={
            "Doesn’t look like much when you walk past, but I was practically dying of hunger so I popped in. The definition of a hole-in-the-wall. I got the regular hamburger and wow…  there are no words. A classic burger done right. Crisp bun, juicy patty, stuffed with all the essentials (ketchup, shredded lettuce, tomato, and pickles). There’s about a million options available between the menu board and wall full of specials, so it can get a little overwhelming, but you really can’t go wrong. Not much else to say besides go see for yourself! You won’t be disappointed."
          }
          onChange={(e) => setBody(e.target.value)}
        />
      </div>
      <div className="reviewFormWrapper reviewPicPreview">
        {imageUrls &&
          imageUrls.map((url) => (
            <img className="image__" src={url} key={url} />
          ))}
      </div>

      <div
        className="photoButton"
        onClick={() => myButton.current.click()}
        style={{
          display: "flex",
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "10px",
        }}
      >
        choose image
      </div>
      <input
        ref={myButton}
        className="submitButton"
        type="file"
        style={{ display: "none" }}
        onChange={handleFiles}
        multiple
        name="review[images][]"
      />

      <button className="submitButton">Update Review</button>
    </form>
  );
};

export default ReviewEditPage;
