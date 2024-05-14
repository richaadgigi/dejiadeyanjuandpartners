import React, { useEffect } from 'react';
import { Partnership } from '@carbon/icons-react';
import Partners from '../components/Partners';
import AreasPractice from '../components/AreasPractice';
import { Link } from 'react-router-dom';

const Index = () => {
    useEffect(() => {
        window.xuiLazyLoadings();
    }, []);
    return (
        <>
        <section className='xui-px-1 xui-lg-px-2 dap-bg-primary'>
            <div className='dap-bg-accent xui-bdr-rad-1 xui-overflow-hidden xui-bg-pos-center xui-bg-sz-cover xui-bg-lazy' xui-bg-img={'https://images.pexels.com/photos/6077326/pexels-photo-6077326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'}>
                <div className='xui-overlay-1 xui-pt-4'>
                    <div className='xui-px-1 xui-lg-px-2 xui-py-2 xui-lg-py-4'>
                        <h1 className='xui-font-sz-200 xui-lg-font-sz-250 xui-my-none xui-lg-w-fluid-80 xui-line-height-4'>DAP Law Firm: Where Experience Meets Innovation for Your Legal Solutions.</h1>
                        <p className='xui-opacity-6 xui-lg-w-fluid-60 xui-line-height-2 xui-font-sz-105 xui-mt-1'>At DAP Law Firm, expertise merges with innovation for personalized legal solutions. Led by Deji Adeyanju and Marvin Omorogbe, we prioritize swift, tailored advice and resolution. Experience unparalleled service and results with DAP Law Firm</p>
                        <Link to="/contact" className='xui-btn dap-bg-secondary xui-bdr-rad-5 xui-mt-2'>Book a consultation</Link>
                    </div>
                </div>
            </div>
        </section>
        <section className='xui-container xui-py-3 xui-lg-py-4 dap-bg-primary xui-text-white'>
            <div className='xui-d-grid xui-grid-col-1 xui-lg-grid-col-2 xui-grid-gap-2'>
                <h2 className='xui-text-capitalize xui-font-w-normal xui-font-sz-200 xui-lg-font-sz-200 xui-lg-w-fluid-90 xui-line-height-3'>Let us be your Guide. Start the process now</h2>
                <p className='xui-font-sz-95 xui-opacity-5 xui-line-height-2'> Enter a realm where seasoned practitioners lead the way at DAP Law Firm. With Deji Adeyanju and Marvin Omorogbe at the helm, our partner-led approach ensures tailored advice and rapid responses across various legal domains. From human rights to corporate law, our commitment to professionalism and confidentiality guarantees client satisfaction. Experience the pinnacle of legal service with DAP Law Firm.</p>
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
            <p className='xui-opacity-5 xui-font-sz-95 xui-lg-w-fluid-60 xui-line-height-2 xui-mt-4'>Step into a world of tailored legal expertise with DAP Law Firm. Led by Deji Adeyanju and Marvin Omorogbe, our team offers rapid, personalized solutions across diverse legal realms. With a commitment to collaboration and innovation, we prioritize finding resolutions outside the courtroom while standing ready to defend your interests if needed. Experience unparalleled service and results with DAP Law Firm.</p>
        </section>
        <section className='xui-container xui-py-3 xui-lg-py-5'>
            <div className='xui-d-grid xui-grid-col-1 xui-lg-grid-col-2 xui-grid-gap-4'>
                <div className='xui-bg-lazy xui-bg-pos-center xui-bg-sz-cover xui-bdr-rad-1' style={{backgroundImage: 'url("https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")'}}></div>
                <div>
                    <h2 className='xui-text-capitalize xui-font-w-normal xui-font-sz-200 xui-lg-font-sz-200 xui-lg-w-fluid-90 xui-line-height-3'>Empowering Legal Solutions: Your Path to Success with DAP Law Firm</h2>
                    <p className='xui-font-sz-95 xui-opacity-5 xui-line-height-2 xui-mt-1'>Welcome to DAP Law Firm, where we are dedicated to empowering you on your journey to success through expert legal guidance and innovative solutions. At the helm of our firm are seasoned practitioners Deji Adeyanju and Marvin Omorogbe, whose wealth of experience and proven track record in various legal domains ensure that you receive the highest quality of service and representation. Our team operates on the principle of partnership, working closely with you to understand your unique needs, challenges, and aspirations. We believe in fostering strong relationships built on trust, transparency, and integrity, ensuring that you feel supported and informed every step of the way.</p>
                </div>
            </div>
        </section>
        <section className='xui-container xui-py-3 xui-lg-py-5'>
            <div className='dap-bg-accent xui-text-white xui-p-1 xui-lg-p-2 xui-bdr-rad-1'>
                <div className='xui-text-center'>
                    <h2 className='xui-text-capitalize xui-font-w-normal xui-font-sz-180 xui-lg-font-sz-180 xui-lg-w-fluid-90 xui-line-height-3 xui-mx-auto'>Our areas of practice</h2>
                </div>
                <div className='xui-d-grid xui-grid-col-2 xui-lg-grid-col-3 xui-grid-gap-2 xui-mt-2'>
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
        {/* <Partners /> */}
        </>
    );
};

export default Index;