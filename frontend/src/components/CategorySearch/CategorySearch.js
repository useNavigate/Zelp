import "./category.css"
import { Link } from "react-router-dom";
import {useState,useEffect} from "react"
const CategorySearch =()=>{
  const [showMenu,setShowMenu] = useState()

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };


    useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    }




    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);


    return (
      <>
        <div className="category-holder">
          <div className="res-category" onClick={openMenu}>
            <h1>Restaurants</h1>
          </div>
          {showMenu && (
            <div className="categorySearch">
              <Link to={`/search/pizza`}>
                <h1>Pizza</h1>
              </Link>
              <Link to={`/search/ramen`}>
                <h1>Ramen</h1>
              </Link>
              <Link to={`/search/coffee`}>
                <h1>Coffee</h1>
              </Link>
              {/* <Link to={`/search/steak`}>
                <h1>Steak</h1>
              </Link> */}
            </div>
          )}
        </div>
      </>
    );
}

export default CategorySearch
