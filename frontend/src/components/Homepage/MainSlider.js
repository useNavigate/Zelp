import "./mainSlider.css"
import CategorySearch from "../CategorySearch/CategorySearch";
import Navigation from "../Navigation";
const MainSlider=()=>{
    return (
      <div
        className="slider"
        style={{
          backgroundImage: `url(https://cdn.shopify.com/s/files/1/2289/1873/files/Small_Portion_of_food_Elegant-min_be542f82-cfbf-4ba2-8096-fb58798cf338.jpg?v=1668530010)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Navigation />
        <h1 className="mainImgHeader">Zelp Your Favorite Places!</h1>
      </div>
    );
}
export default MainSlider
