import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='dap-bg-primary xui-text-white xui-navbar xui-container xui-navbar-blurred' brand="true" layout="1" menu="2">
            <div className="brand">
                <Link className="xui-text-dc-none xui-text-inherit xui-d-inline-flex xui-flex-ai-center" to={'/'}>
                    <img className='xui-img-200' src="https://res.cloudinary.com/xnyder/image/upload/v1704880691/alphaprofit/brand/alphaprofit_toeclk.webp" alt="logo" />
                </Link>
            </div>
            <div className="links" placed="left">
                <div className="main green-bg">
                    <ul>
                        <li>
                            <Link className="xui-font-sz-180 xui-md-font-sz-200 xui-lg-font-sz-90 xui-text-inherit" to={"./"}><span className="xui-opacity-9">Home</span></Link>
                        </li>
                        <li>
                            <Link className="xui-font-sz-180 xui-md-font-sz-200 xui-lg-font-sz-90 xui-text-inherit" to={"/about"}><span className="xui-opacity-9">About Us</span></Link>
                        </li>
                        <li>
                            <Link className="xui-font-sz-180 xui-md-font-sz-200 xui-lg-font-sz-90 xui-text-inherit" to={"/stories"}><span className="xui-opacity-9">Stories</span></Link>
                        </li>
                        <li>
                            <Link className="xui-font-sz-180 xui-md-font-sz-200 xui-lg-font-sz-90 xui-text-inherit" to={"/contact"}><span className="xui-opacity-9">Contact</span></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;