import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage/SignupFormPage";
import Navigation from "./components/Navigation";
import "./index.css";
import Homepage from "./components/Homepage/homepage";
import SearchResult from "./components/SearchResult/SearchResult";
import ReviewPage from "./components/ReviewPage/ReviewPage";
import BusinessPage from "./components/Business/BusinessPage";
import Post from "./components/Post/post";
import ReviewEditPage from "./components/ReviewEditPage/ReviewEditPage";
import Home from "./components/Map/Map";
import MapMarker from "./components/Map/Marker";
import { ModalProvider } from "./Context/Modal";

import { useEffect } from "react";
import AboutDev from "./components/Dev/AboutDev";
import NotFound from "./components/Utils/NotFound";
import Footer from "./components/Footer/Footer";
function App() {
  const location = useLocation()
const url = location.pathname;


  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on component mount
  }, [location]);
  return (
    <>
      <ModalProvider>
        {location.pathname !== "/" && (
          <div className="navWrapper">
            <Navigation />
          </div>
        )}

        {/* <div className="contentWrapper"> */}
          <Route exact path="/">
            <Homepage />
          </Route>

          <Switch>
            <Route exact path="/login">
              <LoginFormPage />
            </Route>
            <Route exact path="/signup">
              <SignupFormPage />
            </Route>
            <Route exact path="/search/:searchTerm">
              <SearchResult />
            </Route>
            <Route exact path="/review/:review">
              <ReviewPage />
            </Route>
            <Route exact path="/edit/:review">
              {/* <ReviewEditPage /> */}
              <ReviewPage />
            </Route>
            <Route exact path="/business/:id">
              <BusinessPage />
            </Route>
            <Route exact path="/posts">
              <Post />
            </Route>
            <Route exact path="/maps">
              <Home />
            </Route>
            <Route exact path="/marker">
              <MapMarker />
            </Route>
            <Route exact path="/seeYouSoon">
              <AboutDev />
            </Route>
            <Route exact path="/:notFound">
              <NotFound />
            </Route>
          </Switch>
        {/* </div> */}
        <Footer/>
      </ModalProvider>
    </>
  );
}
export default App;
