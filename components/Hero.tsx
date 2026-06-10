export default function Hero() {
  return (
    <section className="heroPremium" id="home">
      <div className="heroLeft">
        <p className="heroLabel">RIXORAA DIGITAL SOLUTIONS</p>

        <h1>
          We Build Websites That Make Your Business Look Premium
        </h1>

        <p className="heroText">
          Professional websites, branding, social media setup and digital
          marketing solutions for modern businesses.
        </p>

        <div className="heroButtons">
          <a href="#contact" className="redButton">Get Free Quote</a>
          <a href="#portfolio" className="darkButton">View Work</a>
        </div>
      </div>

      <div className="heroRight">
        <div className="mockupWindow">
          <div className="mockupTop">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="mockupContent">
            <div className="mockupBadge">Live Website Preview</div>
            <h3>Business Website</h3>
            <p>Modern • Mobile Friendly • Fast</p>

            <div className="mockupCards">
 		 <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=500			&q=80" alt="Website Design" />
		  <img src="https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=500			&q=80" alt="Digital Marketing" />
 		 <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=500&q=			80" alt="Business Growth" />
		</div>
          </div>
        </div>
      </div>
    </section>
  );
}