import { useState } from "react";
import { Link } from "react-scroll";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import '../less/Nav.less';

const Nav = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const content = (
        <div className={`menu ${click ? 'show' : 'hide'}`}>
            <ul className="menu-list">
                <Link spy={true} smooth={true} to="Home" onClick={handleClick}>
                    <li className="menu-item">Home</li>
                </Link>
                <Link spy={true} smooth={true} to="About" onClick={handleClick}>
                    <li className="menu-item">About</li>
                </Link>
                <Link spy={true} smooth={true} to="Services" onClick={handleClick}>
                    <li className="menu-item">Services</li>
                </Link>
                <Link spy={true} smooth={true} to="Projects" onClick={handleClick}>
                    <li className="menu-item">Projects</li>
                </Link>
                <Link spy={true} smooth={true} to="Contact" onClick={handleClick}>
                    <li className="menu-item">Contact</li>
                </Link>
            </ul>
        </div>
    );

    return (
        <nav>
            <div className="nav-container">
                <div className="nav-logo">
                    <span className="logo-text">SrGomita</span>
                </div>
                <div className="nav-links">
                    <ul className="nav-list">
                        <Link spy={true} smooth={true} to="Home">
                            <li className="nav-item">Home</li>
                        </Link>
                        <Link spy={true} smooth={true} to="About">
                            <li className="nav-item">About</li>
                        </Link>
                        <Link spy={true} smooth={true} to="Services">
                            <li className="nav-item">Services</li>
                        </Link>
                        <Link spy={true} smooth={true} to="Projects">
                            <li className="nav-item">Projects</li>
                        </Link>
                        <Link spy={true} smooth={true} to="Contact">
                            <li className="nav-item">Contact</li>
                        </Link>
                    </ul>
                </div>
                <div className="nav-menu-icon">
                    <button className="menu-button" onClick={handleClick}>
                        {click ? <FaTimes /> : <CiMenuFries />}
                    </button>
                </div>
                {content}
            </div>
        </nav>
    );
};

export default Nav;
