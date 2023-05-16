import { useParams } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import csrfFetch from "../../store/csrf";
import { fetchBusiness } from "../../store/business";


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
  const [imageFiles, setImageFiles] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);
  const [prevImageUrls , setPrevImageUrls] = useState([...myReview.imageUrls])
  const [wasImage,setWasImage] = useState(false)
  const myButton = useRef();



  useEffect(() => {
    dispatch(fetchBusiness(BID));
  }, []);

useEffect(() => {
  if (prevImageUrls.length !== 0) {
    setWasImage(true);
  }
}, [prevImageUrls]);

  const handleDelete = async (i) => {
    const res = await csrfFetch(`/api/reviews/${myReview.id}/delete_image`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ index: i }),
    });

    if (res.ok) {
      const updatedImageUrls = [...prevImageUrls];
      updatedImageUrls.splice(i, 1);
      setPrevImageUrls(updatedImageUrls);
    }
  };

 const handleSubmit = async (e) => {
   e.preventDefault();
   const formData = new FormData();
   formData.append("review[business_id]", BID);
   formData.append("review[user_id]", userId);
   formData.append("review[rating]", rating);
   formData.append("review[body]", body);

   for (let i = 0; i < imageFiles.length; i++) {
     formData.append("review[images][]", imageFiles[i]);
   }

   const response = await csrfFetch(`/api/reviews/${myReview.id}`, {
     method: "PATCH",
     body: formData,
   });

   if (response.ok) {
     const post = await response.json();

    //  setPhotoFile(null);
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

        if (++filesLoaded === files.length) {
          // Combine old and new URLs and set state
          const allUrls = [...imageUrls, ...urls];
          setImageUrls(allUrls);
          setImageFiles(files);
        }
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
const handleImageDelete = (i) => {
  const updatedImageUrls = [...imageUrls];
  updatedImageUrls.splice(i, 1);
  setImageUrls(updatedImageUrls);
  const updatedImageFiles = [...imageFiles];
  updatedImageFiles.splice(i, 1);
  setImageFiles(updatedImageFiles);
};


  return (
    <form className="reviewForm" onSubmit={handleSubmit}>
      <div className="imageUploadDiv">
        <h2>{bName}</h2>
      </div>

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
          maxlength="1300"
          minLength="100"
          value={body}
          placeholder={"startEditing!"}
          onChange={(e) => setBody(e.target.value)}
        />
      </div>
      <div className="imageUploadDiv">
        <h3>Your Previous Images</h3>
      </div>
      <div className="reviewFormWrapper reviewPicPreview">
        {prevImageUrls &&
          prevImageUrls.map((url, i) => (
            <div
              className="image__"
              key={url + i}
              style={{
                backgroundImage: `url(${url})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div onClick={() => handleDelete(i)}>
                <i className="fa-solid fa-xmark"></i>
              </div>
            </div>
          ))}

        {wasImage === false && prevImageUrls.length === 0 && (
          <div>
            <i className="fa-solid fa-image"></i>
            <h1>There have been no images submitted previously.</h1>
          </div>
        )}
        {wasImage && prevImageUrls.length === 0 && (
          <div>
            <i className="fa-solid fa-image"></i>
            <h1>You deleted all the previous image</h1>
          </div>
        )}
      </div>
      <div className="imageUploadDiv">
        <h3>New Images</h3>
      </div>
      <div className="reviewFormWrapper reviewPicPreview">
        {imageUrls &&
          imageUrls.map((url, i) => (
            <div
              className="image__"
              key={url + i}
              style={{
                backgroundImage: `url(${url})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div onClick={() => handleImageDelete(i)}>
                <i className="fa-solid fa-xmark"></i>
              </div>
            </div>
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
        onClick={(e) => (e.currentTarget.value = null)}
        multiple
      />

      <button className="submitButton">Update Review</button>
    </form>
  );
};

export default ReviewEditPage;
