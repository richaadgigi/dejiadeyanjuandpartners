import React, { useEffect, useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
import AreasOfPracticeCard from './AreasOfPracticeCard';
gsap.registerPlugin(ScrollTrigger);

const AreasOfPractice = () => {
    const sectionRef = useRef(null);
    const horizontalRef = useRef(null);
    useGSAP(() => {
        // Setup horizontal scrolling
        gsap.to(horizontalRef.current, {
            x: (horizontalRef.current.clientWidth * -1) + (sectionRef.current.clientWidth - 100), // Animation distance
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top top', // Pin to the top
              end: 'bottom top+=100', // Start animation after 100px from top
              pin: true,
              markers: false,
              scrub: true, // Enable scrubbing for smooth scrolling
              anticipatePin: 1, // Improve responsiveness during pin
              onUpdate: (self) => {
                if (self.progress > 1) { // Disable pin after animation
                //   self.disable();
                }
              }
            }
          });
    });
    return (
        <section
            ref={sectionRef}
            className="xui-container xui-py-3 xui-lg-py-5 xui-text-white dap-bg-primary"
            style={{ height: '100vh', overflow: 'hidden', position: 'relative' }}
        >
        <h2 className='bebas-neue-regular xui-text-capitalize xui-font-w-normal xui-font-sz-300 xui-lg-font-sz-400 xui-lg-w-fluid-90 xui-mb-2'>Our areas of practice</h2>
        <div
          ref={horizontalRef}
          style={{
            display: 'flex',
            width: 'max-content',
            gridGap: '.8rem'
          }}
        >
            <AreasOfPracticeCard image={"https://images.pexels.com/photos/4561558/pexels-photo-4561558.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"} text={'Human rights'} />
            <AreasOfPracticeCard image={"https://images.pexels.com/photos/7715094/pexels-photo-7715094.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"} text={'Criminal law'} />
            <AreasOfPracticeCard image={"https://images.pexels.com/photos/5700167/pexels-photo-5700167.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"} text={'Arbitration'} />
            <AreasOfPracticeCard image={"https://images.pexels.com/photos/8112195/pexels-photo-8112195.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"} text={'Corporate and Commercial law'} />
            <AreasOfPracticeCard image={"https://images.pexels.com/photos/11610272/pexels-photo-11610272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"} text={'Oil and gas law'} />
            <AreasOfPracticeCard image={"https://images.pexels.com/photos/4101026/pexels-photo-4101026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"} text={'Tech and entertainment law'} />
            <AreasOfPracticeCard image={"https://images.pexels.com/photos/10401267/pexels-photo-10401267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"} text={'Election petition law'} />
            <AreasOfPracticeCard image={"https://images.pexels.com/photos/5909798/pexels-photo-5909798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"} text={'Banking and finance'} />
            <AreasOfPracticeCard image={"https://images.pexels.com/photos/4098232/pexels-photo-4098232.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"} text={'Advisory and compliance services'} />
            <AreasOfPracticeCard image={"https://images.pexels.com/photos/8731031/pexels-photo-8731031.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"} text={'Litigation'} />
        </div>
      </section>
    );
};

export default AreasOfPractice;