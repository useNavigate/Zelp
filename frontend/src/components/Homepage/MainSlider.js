import "./mainSlider.css"
import CategorySearch from "../CategorySearch/CategorySearch";
import Navigation from "../Navigation";
import { useState,useEffect } from "react";
const MainSlider=()=>{
  const [urlIndex, setUrlIndex] = useState(0);
  const imageUrls = [
    "https://cdn.shopify.com/s/files/1/2289/1873/files/Small_Portion_of_food_Elegant-min_be542f82-cfbf-4ba2-8096-fb58798cf338.jpg?v=1668530010",
    "https://www.foodandwine.com/thmb/nesQwmMJ6zA4Fb0TtAThMwdn56g=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/steakhouse-style-rib-eyes-ft-recipe1118-235f4532bcf948efa82aab8065bb98d8.jpg",
    "https://media.istockphoto.com/id/851159308/photo/close-up-of-home-made-burgers.jpg?s=612x612&w=0&k=20&c=TqT6yxMqvv4C-kqq-256tDPHdvgJDQejtxOCsc4_O4A=",
  ];
const headings=[
  "Zelp Your Favorite Places!",
  "Make a Review!",
  "Upload Pictures!"
]
  const changeImage = () => {
    setUrlIndex((urlIndex + 1) % imageUrls.length);
  };
 useEffect(() => {
   const interval = setInterval(changeImage, 3000);
   return () => clearInterval(interval);
 }, [urlIndex]);



    return (
      <div
        className="slider"
        style={{
          backgroundImage: `url(${imageUrls[urlIndex]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="dark">
          <Navigation />
          <div className="mainHeadingDiv">
            <h1 className="mainImgHeader">
              {" "}
              Zelp
              <i
                className="fa-brands fa-yelp"
                style={{ fontSize: "90px", color: "red" }}
              ></i>
            </h1>
            <h1 className="mainImgHeader subHeader">
              Zelp Your Favorite Places!
            </h1>
          </div>
        </div>
      </div>
    );
}
export default MainSlider
