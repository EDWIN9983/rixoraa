const menuItems = [
{
title: "Grilled Steak",
price: "₹1,299",
image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80",
highlights: ["Chef Special", "Premium Cut", "Fresh Ingredients"],
},
{
title: "Seafood Platter",
price: "₹1,799",
image: "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=900&q=80",
highlights: ["Fresh Catch", "Sea View Dining", "Signature Sauce"],
},
{
title: "Italian Pasta",
price: "₹799",
image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=900&q=80",
highlights: ["Authentic Recipe", "Fresh Pasta", "House Sauce"],
},
{
title: "Luxury Burger",
price: "₹699",
image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=80",
highlights: ["Premium Beef", "Fresh Bun", "Special Sauce"],
},
{
title: "Wood Fired Pizza",
price: "₹999",
image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=80",
highlights: ["Wood Fired", "Italian Style", "Fresh Mozzarella"],
},
{
title: "Chocolate Dessert",
price: "₹499",
image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=900&q=80",
highlights: ["Chef Dessert", "Premium Chocolate", "Signature Dish"],
},
];

export default function RestaurantPage() {
return ( <main className="restaurantDemo"> <section className="restaurantHero"> <div> <p className="restaurantBadge">RIXORAA Portfolio Demo</p> <h1>RIXORAA Restaurant</h1> <p>
Luxury restaurant website concept with menu showcase,
reservations and premium dining experience. </p> <a href="#menu">View Menu</a> </div> </section>

```
  <section className="restaurantSection" id="menu">
    <p className="restaurantBadge center">Featured Menu</p>
    <h2>Signature Dishes</h2>

    <div className="restaurantSlider">
      {menuItems.map((item) => (
        <div className="restaurantCard" key={item.title}>
          <img src={item.image} alt={item.title} />

          <div className="restaurantBody">
            <span>{item.price}</span>

            <h3>{item.title}</h3>

            <div className="restaurantHighlights">
              {item.highlights.map((point) => (
                <span key={point}>✓ {point}</span>
              ))}
            </div>

            <a href="#reservation">Reserve Table</a>
          </div>
        </div>
      ))}
    </div>
  </section>

  <section className="restaurantCta" id="reservation">
    <h2>Reserve Your Table</h2>
    <p>Experience premium dining with a luxury restaurant website.</p>
    <a href="/">Back to RIXORAA</a>
  </section>
</main>

);
}
