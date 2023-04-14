import "./mainSlider.css"
import CategorySearch from "../CategorySearch/CategorySearch";
import Navigation from "../Navigation";
const MainSlider=()=>{
    return (
      <div
        className="slider"
        style={{
          backgroundImage: `url(https://zelp-seeds.s3.amazonaws.com/steak.jpg)`,
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
