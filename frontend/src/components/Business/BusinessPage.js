import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchBusiness } from "../../store/business";
import BizImageHolder from "./BizImageholder";
import "./business.css";
import BizLocation from "./BizLocation";
import CommentSections from "./CommentSections";
import WriteAReviewButton from "./WriteAReviewButton";
import MyComments from "./MyComments";
import EditReviewButton from "./EditReviewButton.js";
import { Link } from "react-router-dom";
import Loading from "../Utils/Loading";
import ContactMe from "./ContactMe";
import ProjectCard from "./ProjectCard";

const BusinessPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams(); //biz id
  const business = useSelector((state) => state.business);
  const reviews = useSelector((state) => state.review);
  const sessionUser = useSelector((state) => state.session.user);
  const [userReview, setUserReview] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    dispatch(fetchBusiness(id)).then(()=>setLoading(false));
  }, [id]);

  let myReview = "";
  sessionUser?.reviews?.forEach((reviewId) => {
    if (reviews[reviewId]) {
      myReview = reviews[reviewId];
    }
  });
  if (loading) {
    return <Loading/>;
  }

  if (business === undefined || business === null || business.length === 0) {
    return null;
  }

  return (
    <div>
      <BizImageHolder business={business[id]} reviews={reviews} />
      <div className="bizInfoWrapper">
        <div className="bizShowPageInfo">
          {myReview ? (
            <EditReviewButton
              business={business[id]}
              bizId={id}
              myReview={myReview}
            />
          ) : (
            <WriteAReviewButton business={business[id]} id={id} />
          )}

          <BizLocation business={business[id]} />

          {myReview && (
            <>
              <MyComments
                review={myReview}
                business={business[id]}
                bizId={id}
                myReview={myReview}
              />
            </>
          )}

          {Object.keys(reviews).length > 0 && (
            <div className="allComments">All Comments</div>
          )}
          {Object.values(reviews)
            .reverse()
            .map((review) => {
              return <CommentSections key={review.id + 88} review={review} />;
            })}
        </div>
        <div className="sideBar">
          <ContactMe />
        </div>
      </div>
    </div>
  );
};

export default BusinessPage;
