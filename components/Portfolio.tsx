const projects = [
  {
    name: "RIXORAA Realty",
    type: "Real Estate Website",
    link: "/portfolio/realty",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "RIXORAA Salon",
    type: "Beauty & Spa Website",
    link: "/portfolio/salon",
    image:
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "RIXORAA Restaurant",
    type: "Restaurant Website",
    link: "/portfolio/restaurant",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "RIXORAA Boutique",
    type: "Luxury Fashion Website",
    link: "/portfolio/boutique",
    image:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80",
  },
];

export default function Portfolio() {
  return (
    <section className="premiumSection softBg" id="portfolio">
      <p className="smallBadge center">Portfolio</p>
      <h2>Our Demo Website Concepts</h2>

      <div className="portfolioGrid">
        {projects.map((project) => (
          <div
            className="workCard imageWorkCard"
            key={project.name}
            style={{ backgroundImage: `url(${project.image})` }}
          >
            <div className="workOverlay">
              <span>Demo Project</span>
              <h3>{project.name}</h3>
              <p>{project.type}</p>

              <a className="projectBtn" href={project.link}>
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}