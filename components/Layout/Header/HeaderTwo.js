import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const HeaderTwo = () => {
  const [click, setClick] = useState(false);
  const [showShadow, setShowShadow] = useState(false);
  const handleClick = () => {
    setShowShadow(true);
    setClick(!click);
  };

  const handleScroll = () => {
    const scrollY = window.scrollY;
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
          <Link href="/" className="navbar-logo">
            <Image
              src="/white-logo-basel.svg"
              height={40}
              width={200}
              alt="image"
            />
          </Link>

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
            className={`nav-icon  ${click && "active-icon"}`}
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
