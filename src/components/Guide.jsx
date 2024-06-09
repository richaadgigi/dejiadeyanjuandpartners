import React, { useEffect } from 'react';

const Guide = () => {
    useEffect(() => {
        window.xuiScrollOnAnimation();
    }, []);
    return (
        <section className='xui-container xui-py-3 xui-lg-py-4 dap-bg-primary xui-text-white'>
            <div className='xui-d-grid xui-grid-col-1 xui-lg-grid-col-2 xui-grid-gap-2'>
                <h2 className='bebas-neue-regular xui-text-capitalize xui-font-w-normal xui-font-sz-300 xui-lg-font-sz-400 xui-lg-w-fluid-90' xui-aos={'fade-left'} xui-aos-duration={2} xui-aos-delay={.08} xui-aos-once={'exists'}>Let us be your Guide. Start the process now</h2>
                <p xui-aos={'fade-right'} xui-aos-duration={2} xui-aos-delay={.32} xui-aos-once={'exists'} className='xui-font-sz-110 xui-opacity-6 xui-line-height-2-half'> Enter a realm where seasoned practitioners lead the way at DAP Law Firm. With Deji Adeyanju and Marvin Omorogbe at the helm, our partner-led approach ensures tailored advice and rapid responses across various legal domains. From human rights to corporate law, our commitment to professionalism and confidentiality guarantees client satisfaction. Experience the pinnacle of legal service with DAP Law Firm.</p>
            </div>
            <div className='dap-scrollable xui-d-flex xui-flex-wrap-nowrap xui-flex-ai-center xui-grid-gap-2 xui-mt-2' xui-aos={'fade-up'} xui-aos-duration={2} xui-aos-delay={.08} xui-aos-once={'exists'}>
                <div className='xui-min-w-150 xui-w-150 xui-h-150 xui-bdr-rad-circle dap-btn-border xui-d-flex xui-flex-ai-center xui-flex-jc-center xui-flex-wrap-wrap xui-p-1'>
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
            <p xui-aos={'fade-left'} xui-aos-duration={2} xui-aos-delay={.08} xui-aos-once={'exists'} className='xui-opacity-6 xui-font-sz-110 xui-lg-w-fluid-60 xui-line-height-2-half xui-mt-4'>Step into a world of tailored legal expertise with DAP Law Firm. Led by Deji Adeyanju and Marvin Omorogbe, our team offers rapid, personalized solutions across diverse legal realms. With a commitment to collaboration and innovation, we prioritize finding resolutions outside the courtroom while standing ready to defend your interests if needed. Experience unparalleled service and results with DAP Law Firm.</p>
        </section>
    );
};

export default Guide;