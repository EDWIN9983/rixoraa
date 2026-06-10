export default function Contact() {
  return (
    <section className="finalCta" id="contact">
      <p className="smallBadge center">LIMITED TIME OFFER</p>

      <h2>
        Get Your Business Website
        <br />
        For Just ₹3,999
      </h2>

      <p>
        Includes Domain + Hosting + 5 Page Website.
        Available only for the first few members.
      </p>

      <div className="contactButtons">
        <a
          href="https://t.me/info_rixoraa"
          target="_blank"
        >
          Contact on Telegram
        </a>

        <a
          href="mailto:info@rixoraa.com"
          className="secondaryBtn"
        >
          Email Us
        </a>
      </div>

      <div className="contactInfo">
        <span>📧 info@rixoraa.com</span>
        <span>💬 @info_rixoraa</span>
      </div>
    </section>
  );
}