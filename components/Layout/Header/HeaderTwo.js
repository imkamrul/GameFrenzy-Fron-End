import { useEffect, useState } from "react";

const HeaderTwo = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const [showShadow, setShowShadow] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    console.log("scrollY :", scrollY);
    setShowShadow(scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <nav className={`navbar ${showShadow ? "navbar-scroll-shadow" : ""}`}>
        <div className="nav-container">
          <a exact to="/" className="nav-logo">
            CodeBucks
            <i className="fas fa-code"></i>
          </a>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <a
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                exact
                to="/blog"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contact Us
              </a>
            </li>
          </ul>
          <button
            className={`nav-icon  ${click && "active"}`}
            onClick={handleClick}
          >
            <span className={`icon-bar`}></span>
            <span className={`icon-bar`}></span>
            <span className={`icon-bar`}></span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default HeaderTwo;
