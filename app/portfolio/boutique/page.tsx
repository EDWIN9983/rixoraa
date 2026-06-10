const collections = [
  {
    title: "Luxury Dresses",
    price: "₹4,999",
    image:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80",
    highlights: ["Premium Fabric", "Elegant Fit", "New Arrival"],
  },
  {
    title: "Designer Sarees",
    price: "₹7,999",
    image:
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=80",
    highlights: ["Traditional Luxury", "Wedding Wear", "Handpicked"],
  },
  {
    title: "Women’s Western Wear",
    price: "₹2,499",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80",
    highlights: ["Modern Style", "Daily Wear", "Comfort Fit"],
  },
  {
    title: "Premium Handbags",
    price: "₹3,999",
    image:
      "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=900&q=80",
    highlights: ["Luxury Look", "Premium Finish", "Trendy Design"],
  },
  {
    title: "Fashion Accessories",
    price: "₹1,299",
    image:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=900&q=80",
    highlights: ["Elegant Pieces", "Gift Ready", "Premium Selection"],
  },
  {
    title: "Festive Collection",
    price: "₹5,999",
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80",
    highlights: ["Festive Wear", "Luxury Finish", "Limited Edition"],
  },
];

export default function BoutiquePage() {
  return (
    <main className="boutiqueDemo">
      <section className="boutiqueHero">
        <div>
          <p className="boutiqueBadge">RIXORAA Portfolio Demo</p>
          <h1>RIXORAA Boutique</h1>
          <p>
            A luxury fashion website concept for boutiques, clothing brands,
            designer collections and premium fashion stores.
          </p>
          <a href="#collections">View Collections</a>
        </div>
      </section>

      <section className="boutiqueSection" id="collections">
        <p className="boutiqueBadge center">Fashion Collections</p>
        <h2>Premium Boutique Styles</h2>

        <div className="boutiqueSlider">
          {collections.map((item) => (
            <div className="boutiqueCard" key={item.title}>
              <img src={item.image} alt={item.title} />

              <div className="boutiqueBody">
                <span>{item.price}</span>
                <h3>{item.title}</h3>

                <div className="boutiqueHighlights">
                  {item.highlights.map((point) => (
                    <span key={point}>✓ {point}</span>
                  ))}
                </div>

                <a href="#contact">View Collection</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="boutiqueSplit">
        <img
          src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80"
          alt="Luxury fashion"
        />

        <div>
          <p className="boutiqueBadge">About Concept</p>
          <h2>Luxury fashion presentation for modern brands.</h2>
          <p>
            This boutique demo shows how fashion stores can present collections,
            premium products and customer-focused shopping experiences online.
          </p>
        </div>
      </section>

      <section className="boutiqueCta" id="contact">
        <h2>Want a boutique website like this?</h2>
        <p>This is a demo project created by RIXORAA.COM.</p>
        <a href="/">Back to RIXORAA</a>
      </section>
    </main>
  );
}