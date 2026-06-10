const services = [
  {
    title: "Website Design",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
    text: "Modern business websites designed to look professional, load fast, and work perfectly on mobile.",
    points: ["Business Websites", "Landing Pages", "Portfolio Sites"],
  },
  {
    title: "Social Media Setup",
    image:
      "https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&w=900&q=80",
    text: "Facebook and Instagram business setup to help your brand look trusted and ready for customers.",
    points: ["Facebook Page", "Instagram Business", "Profile Optimization"],
  },
  {
    title: "Branding & Logo Design",
    image:
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=900&q=80",
    text: "Clean visual branding that gives your business a professional and memorable identity.",
    points: ["Logo Design", "Brand Colors", "Business Identity"],
  },
  {
    title: "Ads & Digital Marketing",
    image:
      "https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=900&q=80",
    text: "Digital marketing support to help your business reach more people and generate inquiries.",
    points: ["Facebook Ads", "Instagram Ads", "Lead Generation"],
  },
];

export default function Services() {
  return (
    <section className="servicesShowcase" id="services">
      <p className="smallBadge center">Our Services</p>
      <h2>Everything your business needs to grow online</h2>

      <div className="serviceRows">
        {services.map((service, index) => (
          <div
            className={`serviceRow ${index % 2 === 1 ? "reverseRow" : ""}`}
            key={service.title}
          >
            <div className="serviceImage">
              <img src={service.image} alt={service.title} />
            </div>

            <div className="serviceContent">
              <span>0{index + 1}</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>

              <ul>
                {service.points.map((point) => (
                  <li key={point}>✓ {point}</li>
                ))}
              </ul>

              <a href="#contact">Get Quote</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}