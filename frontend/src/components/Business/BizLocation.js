
import "./business.css";
import BizGMap from "../Map/Marker";
const BizLocation=({business})=>{


    return (
      <div className="locationWrapper">
        <h1 style={{marginTop:"30px",marginBottom:"30px",fontSize:"24px", fontWeight:"700"}}>Location&Hours</h1>
        <div className="bizLocation">
            <div className="locationMap">
          <BizGMap business={business}/>
            </div>

          <div className="hours">
            <div>Mon 9:00 AM - 9:00 PM </div>
            <div>Tue 9:00 AM - 9:00 PM </div>
            <div>Wed 9:00 AM - 9:00 PM </div>
            <div>Thu 9:00 AM - 9:00 PM </div>
            <div>Fri 9:00 AM - 9:00 PM </div>
            <div>Sat 9:00 AM - 9:00 PM </div>
            <div>Sun 9:00 AM - 9:00 PM </div>
          </div>
        </div>
      </div>
    );
}

export default BizLocation
