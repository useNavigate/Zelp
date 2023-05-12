import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import * as sessionActions from "../../store/session";
import "./profilebutton.css";

function ProfileButton({ user }) {
  const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const history = useHistory();

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout()).then(() => {

      // history.push("/seeYouSoon");
       history.push("/SeeYouSoon");
    });
  };

  return (
    <div className="profile-wrapper">
      <div className="userIcon" onClick={openMenu}>
        {sessionUser?.avatar ? (
          <div
            className="profileImage"
            style={{
              backgroundImage: `url(${sessionUser.avatar})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        ) : (
         <div className="profileImage"> <i className="fa-solid fa-user" style={{fontSize:"25px",opacity:"0.6"}}/></div>
        )}
      </div>
      {showMenu && (
        <ul className="profile-dropdown">
          <li>{user.firstName}</li>

          <li>
            <i className="fa-regular fa-circle-user"></i>About Me
          </li>
          <li>
            <i className="fa-regular fa-bookmark" />
            My Collections
          </li>
          <li>
            <i className="fa-solid fa-user-plus"></i>Find Friends
          </li>
          <li>
            <i className="fa-solid fa-gear"></i>Account Settings
          </li>

          <li className="logoutButton" onClick={logout}>
            <i className="fa-solid fa-right-from-bracket"></i>Log Out
          </li>
        </ul>
      )}
    </div>
  );
}

export default ProfileButton;
