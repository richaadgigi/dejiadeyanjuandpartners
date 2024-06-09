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
            <AreasOfPracticeCard image={"https://img.freepik.com/premium-photo/closeup-shot-group-unrecognisable-people-holding-up-their-fists-showing-their-support_762026-53085.jpg?w=360"} text={'Human rights'} />
            <AreasOfPracticeCard image={"https://img.freepik.com/premium-photo/close-up-with-judge-gavel-wooden-stand-with-handcuffs_23-2148230080.jpg?w=360"} text={'Criminal law'} />
            <AreasOfPracticeCard image={"https://img.freepik.com/free-photo/photorealistic-lawyer-day-celebration_23-2151053965.jpg?t=st=1717921736~exp=1717925336~hmac=65526cae84d0c4d70842d81b73b74db592e85003df019d6f1af7fd3766fae03f&w=740"} text={'Arbitration'} />
            <AreasOfPracticeCard image={"https://img.freepik.com/free-photo/portrait-professional-elegant-businesswoman_23-2150917130.jpg?t=st=1717921927~exp=1717925527~hmac=3b5375e392a85c5fc2dff258b0fc04eb3cbbbe416d23186b260937f2e45a74fb&w=740"} text={'Corporate and Commercial law'} />
            <AreasOfPracticeCard image={"https://img.freepik.com/free-photo/close-up-new-york-maintenance-worker_23-2150868134.jpg?t=st=1717922166~exp=1717925766~hmac=63dda3de253dbc0750b0692f619f3a781dd160ee64e7f012a8e88e4d630e5cd9&w=360"} text={'Oil and gas law'} />
            <AreasOfPracticeCard image={"https://img.freepik.com/premium-photo/african-beautiful-woman-wireless-headphones-sitting-armchair-watching-movie-online-digital-tablet_249974-6755.jpg?w=360"} text={'Tech and entertainment law'} />
            <AreasOfPracticeCard image={"https://img.freepik.com/free-photo/person-holding-speech-official-event_23-2151054199.jpg?t=st=1717922303~exp=1717925903~hmac=46666298345de21cc0683063adac6a9513861c80b76fb309bf4948700dac16b2&w=360"} text={'Election petition law'} />
            <AreasOfPracticeCard image={"https://img.freepik.com/premium-photo/young-woman-using-mobile-phone-while-sitting-home_1048944-14900010.jpg?w=360"} text={'Banking and finance'} />
            <AreasOfPracticeCard image={"https://img.freepik.com/free-photo/people-working-their-office_23-2149196409.jpg?t=st=1717922554~exp=1717926154~hmac=bc04c3488c0dbeea8386571dcaadc5cb24062442767a2f59fc486fdb80ba5070&w=360"} text={'Advisory and compliance services'} />
            <AreasOfPracticeCard image={"https://img.freepik.com/free-photo/close-up-judge-gavel-with-its-striking-block_23-2148230087.jpg?t=st=1717922625~exp=1717926225~hmac=663b861636314189dfae4f0c6f84aed723e300ceae7293a180073540e69839ec&w=740"} text={'Litigation'} />
        </div>
      </section>
    );
};

export default AreasOfPractice;