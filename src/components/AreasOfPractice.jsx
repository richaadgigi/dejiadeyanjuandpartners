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
            <AreasOfPracticeCard image={"https://img.freepik.com/free-photo/person-holding-speech-official-event_23-2151054199.jpg?t=st=1717922303~exp=1717925903~hmac=46666298345de21cc0683063adac6a9513861c80b76fb309bf4948700dac16b2&w=360"} text={'Election petition law'} />
            <AreasOfPracticeCard image={"https://img.freepik.com/premium-photo/young-woman-using-mobile-phone-while-sitting-home_1048944-14900010.jpg?w=360"} text={'Banking and finance'} />
            <AreasOfPracticeCard image={"https://img.freepik.com/free-photo/people-working-their-office_23-2149196409.jpg?t=st=1717922554~exp=1717926154~hmac=bc04c3488c0dbeea8386571dcaadc5cb24062442767a2f59fc486fdb80ba5070&w=360"} text={'Advisory and compliance services'} />
            <AreasOfPracticeCard image={"https://img.freepik.com/free-photo/close-up-judge-gavel-with-its-striking-block_23-2148230087.jpg?t=st=1717922625~exp=1717926225~hmac=663b861636314189dfae4f0c6f84aed723e300ceae7293a180073540e69839ec&w=740"} text={'Litigation'} />
        </div>
      </section>
    );
};

export default AreasOfPractice;