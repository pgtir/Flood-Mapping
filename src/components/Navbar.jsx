const Navbar = ({ section, setSection }) => {
  const scrollToSection = (section) => {
    setSection(section);
    const scrollSection = document.getElementById(section);
    if (scrollSection) {
      scrollSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <div className="navbar-container">
      <div className="navbar">
        <div className="logo">FloodMap</div>
        <div className="nav-items">
          {["home", "images", "team"].map((item) => (
            <div
              key={item}
              onClick={() => scrollToSection(item)}
              className={`nav-item ${
                item === section ? "active-nav-item" : ""
              }`}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
