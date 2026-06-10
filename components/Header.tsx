import Image from "next/image";

export default function Header() {
  return (
    <>
      <div className="topBar">
        <div>
          <span>✈️ info_rixoraa </span>
          <span>✉️ info@rixoraa.com</span>
        </div>

        <div>
          <a href="#about">About</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact</a>
        </div>
      </div>

      <header className="mainHeader">
        <div className="logoWrap">
          <Image
            src="/Rixoraalogo.svg"
            alt="RIXORAA"
            width={100}
            height={100}
          />

          <div className="logoText">
            <h2>RIXORAA</h2>
            <p>Build. Brand. Grow.</p>
          </div>
        </div>

        <nav className="mainNav">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#portfolio">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact us</a>
        </nav>

        <a className="auditBtn" href="#contact">
          Free Website Audit
        </a>
      </header>
    </>
  );
}