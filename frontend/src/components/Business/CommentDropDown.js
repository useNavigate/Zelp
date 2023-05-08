import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import "./business.css";
import { fetchDestroyReview } from "../../store/review";
import { Link } from "react-router-dom";
function CommentDropDown({reviewId,business,bizId,myReview}) {
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
        <i id="moreButton" className="fa-solid fa-ellipsis"></i>
      </button>
      {showMenu && (
        <ul className="DELETE-dropdown">
          <li onClick={deleteComment}>Delete</li>

          <Link
            to={{
              pathname: `/edit/${myReview.rating}-${bizId}-${business.name}`,
              state: { myReview },
            }}
          >
            <li>Edit</li>
          </Link>
        </ul>
      )}
    </div>
  );
}

export default CommentDropDown;
