import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import NavbarLogo from "../assets/images/logo-white.png";

const Navbar = () => {
    const [ showBg, setShowBg ] = useState(false);
    useEffect(() => {
        document.addEventListener('scroll', function() {
            const navbarEl = document.querySelector(".dap-navbar");
            console.log(navbarEl);
            const scrollPosition = window.scrollY || document.documentElement.scrollTop;
            if (scrollPosition > 50) {
                setShowBg(true);
            } else {
                setShowBg(false);
            }
        });
    }, []);
    return (
        <nav className={'dap-navbar xui-text-white xui-navbar xui-container xui-navbar-blurred ' + (showBg && 'dap-navbar-show')} brand="true" layout="1" menu="2">
            <div className="brand">
                <Link className="xui-text-dc-none xui-text-inherit xui-d-inline-flex xui-flex-ai-center" to={'/'}>
                    <img className='xui-img-200' src={NavbarLogo} alt="logo" />
                </Link>
            </div>
            <div className="links" placed="left">
                <div className="main dap-bg-primary">
                    <ul>
                        <li>
                            <Link className="xui-font-sz-180 xui-md-font-sz-200 xui-lg-font-sz-90 xui-text-inherit" to={"./"}><span className="xui-opacity-9">Home</span></Link>
                        </li>
                        <li>
                            <Link className="xui-font-sz-180 xui-md-font-sz-200 xui-lg-font-sz-90 xui-text-inherit" to={"/about"}><span className="xui-opacity-9">About Us</span></Link>
                        </li>
                        <li>
                            <Link className="xui-font-sz-180 xui-md-font-sz-200 xui-lg-font-sz-90 xui-text-inherit" to={"/stories"}><span className="xui-opacity-9">Blog</span></Link>
                        </li>
                        <li>
                            <Link className="xui-font-sz-180 xui-md-font-sz-200 xui-lg-font-sz-90 xui-text-inherit" to={"/contact"}><span className="xui-opacity-9">Contact</span></Link>
                        </li>
                    </ul>
                </div>
                <div className="menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;