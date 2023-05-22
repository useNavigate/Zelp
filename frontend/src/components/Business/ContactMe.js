const ContactMe=()=>{
    return (
      <div className="contactMeHolder">
        <h1 className="contactMe">Contact Me</h1>

        <div className="sara">
          <h2>Full Stack Developer & Creative Designer</h2>
          <p>Bridging the Gap Between Functionality & Aesthetics</p>
        </div>
        <div className="sara_links">
          <a
            href="https://www.linkedin.com/in/sara-ryu-798165261/"
            target="_blank"
          >
            <h1>LinkedIn</h1>
          </a>
          <a href="https://github.com/useNavigate" target="_blank">
            <h1>GitHub</h1>
          </a>
          <a href="https://wellfound.com/u/sara-ryu" target="_blank">
            <h1>Wellfound</h1>
          </a>
        </div>

        <a
          className="resumeLink"
          href="https://cdn.discordapp.com/attachments/1082730279044657222/1110257443390378065/sararyu_res.pdf" target="_blank"
        >
          Resume
        </a>
      </div>
    );
}

export default ContactMe
