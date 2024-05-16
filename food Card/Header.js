import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from 'react-icons/fi';
import { useState } from "react";

import './Header.css';

export const Header = ({ cart }) => {
    const [open, setOpen] = useState(false);
    const location = useLocation();

    const handleClick = () => setOpen(!open);
    const closeMenu = () => setOpen(false);

    // Function to check if current location is the home page
    const isHomePage = () => location.pathname === "/";

    return (
        <>
            <nav>
                <div className="logo">
                    <img src="https://images-platform.99static.com/Fd8nHrn-BZUIW5zKJLhN__s22mQ=/173x168:849x844/500x500/top/smart/99designs-contests-attachments/102/102863/attachment_102863565" className="logoimage" alt="logo" />
                    Hungry Heaven~
                </div>
                <div className="nav-icon" onClick={handleClick}>
                    {open ? <FiX /> : <FiMenu />}
                </div>
                <ul className={open ? 'nav-show' : 'nav-close'}>
                    <li className="nav-item"><Link to={"/"} onClick={closeMenu}><i className="fa-solid fa-house"></i>Home</Link></li>
                    <li className="nav-item"><Link to={'/'} onClick={closeMenu}><i className="fa-solid fa-bowl-rice"></i>Veg</Link></li>
                    <li className="nav-item"> <Link to={'/'} onClick={closeMenu}><i className="fa-solid fa-drumstick-bite"></i>Non Veg</Link></li>
                    <li className="nav-item"><Link to={"/"} onClick={closeMenu}><i className="fa-solid fa-cookie-bite"></i>Snacks</Link></li>
                    <li className="nav-item"><Link to={"/"} onClick={closeMenu}><i className="fa-solid fa-martini-glass-citrus"></i>Juices</Link></li>
                    <li className="nav-item"><Link to={"/Cart"} onClick={closeMenu}><i className="fa-solid fa-cart-plus"></i><span className="cart-count">{cart.length}</span>View card</Link></li>
                </ul>
            </nav>
            {/* Conditional rendering of the landing image */}
            {isHomePage() && (
                <div className="landing-img">
                    {/* <img className="homeimg" src={image}/> */}
                    <div>
                        <h1><span className="title-left">Indian</span><span className="title-right">Cuisine</span></h1>
                        <h3>"Discover the magic of India's diverse culinary landscape."</h3>
                        <p><span className="slogan"><i>"Satisfying appetites with a symphony of veg and non-veg delights."</i></span> </p>
                        <p><span className="contact">Contact us : +91 989294472</span></p>
                    </div>
                </div>
            )}
        </>
    )
}
