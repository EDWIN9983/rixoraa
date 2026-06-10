const services = [
  {
    title: "Hair Styling",
    price: "₹1,499",
    details: "Hair cut • Styling • Wash included",
    image:
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=900&q=80",
    highlights: ["Premium Styling", "Wash Included", "Expert Stylist"],
  },
  {
    title: "Bridal Makeup",
    price: "₹8,999",
    details: "Full bridal look • Hair • Makeup",
    image:
      "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=900&q=80",
    highlights: ["HD Makeup", "Hair Styling", "Long Lasting"],
  },
  {
    title: "Facial Treatment",
    price: "₹2,499",
    details: "Glow facial • Skin care • Relaxing session",
    image:
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=900&q=80",
    highlights: ["Glow Skin", "Relaxing Care", "Premium Products"],
  },
  {
    title: "Nail Care",
    price: "₹999",
    details: "Manicure • Pedicure • Nail polish",
    image:
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=900&q=80",
    highlights: ["Manicure", "Pedicure", "Nail Art"],
  },
  {
    title: "Spa Therapy",
    price: "₹3,499",
    details: "Body spa • Relaxation • Wellness care",
    image:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=900&q=80",
    highlights: ["Body Spa", "Relaxation", "Wellness"],
  },
  {
    title: "Hair Color",
    price: "₹2,999",
    details: "Coloring • Highlights • Hair care",
    image:
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=900&q=80",
    highlights: ["Color Styling", "Highlights", "Hair Care"],
  },
];

export default function SalonPage() {
  return (
    <main className="salonDemo">
      <section className="salonHero">
        <div>
          <p className="salonBadge">RIXORAA Portfolio Demo</p>
          <h1>RIXORAA Salon</h1>
          <p>
            A luxury beauty and spa website concept for salons, makeup studios
            and wellness brands.
          </p>
          <a href="#services">View Services</a>
        </div>
      </section>

      <section className="salonSection" id="services">
        <p className="salonBadge center">Beauty Services</p>
        <h2>Premium Salon Packages</h2>

        <div className="salonSlider">
          {services.map((item) => (
            <div className="salonCard" key={item.title}>
              <img src={item.image} alt={item.title} />

              <div className="salonBody">
                <span>{item.price}</span>
                <h3>{item.title}</h3>
                <p>{item.details}</p>

                <div className="salonHighlights">
                  {item.highlights.map((point) => (
                    <span key={point}>✓ {point}</span>
                  ))}
                </div>

                <a href="#booking">Book Appointment</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="salonSplit">
        <img
          src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1200&q=80"
          alt="Salon interior"
        />

        <div>
          <p className="salonBadge">About Concept</p>
          <h2>Beauty experience with a premium digital presence.</h2>
          <p>
            This salon demo shows how beauty businesses can showcase services,
            packages, reviews and appointment booking in a modern way.
          </p>
        </div>
      </section>

      <section className="salonCta" id="booking">
        <h2>Want a salon website like this?</h2>
        <p>This is a demo project created by RIXORAA.COM.</p>
        <a href="/">Back to RIXORAA</a>
      </section>
    </main>
  );
}