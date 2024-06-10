import React, { useEffect, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const BookACall = () => {
    const sectionRef = useRef(null);
    const backgroundImageRef = useRef(null);
    useEffect(() => {
        window.xuiScrollOnAnimation();
    }, []);
    useGSAP(() => {
        gsap.to(backgroundImageRef.current, {
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
           scrollTrigger: {
            trigger: sectionRef.current,
            pin: false,
            scrub: true,
            markers: false,
            start: 'top center',
            end: 'bottom center',
            onUpdate: (self) => {
                // Calculate the slant based on scroll progress
                const slant = self.progress * 20; // Adjust the multiplier to control the slant angle
                gsap.set(backgroundImageRef.current, {
                    clipPath: `polygon(0 0, 100% 0, 100% 100%, ${slant}% 100%)`
                });
            }
           }
        });
    });
    return (
        <div ref={sectionRef} className='dap-bg-secondary xui-row'>
            <div className='xui-col-12 xui-lg-col-7 xui-px-1 xui-lg-px-2 xui-py-3 xui-lg-py-5 xui-h-fluid-100 xui-w-fluid-100'>
                <h2 xui-aos={'fade-left'} xui-aos-duration={2} xui-aos-delay={.08} xui-aos-once={'exists'} className='xui-text-capitalize xui-font-w-normal xui-font-sz-300 xui-lg-font-sz-300 xui-lg-w-fluid-70 bebas-neue-regular xui-w-fluid-80'>Book a call with us now</h2>
                <p xui-aos={'fade-left'} xui-aos-duration={2} xui-aos-delay={.12} xui-aos-once={'exists'} className='xui-font-sz-110 xui-line-height-2 xui-opacity-8'>At DAP Law Firm, expertise merges with innovation for personalized legal solutions. Led by Deji Adeyanju and Marvin Omorogbe, we prioritize swift, tailored advice and resolution. Experience unparalleled service and results with DAP Law Firm</p>
            </div>
            <div ref={backgroundImageRef} className='xui-col-12 xui-lg-col-5 xui-h-fluid-auto xui-w-fluid-100 dap-bg-primary dap-slant-edge-i xui-bg-lazy xui-bg-pos-center xui-bg-sz-cover' xui-bg-img={'https://images.pexels.com/photos/6077326/pexels-photo-6077326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'}></div>
        </div>
    );
};

export default BookACall;