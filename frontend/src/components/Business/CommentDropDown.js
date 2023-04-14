import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import "./business.css";
import { fetchDestroyReview } from "../../store/review";
import { fetchUpdateBusinessRating } from "../../store/business";
function CommentDropDown({reviewId,id}) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
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

  const deleteComment = (e) => {
    e.preventDefault();
    dispatch(fetchDestroyReview(reviewId));
  };

  return (
    <div className="profile-wrapper">
      <button className="DeleteIcon" onClick={openMenu}>
          <i id ="moreButton" className="fa-solid fa-ellipsis"></i>
      </button>
      {showMenu && (
        <ul className="DELETE-dropdown">

          <li onClick={deleteComment}>Delete</li>
        </ul>
      )}
    </div>
  );
}

export default CommentDropDown;
