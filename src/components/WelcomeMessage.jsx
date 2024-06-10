import React, { useEffect, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const WelcomeMessage = () => {
    const sectionRef = useRef(null);
    const imageRef = useRef(null);
    const headerRef = useRef(null);
    useGSAP(() => {
        gsap.to(imageRef.current, {
            y: -500,
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top top',
                end: 'bottom bottom',
                markers: false,
                scrub: 1
            }
        });
    });
    useEffect(() => {
        window.xuiScrollOnAnimation();
    }, []);
    return (
        <section ref={sectionRef} className='xui-container xui-py-3 xui-lg-py-5 xui-pos-relative xui-overflow-hidden'>
            <h2 ref={headerRef} xui-aos={'fade-left'} xui-aos-duration={2} xui-aos-delay={.08} xui-aos-once={'exists'} className='xui-text-capitalize xui-font-w-normal xui-font-sz-300 xui-lg-font-sz-500 xui-lg-w-fluid-70 bebas-neue-regular'>Empowering Legal Solutions: Your Path to Success with DAP Law Firm</h2>
            <p xui-aos={'fade-left'} xui-aos-duration={2} xui-aos-delay={.12} xui-aos-once={'exists'} className='xui-font-sz-110 xui-lg-font-sz-110 xui-opacity-8 xui-line-height-2 xui-mt-1 xui-lg-w-fluid-50'>Welcome to DAP Law Firm, where we are dedicated to empowering you on your journey to success through expert legal guidance and innovative solutions. At the helm of our firm are seasoned practitioners Deji Adeyanju and Marvin Omorogbe, whose wealth of experience and proven track record in various legal domains ensure that you receive the highest quality of service and representation. Our team operates on the principle of partnership, working closely with you to understand your unique needs, challenges, and aspirations. We believe in fostering strong relationships built on trust, transparency, and integrity, ensuring that you feel supported and informed every step of the way.</p>
            <img ref={imageRef} className='dap-img-lady-justice xui-d-none xui-lg-d-block' src="https://static.vecteezy.com/system/resources/previews/012/658/674/original/bronze-lady-justice-on-transparent-background-png.png" alt="lady justice image" />
        </section>
    );
};

export default WelcomeMessage;