const ProjectCard = ({url}) => {
  return (
    <div
      className="projectCard"
      style={{
        backgroundImage: `url(${url})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1>Whale Gaming</h1>
      <h2>Top gaming Information</h2>
    </div>
  );
};

export default ProjectCard;
