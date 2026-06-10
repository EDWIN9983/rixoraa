const properties = [
  {
    title: "Luxury Family Villa",
    price: "₹1.25 Cr",
    details: "4 BHK • Pool • 3200 sqft",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80",
    amenities: ["Free Parking", "Garden View", "Security", "Ready to Move"],
  },
  {
    title: "Premium City Apartment",
    price: "₹85 Lakh",
    details: "3 BHK • Balcony • 1800 sqft",
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=900&q=80",
    amenities: ["Breakfast Included", "City View", "Lift Access", "24/7 Security"],
  },
  {
    title: "Modern Smart Home",
    price: "₹1.10 Cr",
    details: "4 BHK • Smart Security • 2800 sqft",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=900&q=80",
    amenities: ["Smart Lock", "Free Parking", "Power Backup", "Gym Access"],
  },
  {
    title: "Luxury Penthouse",
    price: "₹2.40 Cr",
    details: "5 BHK • Rooftop Lounge • 4200 sqft",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80",
    amenities: ["Rooftop View", "Private Lift", "Club Access", "Premium Interior"],
  },
  {
    title: "Garden Villa",
    price: "₹95 Lakh",
    details: "3 BHK • Private Garden • 2200 sqft",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=80",
    amenities: ["Private Garden", "Pet Friendly", "Free Parking", "Security"],
  },
  {
    title: "Beachside Residence",
    price: "₹1.75 Cr",
    details: "4 BHK • Sea View • 3400 sqft",
    image:
      "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=900&q=80",
    amenities: ["Sea View", "Breakfast Included", "Pool Access", "Resort Style"],
  },
  {
    title: "Executive Apartment",
    price: "₹72 Lakh",
    details: "2 BHK • Gym Access • 1400 sqft",
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=900&q=80",
    amenities: ["Gym Access", "Lift Access", "City Center", "Security"],
  },
  {
    title: "Grand Mansion",
    price: "₹3.80 Cr",
    details: "6 BHK • Home Theatre • 6500 sqft",
    image:
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=900&q=80",
    amenities: ["Home Theatre", "Private Pool", "Luxury Interior", "Large Parking"],
  },
];

export default function RealtyPage() {
  return (
    <main className="demoPage realtyDemo">
      <section className="demoHero realtyHero">
        <div>
          <p className="demoBadge">RIXORAA Portfolio Demo</p>
          <h1>RIXORAA Realty</h1>
          <p>
            A modern real estate website concept for luxury properties, premium
            listings and property consultation.
          </p>
          <a href="#properties">View Properties</a>
        </div>
      </section>

      <section className="demoSection" id="properties">
        <p className="smallBadge center">Featured Listings</p>
        <h2>Premium Properties</h2>

        <div className="propertySlider">
          {properties.map((item) => (
            <div className="demoCard propertyCard" key={item.title}>
              <img src={item.image} alt={item.title} />

              <div className="propertyBody">
                <span className="propertyPrice">{item.price}</span>

                <h3>{item.title}</h3>

                <p className="propertyDetails">{item.details}</p>

                <div className="propertyAmenities">
                  {item.amenities.map((amenity) => (
                    <span key={amenity}>✓ {amenity}</span>
                  ))}
                </div>

                <a className="propertyBtn" href="#contact">
                  Schedule Visit
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="demoSplit">
        <img
          src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80"
          alt="Modern interior"
        />

        <div>
          <p className="demoBadge">About Concept</p>
          <h2>Luxury property experience made simple.</h2>
          <p>
            This real estate demo shows how a property business can present
            premium listings, build trust and convert visitors into inquiries.
          </p>
        </div>
      </section>

      <section className="demoCta" id="contact">
        <h2>Want a website like this?</h2>
        <p>This is a demo project created by RIXORAA.COM.</p>
        <a href="/">Back to RIXORAA</a>
      </section>
    </main>
  );
}