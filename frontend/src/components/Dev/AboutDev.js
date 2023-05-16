import "./AboutDev.css"
const AboutDev=()=>{
    return (
      <>
        <div className="aboutDev">
          <div className="thanksZelp">
            <h1>Heading out?</h1>
            <h1>Thanks for visiting Zelp!</h1>
            <p>
              If you're interested in learning more about the developer behind
              Zelp, please visit my
              <a href="https://www.sararyu.dev" target="_blank">
                portfolio.
              </a>
            </p>
            <p>
              I'm always looking for new projects and opportunities, so feel
              free to get in touch if you have any development needs. Thanks
              again for your support!
            </p>
            <div className="contactInfo">
              <h3>Contact information listed below:</h3>
              <div>
                <p>+1 917-963-9311 </p> <p>|</p>
                <p>sararyudev@gmail.com</p>
              </div>
            </div>
          </div>

          <div
            className="devImage"
            style={{
              backgroundImage: `url(https://cdn.discordapp.com/attachments/1082730279044657222/1107451670021025792/In_Hand_Mobile_Mockup.png)`,
            }}
          ></div>
        </div>
      </>
    );
}

export default AboutDev
