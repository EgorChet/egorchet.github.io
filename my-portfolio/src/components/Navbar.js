import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const closeMenu = () => {
    setNavActive(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        closeMenu();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 1200) {
      closeMenu();
    }
  }, []);

  return (
    <nav className={`navbar ${navActive ? "active" : ""}`}>
      <div>
        <img src='./logos/logotype.webp' alt='Logoipsum' width='50' />
      </div>
      <a className={`nav__hamburger ${navActive ? "active" : ""}`} onClick={toggleNav}>
        <span className='nav__hamburger__line'></span>
        <span className='nav__hamburger__line'></span>
        <span className='nav__hamburger__line'></span>
      </a>
      <div className={`navbar--items ${navActive ? "active" : ""}`}>
        <ul>
          <li>
            <Link
              onClick={closeMenu}
              activeClass='navbar--active-content'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to='mySkills'
              className='navbar--content'
            >
              My Expertise
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass='navbar--active-content'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to='MyPortfolio'
              className='navbar--content'
            >
              My Portfolio
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass='navbar--active-content'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to='AboutMe'
              className='navbar--content'
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass='navbar--active-content'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to='Contact'
              className='navbar--content'
            >
              Contact Me
            </Link>
          </li>
        </ul>
      </div>
      <a
        onClick={closeMenu}
        href='https://docs.google.com/document/d/e/2PACX-1vRqvVEF77vu5FIYTeKSetFQAtRD4kzwAV8MeUSa38q5j2ZlyNyqEK-0bKhdt2B7jw/pub'
        target='_blank'
        rel='noopener noreferrer'
        className='btn btn-primary'
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <FontAwesomeIcon icon={faDownload} style={{ marginRight: '8px' }} />
        <span style={{ fontSize: "24px" }}>CV</span>
      </a>
    </nav>
  );
}

export default Navbar;
