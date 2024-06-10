import React, { useEffect, useState } from 'react';
import FetchStories from '../components/FetchStories';
import NavbarSpacing from '../components/NavbarSpacing';

const Stories = (props) => {
    useEffect(() => {
        window.xuiLazyLoadings();
        window.xuiScrollOnAnimation();
    }, []);
    return (
        <>
        <section className='xui-bg-pos-center xui-bg-sz-cover xui-bg-lazy' xui-bg-img={'https://images.unsplash.com/photo-1566378246598-5b11a0d486cc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmV3c3BhcGVyfGVufDB8fDB8fHww'}>
            <div className='dap-overlay-dark xui-container dap-bg-primary-overlay xui-text-white xui-py-8 xui-lg-py-8'>
                <NavbarSpacing />
                <h1 xui-aos={'fade-up'} xui-aos-duration={2} xui-aos-delay={.08} xui-aos-once={'exists'} className='bebas-neue-regular xui-font-sz-350 xui-lg-font-sz-500 xui-my-none xui-lg-w-fluid-80'>Get our latest news here...</h1>
                {/* <Button path={'/contact'} others={'xui-mt-1'} text={'Book a consultation'} color={'var(--color-white)'} /> */}
            </div>
        </section>
        <section className='xui-container xui-py-3 xui-lg-py-4'>
            <FetchStories />
        </section>
        </>
    );
};

export default Stories;