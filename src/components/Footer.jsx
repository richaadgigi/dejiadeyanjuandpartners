import React from 'react';
import { ArrowRight, Email, LogoInstagram, LogoX, Phone } from '@carbon/icons-react';
import Logo from "../assets/images/logo-square-white.png"
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
        <footer className='dap-bg-primary xui-text-white xui-container xui-py-2 xui-lg-py-4'>
            <div className='xui-row'>
                <div className='xui-col-12 xui-lg-col-5 xui-lg-pr-2'>
                    <div className='xui-d-inline-flex xui-flex-ai-center xui-grid-gap-half'>
                        <img className='xui-img-40 xui-bdr-rad-circle' src={Logo} alt="logo" />
                        <span className='xui-font-w-700'>THE DAP</span>
                    </div>
                    <p className='xui-font-sz-85 xui-opacity-5 xui-line-height-2 xui-lg-w-fluid-90 xui-mt-1'>Our vision is to be among the top four best law firms in Nigeria within the next four years.</p>
                    <div className='xui-d-grid xui-grid-col-1 xui-grid-gap-1-half xui-mt-4'>
                        <Link to={'mailto:info@dejiadeyanjuandpartners.com'} className='xui-d-inline-flex xui-flex-ai-center xui-grid-gap-half xui-text-inherit xui-text-dc-none'>
                            <Email size={24} />
                            <span className='xui-font-sz-90 xui-opacity-6'>info@dejiadeyanjuandpartners.com</span>
                        </Link>
                        <Link to={'tel:2347037717746'} className='xui-d-inline-flex xui-flex-ai-center xui-grid-gap-half xui-text-inherit xui-text-dc-none'>
                            <Phone size={24} />
                            <span className='xui-font-sz-90 xui-opacity-6'>+234 (0) 703 771 7746</span>
                        </Link>
                    </div>
                </div>
                <div className='xui-col-12 xui-lg-col-7 xui-lg-pl-2 xui-mt-4 xui-lg-mt-none'>
                    <div className='xui-d-grid xui-grid-col-1 xui-lg-grid-col-2 xui-grid-gap-2'>
                        <div>
                            <h4 className='xui-text-uppercase xui-font-sz-95'>Quick menu</h4>
                            <div className='xui-d-flex xui-grid-gap-2 xui-mt-2'>
                                <a className='xui-opacity-5 xui-font-sz-90 xui-text-inherit xui-text-dc-none xui-d-inline-block' href="#">Homepage</a>
                                <a className='xui-opacity-5 xui-font-sz-90 xui-text-inherit xui-text-dc-none xui-d-inline-block' href="#">About Us</a>
                                <a className='xui-opacity-5 xui-font-sz-90 xui-text-inherit xui-text-dc-none xui-d-inline-block' href="#">FAQs</a>
                                <a className='xui-opacity-5 xui-font-sz-90 xui-text-inherit xui-text-dc-none xui-d-inline-block' href="#">Contact</a>
                                <a className='xui-opacity-5 xui-font-sz-90 xui-text-inherit xui-text-dc-none xui-d-inline-block' href="#">Terms of Use</a>
                                <a className='xui-opacity-5 xui-font-sz-90 xui-text-inherit xui-text-dc-none xui-d-inline-block' href="#">Privacy Policy</a>
                            </div>
                        </div>
                        <div className='xui-mt-4 xui-lg-mt-none'>
                            <h4 className='xui-text-uppercase xui-font-sz-95'>Subscribe</h4>
                            <form className='dap-footer-subscribe xui-mt-2 xui-d-flex xui-flex-ai-center' action="">
                                <input type="text" placeholder='subscribe@dap.com' />
                                <button className='xui-d-flex xui-flex-ai-center xui-flex-jc-center'>
                                    <ArrowRight size={24} />
                                </button>
                            </form>
                            <div className='xui-d-flex xui-flex-ai-center xui-grid-gap-1 xui-mt-2'>
                                <Link target='_blank' to={'https://x.com/DAPLawFirm'} className='xui-w-40 xui-h-40 xui-bdr-rad-circle xui-bg-white xui-d-flex xui-flex-ai-center xui-flex-jc-center xui-text-black'>
                                    <LogoX size={20} />
                                </Link>
                                <Link target='_blank' to={'https://www.instagram.com/daplawfirm/'} className='xui-w-40 xui-h-40 xui-bdr-rad-circle xui-bg-white xui-d-flex xui-flex-ai-center xui-flex-jc-center xui-text-black'>
                                    <LogoInstagram size={20} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr className='xui-my-4' />
            <div className='xui-d-flex xui-flex-ai-center xui-flex-jc-space-between'>
                <span className='xui-opacity-4 xui-font-sz-85'>Copyrights &copy; 2024 - DAP - Nigeria</span>
                <div className='xui-d-inline-flex xui-flex-ai-center xui-grip-gap-2'>
                    <div className='xui-lg-ml-1'>
                        <a className='xui-opacity-5 xui-font-sz-90 xui-text-inherit xui-text-dc-none xui-d-inline-block' href="#">Terms Of Use</a>
                    </div>
                    <div className='xui-lg-ml-1'>
                        <a className='xui-opacity-5 xui-font-sz-90 xui-text-inherit xui-text-dc-none xui-d-inline-block' href="#">Privacy Policy</a>
                    </div>
                </div>
            </div>
        </footer>
        </>
    );
};

export default Footer;