import React, { useEffect } from 'react';
import { Partnership } from '@carbon/icons-react';
import Partners from '../components/Partners';
import AreasPractice from '../components/AreasPractice';

const Index = () => {
    useEffect(() => {
        window.xuiLazyLoadings();
    }, []);
    return (
        <>
        <section className='xui-px-1 xui-lg-px-2 dap-bg-primary'>
            <div className='dap-bg-accent xui-bdr-rad-1 xui-overflow-hidden xui-bg-pos-center xui-bg-sz-cover xui-bg-lazy' xui-bg-img={'https://images.pexels.com/photos/6077326/pexels-photo-6077326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'}>
                <div className='xui-overlay-1 xui-pt-4'>
                    <div className='xui-lg-px-2 xui-py-2 xui-lg-py-4'>
                        <h1 className='xui-font-sz-200 xui-lg-font-sz-250 xui-my-none xui-lg-w-fluid-80 xui-line-height-4'>Assisting in the accurate establishment, development and safeguarding of your brand and business.</h1>
                        <p className='xui-opacity-6 xui-lg-w-fluid-60 xui-line-height-2 xui-font-sz-105 xui-mt-1'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia in quas iusto nobis sequi, eveniet eligendi aliquid rem, cum nihil corrupti. Voluptates, harum vel. Fugiat, iusto veritatis. Necessitatibus, rem asperiores?</p>
                        <a href="#" className='xui-btn dap-bg-secondary xui-bdr-rad-5 xui-mt-2'>Book a consultation</a>
                    </div>
                </div>
            </div>
        </section>
        <section className='xui-container xui-py-3 xui-lg-py-4 dap-bg-primary xui-text-white'>
            <div className='xui-d-grid xui-grid-col-1 xui-lg-grid-col-2 xui-grid-gap-2'>
                <h2 className='xui-text-capitalize xui-font-w-normal xui-font-sz-200 xui-lg-font-sz-200 xui-lg-w-fluid-90 xui-line-height-3'>Let us be your GuideStart the process now</h2>
                <p className='xui-font-sz-95 xui-opacity-5 xui-line-height-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui odio, ipsum sint excepturi quam asperiores perferendis laudantium corporis optio, fugiat vero saepe magnam aspernatur culpa quod omnis. Saepe, veniam accusamus?</p>
            </div>
            <div className='dap-scrollable xui-d-flex xui-flex-wrap-nowrap xui-flex-ai-center xui-grid-gap-2 xui-mt-2'>
                <div className='xui-w-150 xui-h-150 xui-bdr-rad-circle dap-btn-border xui-d-flex xui-flex-ai-center xui-flex-jc-center xui-flex-wrap-wrap xui-p-1'>
                    <span className='xui-text-capitalize xui-d-inline-block xui-text-center xui-line-height-1-half xui-opacity-4'>15 minute <br /> consult</span>
                </div>
                <button className='xui-btn dap-btn-border xui-bdr-rad-5'>
                    <span className='xui-opacity-4'>Action plan & engagement</span>
                </button>
                <button className='xui-btn dap-btn-border xui-bdr-rad-5'>
                    <span className='xui-opacity-4'>Confident advice</span>
                </button>
                <button className='xui-btn dap-btn-border xui-bdr-rad-5'>
                    <span className='xui-opacity-4'>Action steps & delivery</span>
                </button>
                <button className='xui-btn dap-btn-border xui-bdr-rad-5'>
                    <span className='xui-opacity-4'>Reassessment</span>
                </button>
            </div>
            <p className='xui-opacity-5 xui-font-sz-95 xui-lg-w-fluid-60 xui-line-height-2 xui-mt-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque possimus iste repellendus commodi? Magnam praesentium, cupiditate nesciunt perspiciatis quisquam molestias illo ipsa corporis velit, non, debitis vero fugit mollitia omnis?</p>
        </section>
        <section className='xui-container xui-py-3 xui-lg-py-5'>
            <div className='xui-d-grid xui-grid-col-1 xui-lg-grid-col-2 xui-grid-gap-4'>
                <div className='xui-bg-lazy xui-bg-pos-center xui-bg-sz-cover xui-bdr-rad-1' style={{backgroundImage: 'url("https://images.pexels.com/photos/18989540/pexels-photo-18989540/free-photo-of-man-in-a-fedora-looking-out-from-behind-a-fence-wall-corner.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")'}}></div>
                <div>
                    <h2 className='xui-text-capitalize xui-font-w-normal xui-font-sz-200 xui-lg-font-sz-200 xui-lg-w-fluid-90 xui-line-height-3'>Let us be your GuideStart the process now</h2>
                    <p className='xui-font-sz-95 xui-opacity-5 xui-line-height-2 xui-mt-1'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui odio, ipsum sint excepturi quam asperiores perferendis laudantium corporis optio, fugiat vero saepe magnam aspernatur culpa quod omnis. Saepe, veniam accusamus?</p>
                    <div className='xui-d-grid xui-grid-col-1 xui-lg-grid-col-3 xui-grid-gap-1 xui-mt-2'>
                        <div className='xui-bg-light xui-bdr-rad-1 xui-py-2 xui-px-1-half'>
                            <h3 className='xui-font-w-500 xui-font-sz-150'>5th</h3>
                            <p className='xui-opacity-6 xui-font-sz-75 xui-mt-half'>Field expertise</p>
                        </div>
                        <div className='xui-bg-light xui-bdr-rad-1 xui-py-2 xui-px-1-half'>
                            <h3 className='xui-font-w-500 xui-font-sz-150'>5th</h3>
                            <p className='xui-opacity-6 xui-font-sz-75 xui-mt-half'>Field expertise</p>
                        </div>
                        <div className='xui-bg-light xui-bdr-rad-1 xui-py-2 xui-px-1-half'>
                            <h3 className='xui-font-w-500 xui-font-sz-150'>5th</h3>
                            <p className='xui-opacity-6 xui-font-sz-75 xui-mt-half'>Field expertise</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className='xui-container xui-py-3 xui-lg-py-5'>
            <div className='dap-bg-accent xui-text-white xui-p-1 xui-lg-p-2 xui-bdr-rad-1'>
                <div className='xui-text-center'>
                    <h2 className='xui-text-capitalize xui-font-w-normal xui-font-sz-180 xui-lg-font-sz-180 xui-lg-w-fluid-90 xui-line-height-3 xui-mx-auto'>Our areas of practice</h2>
                </div>
                <div className='xui-d-grid xui-grid-col-1 xui-lg-grid-col-3 xui-grid-gap-2 xui-mt-2'>
                    <AreasPractice icon={<Partnership size={20} />} heading={"Human rights"} />
                    <AreasPractice icon={<Partnership size={20} />} heading={"Criminal law"} />
                    <AreasPractice icon={<Partnership size={20} />} heading={"Arbitration"} />
                    <AreasPractice icon={<Partnership size={20} />} heading={"Corporate and Commercial law"} />
                    <AreasPractice icon={<Partnership size={20} />} heading={"Oil and gas law"} />
                    <AreasPractice icon={<Partnership size={20} />} heading={"Tech and entertainment law"} />
                    <AreasPractice icon={<Partnership size={20} />} heading={"Election petition law"} />
                    <AreasPractice icon={<Partnership size={20} />} heading={"Banking and finance"} />
                    <AreasPractice icon={<Partnership size={20} />} heading={"Advisory and compliance services"} />
                    <AreasPractice icon={<Partnership size={20} />} heading={"Litigation"} />
                </div>
            </div>
        </section>
        <Partners />
        </>
    );
};

export default Index;