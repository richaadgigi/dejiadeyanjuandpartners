import React, { useEffect } from 'react';
import NavbarSpacing from '../components/NavbarSpacing';

const TermsOfUse = () => {
    useEffect(() => {
        window.xuiLazyLoadings();
        window.xuiScrollOnAnimation();
    }, []);
    return (
        <>
        <section className='xui-bg-pos-center xui-bg-sz-cover xui-bg-lazy' xui-bg-img={'https://images.unsplash.com/photo-1436450412740-6b988f486c6b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}>
            <div className='dap-overlay-dark xui-container dap-bg-primary-overlay xui-text-white xui-py-8 xui-lg-py-8'>
                <NavbarSpacing />
                <h1 xui-aos={'fade-up'} xui-aos-duration={2} xui-aos-delay={.08} xui-aos-once={'exists'} className='bebas-neue-regular xui-font-sz-350 xui-lg-font-sz-500 xui-my-none xui-lg-w-fluid-80'>Terms of Use</h1>
                {/* <Button path={'/contact'} others={'xui-mt-1'} text={'Book a consultation'} color={'var(--color-white)'} /> */}
            </div>
        </section>
        <section className='xui-container xui-py-3 xui-lg-py-5 xui-d-grid xui-grid-gap-2 xui-grid-col-1'>
            <div className=''>
                <h1 className='bebas-neue-regular xui-font-sz-250 xui-lg-font-sz-300'>1. Introduction</h1>
                <p className='xui-opacity-8 xui-font-sz-110 xui-line-height-2 xui-lg-w-fluid-80'>These Terms of Use ("Terms") govern your access to and use of the website located at dejiadeyanjuandpartners.com (the "Website") operated by Deji Adeyanju & Partners ("we," "us," or "our"). By accessing or using the Website, you agree to be bound by these Terms. If you disagree with any part of these Terms, you may not access or use the Website.</p>
            </div>
            <div className=''>
                <h1 className='bebas-neue-regular xui-font-sz-250 xui-lg-font-sz-300'>2. Use of the Website</h1>
                <p className='xui-opacity-8 xui-font-sz-110 xui-line-height-2 xui-lg-w-fluid-80'>The Website is provided for informational purposes only. You may not use the Website for any illegal or unauthorized purpose. You agree to use the Website in a manner that does not interfere with its use by others.</p>
            </div>
            <div className=''>
                <h1 className='bebas-neue-regular xui-font-sz-250 xui-lg-font-sz-300'>3. Content</h1>
                <p className='xui-opacity-8 xui-font-sz-110 xui-line-height-2 xui-lg-w-fluid-80'>The content on the Website, including text, graphics, logos, images, and other materials (the "Content"), is the property of Deji Adeyanju & Partners or its licensors and is protected by copyright and other intellectual property laws. You may not use the Content without our prior written permission.</p>
            </div>
            <div className=''>
                <h1 className='bebas-neue-regular xui-font-sz-250 xui-lg-font-sz-300'>4. Disclaimer</h1>
                <p className='xui-opacity-8 xui-font-sz-110 xui-line-height-2 xui-lg-w-fluid-80'>The information on the Website is provided for general informational purposes only and does not constitute legal advice. You should not rely on any information on the Website as a substitute for professional legal advice. We disclaim all warranties, express or implied, with respect to the accuracy, completeness, or timeliness of the information on the Website.</p>
            </div>
            <div className=''>
                <h1 className='bebas-neue-regular xui-font-sz-250 xui-lg-font-sz-300'>5. Limitation of Liability</h1>
                <p className='xui-opacity-8 xui-font-sz-110 xui-line-height-2 xui-lg-w-fluid-80'>We will not be liable for any damages arising out of or related to your use of the Website, including but not limited to direct, indirect, incidental, consequential, or punitive damages.</p>
            </div>
            <div className=''>
                <h1 className='bebas-neue-regular xui-font-sz-250 xui-lg-font-sz-300'>6. Indemnification</h1>
                <p className='xui-opacity-8 xui-font-sz-110 xui-line-height-2 xui-lg-w-fluid-80'>You agree to indemnify, defend, and hold harmless Deji Adeyanju & Partners, its officers, directors, employees, agents, and licensors from and against any and all claims, losses, expenses, damages, and costs, including reasonable attorneys' fees, arising out of or relating to your violation of these Terms.</p>
            </div>
            <div className=''>
                <h1 className='bebas-neue-regular xui-font-sz-250 xui-lg-font-sz-300'>7. Termination</h1>
                <p className='xui-opacity-8 xui-font-sz-110 xui-line-height-2 xui-lg-w-fluid-80'>We may terminate your access to the Website for any reason, at any time, without notice.</p>
            </div>
            <div className=''>
                <h1 className='bebas-neue-regular xui-font-sz-250 xui-lg-font-sz-300'>8. Governing Law</h1>
                <p className='xui-opacity-8 xui-font-sz-110 xui-line-height-2 xui-lg-w-fluid-80'>These Terms will be governed by and construed in accordance with the laws of the country, without regard to its conflict of law provisions.</p>
            </div>
            <div className=''>
                <h1 className='bebas-neue-regular xui-font-sz-250 xui-lg-font-sz-300'>9. Dispute Resolution</h1>
                <p className='xui-opacity-8 xui-font-sz-110 xui-line-height-2 xui-lg-w-fluid-80'>Any dispute arising out of or relating to these Terms will be resolved by binding arbitration.</p>
            </div>
            <div className=''>
                <h1 className='bebas-neue-regular xui-font-sz-250 xui-lg-font-sz-300'>10. Changes to the Terms</h1>
                <p className='xui-opacity-8 xui-font-sz-110 xui-line-height-2 xui-lg-w-fluid-80'>We may revise these Terms at any time by updating this posting. You are bound by any revisions and should therefore periodically visit this page to review the current Terms.</p>
            </div>
            <div className=''>
                <h1 className='bebas-neue-regular xui-font-sz-250 xui-lg-font-sz-300'>11. Entire Agreement</h1>
                <p className='xui-opacity-8 xui-font-sz-110 xui-line-height-2 xui-lg-w-fluid-80'>These Terms constitute the entire agreement between you and Deji Adeyanju & Partners regarding your use of the Website.</p>
            </div>
            <div className=''>
                <h1 className='bebas-neue-regular xui-font-sz-250 xui-lg-font-sz-300'>12. Contact Us</h1>
                <p className='xui-opacity-8 xui-font-sz-110 xui-line-height-2 xui-lg-w-fluid-80'>If you have any questions about these Terms, please contact us by email at <a href="mailto:info@dejiadeyanjuandpartners.com" className='xui-text-inherit xui-font-w-700'>info@dejiadeyanjuandpartners.com</a></p>
            </div>
        </section>
        </>
    );
};

export default TermsOfUse;