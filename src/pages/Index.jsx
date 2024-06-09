import React, { useEffect } from 'react';
import { ArrowRight, Partnership } from '@carbon/icons-react';
import Partners from '../components/Partners';
import AreasPractice from '../components/AreasPractice';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import AreasOfPractice from '../components/AreasOfPractice';
import FetchStories from '../components/FetchStories';
import WelcomeMessage from '../components/WelcomeMessage';
import BookACall from '../components/BookACall';
import Guide from '../components/Guide';

const Index = () => {
    useEffect(() => {
        setTimeout(() => {
            window.xuiLazyLoadings();
        });
    }, []);
    return (
        <>
        <section className='xui-bg-pos-center xui-bg-sz-cover xui-bg-lazy' xui-bg-img={'https://images.unsplash.com/photo-1589391886645-d51941baf7fb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}>
            <div className='dap-overlay-dark xui-container dap-bg-primary-overlay xui-text-white xui-py-8 xui-lg-py-8'>
                <h1 className='bebas-neue-regular xui-font-sz-350 xui-lg-font-sz-500 xui-my-none xui-lg-w-fluid-80'>Where Experience Meets Innovation for Your Legal Solutions.</h1>
                <Button path={'/contact'} others={'xui-mt-1'} text={'Book a consultation'} color={'var(--color-white)'} />
            </div>
        </section>
        <Guide />
        <WelcomeMessage />
        <AreasOfPractice />
        <section className='xui-container xui-py-3 xui-lg-py-5'>
            <BookACall />
            <h2 className='xui-text-capitalize xui-font-w-normal xui-font-sz-300 xui-lg-font-sz-400 xui-lg-w-fluid-70 bebas-neue-regular xui-mt-3 xui-lg-mt-5'>News & Publications</h2>
            <FetchStories size={3} />
        </section>
        {/* <Partners /> */}
        </>
    );
};

export default Index;