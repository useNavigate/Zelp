import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { useState } from "react";
import * as sessionActions from "../../store/session";
import "./signup.css";
import SignupHeader from "./SignupHeader";
import { useRef } from "react";
import { Modal } from "../../Context/Modal";
import { useEffect } from "react";
const SignupFormPage = () => {
  const myButton = useRef();
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [year, setYear] = useState("");
  const [errors, setErrors] = useState([]);

  const [imageFile, setImageFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
const [showModal, setShowModal] = useState(false);

// useEffect(()=>{setErrors([])},[errors])
  function pickDay(day) {
    return Array.from({ length: day }, (emptyArr, i) => (
      <option key={i + 1} value={i + 1}>
        {i + 1}
      </option>
    ));
  }

  const getYear = () => {
    return Array.from({ length: 122 }, (emptyArr, i) => (
      <option key={`year -${yr - i}`} value={yr - i}>
        {yr - i}
      </option>
    ));
  };

  const today = new Date();
  const yr = today.getFullYear();

  if (sessionUser) return <Redirect to="/" />;

  const handleImageDelete = () => {
    setImageUrl(null)
    setImageFile(null)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let birthday = new Date(`${year}-${month}-${day}`);
    let isoBirthday;
    if (year === "" || month === "" || day === "") {
      isoBirthday = "";
    } else {
      isoBirthday = birthday.toISOString().substring(0, 10);
    }

    if (password === confirmPassword) {
      setErrors([]);
      let newUser
      if(imageFile){

        newUser = sessionActions.signup({
          email,
          password,
          firstName,
          lastName,
          zipCode,
          birthday: isoBirthday,
          avatar: imageFile,
        });
      }else{
            newUser = sessionActions.signup({
          email,
          password,
          firstName,
          lastName,
          zipCode,
          birthday: isoBirthday,
        });
      }

      dispatch(newUser).then((resData) => {
        if (resData.errors) {
          setErrors(resData.errors);
 setShowModal(true)
        }
      });
    } else {
      setErrors([
        "Confirm Password field must be the same as the Password field",
      ]);
       setShowModal(true)
    }
  };
  //---------
  const handleFiles = ({ currentTarget }) => {
    const file = currentTarget.files[0];
    setImageFile(file);
    if (file) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => setImageUrl(fileReader.result);
    } else setImageUrl(null);
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   let birthday = new Date(`${year}-${month}-${day}`);
  //   let isoBirthday;
  //   if (year === "" || month === "" || day === "") {
  //     isoBirthday = "";
  //   } else {
  //     isoBirthday = birthday.toISOString().substring(0, 10);
  //   }

  //   if (password === confirmPassword) {
  //     setErrors([]);

  //     let newUser = sessionActions.signup({
  //       email,
  //       password,
  //       firstName,
  //       lastName,
  //       zipCode,
  //       birthday: isoBirthday,
  //     });

  //     dispatch(newUser).then((resData) => {
  //       if (resData.errors) {
  //         setErrors(resData.errors);
  //       }
  //     });
  //   } else {
  //     setErrors([
  //       "Confirm Password field must be the same as the Password field",
  //     ]);
  //   }
  // };


  return (
    <>
 <div style={{position:"relative"}}>



  {showModal&&
    <Modal>
 <ul className="error"  >
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

      <div className="deletedSuccess">
           {errors.map((error,i) => (
          <p key={"error" + i} style={{margin:"10px"}}>{error} </p>
          ))}
      </div>
          </div>
      </ul>






    </Modal>

  }

      </div>
      <div className="signupForm-wrapper">
        <form className="signupForm" onSubmit={handleSubmit}>
          <SignupHeader />
          {/* -------------- */}
          <div className="preview_profile">
            {imageUrl ? (
              <div className="centered">
                <div
                  className="Background"
                  key={imageUrl}
                  style={{
                    backgroundImage: `url(${imageUrl})`,
                  }}
                >

                </div>
                   <div className="deleteExit" onClick={handleImageDelete}>
                    <i
                      className="fa-solid fa-xmark"
                      style={{ cursor: "pointer" }}
                    ></i>
                  </div>
              </div>
            ) : (
              <div className="centered">
                <div className="image__ Default_icon" key={imageUrl}>
                  <i
                    className="fa-solid fa-user"
                    style={{ fontSize: "60px" }}
                  ></i>
                </div>
              </div>
            )}
              <div
              className="profile_image_button"
              onClick={() => myButton.current.click()}
            >
              Add a Profile Picture
            </div>
            <input
                ref={myButton}
                      style={{ display: "none" }}
              type="file"
              onChange={handleFiles}
              multiple
              onClick={(e) => (e.currentTarget.value = null)}
            />
          </div>
          {/* ------------ */}
          <div className="inputHolder">
            <div className="nameInputHolder">
              <input
                className="input name"
                type="text"
                value={firstName}
                placeholder="First Name"
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
              <input
                className="input name"
                type="text"
                value={lastName}
                placeholder="Last Name"
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>

            <input
              className="input"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Email"
            />

            <input
              className="input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />

            <input
              className="input"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm Password"
              required
            />

            <input
              className="input"
              type="number"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
              placeholder="Zip Code"
              required
            />

            <div className="birthdaySelect">
              <h4>Birthday</h4> <span>optional</span>
            </div>

            <div className="birthdayMonthDayYear">
              <select value={month} onChange={(e) => setMonth(e.target.value)}>
                <option value="">Month</option>
                <option value="01">Jan</option>
                <option value="02">Feb</option>
                <option value="03">Mar</option>
                <option value="04">Apr</option>
                <option value="05">May</option>
                <option value="06">Jun</option>
                <option value="07">Jul</option>
                <option value="08">Aug</option>
                <option value="09">Sep</option>
                <option value="10">Oct</option>
                <option value="11">Nov</option>
                <option value="12">Dec</option>
              </select>
              <select value={day} onChange={(e) => setDay(e.target.value)}>
                <option value="">Day</option>

                {month === "02" && pickDay(28)}
                {month === "04" ||
                month === "06" ||
                month === "09" ||
                month === "11"
                  ? pickDay(30)
                  : month !== "02" && pickDay(31)}
              </select>
              <select value={year} onChange={(e) => setYear(e.target.value)}>
                <option value="">Year</option>
                {getYear()}
              </select>
            </div>
            <button type="submit">Sign Up</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignupFormPage;
