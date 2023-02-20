import { AngleDownIcon, ShoppingCartIcon } from "@/components/Common/SVG/SVG";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  console.log("menuOpen :", menuOpen);
  const [showShadow, setShowShadow] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
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
    <nav className={`navbar ${showShadow ? "navbar-scroll-shadow" : ""}`}>
      <div className="container navbar-wrapper">
        <div>
          <Link href="/" className="navbar-logo">
            <Image
              src="/white-logo-basel.svg"
              height={40}
              width={200}
              alt="image"
            />
          </Link>
        </div>

        <ul className={`navbar-menu ${menuOpen ? "active" : ""}`}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li className="sub-menu-parent">
            <span
              style={{ display: "flex", alignItems: "center", gap: " 0 5px" }}
            >
              Shop <AngleDownIcon />
            </span>

            <ul className={`submenu`}>
              <li>
                <Link href="/">Shop 1</Link>
              </li>

              <li>
                <Link href="/">Shop 1</Link>
              </li>

              <li>
                <Link href="/">Shop 1</Link>
              </li>
            </ul>
          </li>

          <li>
            <Link href="/">About Us</Link>
          </li>
          <li>
            <Link href="/">Contact Us</Link>
          </li>
          <li>
            <Link href="/">Login / Register</Link>
          </li>
        </ul>
        <div className="right-navbar-part">
          <li>
            <Link href="/">Login / Register</Link>
          </li>
          <ShoppingCartIcon />
          <p>
            0 / <span> $0.00</span>
          </p>
          <button
            className={`navToggle ${menuOpen && "active"}`}
            onClick={toggleMenu}
          >
            <span className={`icon-bar`}></span>
            <span className={`icon-bar`}></span>
            <span className={`icon-bar`}></span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
