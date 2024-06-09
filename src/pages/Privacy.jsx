import React, { useEffect } from 'react';
import NavbarSpacing from '../components/NavbarSpacing';

const Privacy = () => {
    useEffect(() => {
        window.xuiLazyLoadings();
        window.xuiScrollOnAnimation();
    }, []);
    return (
        <>
        <section className='xui-bg-pos-center xui-bg-sz-cover xui-bg-lazy' xui-bg-img={'https://images.unsplash.com/photo-1436450412740-6b988f486c6b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}>
            <div className='dap-overlay-dark xui-container dap-bg-primary-overlay xui-text-white xui-py-8 xui-lg-py-8'>
                <NavbarSpacing />
                <h1 xui-aos={'fade-up'} xui-aos-duration={2} xui-aos-delay={.08} xui-aos-once={'exists'} className='bebas-neue-regular xui-font-sz-350 xui-lg-font-sz-500 xui-my-none xui-lg-w-fluid-80'>Privacy Policy</h1>
                {/* <Button path={'/contact'} others={'xui-mt-1'} text={'Book a consultation'} color={'var(--color-white)'} /> */}
            </div>
        </section>
        <section className='xui-container xui-py-3 xui-lg-py-5 xui-d-grid xui-grid-gap-2 xui-grid-col-1'>
            <div className=''>
                <h1 className='bebas-neue-regular xui-font-sz-250 xui-lg-font-sz-300'>1. Introduction and Scope</h1>
                <p className='xui-opacity-8 xui-font-sz-110 xui-line-height-2 xui-lg-w-fluid-80'>This Privacy Policy explains how Deji Adeyanju & Partners ("we," "us," or "our") collects, uses, discloses, and protects your personal information when you visit our website (dejiadeyanjuandpartners.com) or otherwise interact with us. This policy applies to all users of our Website and those who provide us with personal information.</p>
            </div>
            <div className=''>
                <h1 className='bebas-neue-regular xui-font-sz-250 xui-lg-font-sz-300'>2. Data Collection</h1>
                <p className='xui-opacity-8 xui-font-sz-110 xui-line-height-2 xui-lg-w-fluid-80'>We collect two main types of data:</p>
                <ul className='xui-opacity-8 xui-font-sz-100 xui-line-height-2 xui-lg-w-fluid-80 xui-d-grid xui-grid-gap-half xui-grid-col-1 xui-mt-1-half'>
                    <li><span className='xui-font-w-700'>Personal Information:</span> This includes information that can be used to identify you, such as your name, email address, phone number, mailing address, and any other information you choose to provide when contacting us through a form, expressing interest in our services, or subscribing to our newsletter.</li>
                    <li><span className='xui-font-w-700'>Non-Personal Information:</span> This includes information that does not identify you personally, such as your browser type, operating system, IP address, browsing history on our Website, and demographic information. We may collect this information automatically through cookies and other tracking technologies.</li>
                </ul>
            </div>
            <div className=''>
                <h1 className='bebas-neue-regular xui-font-sz-250 xui-lg-font-sz-300'>3. Non-Personal Information</h1>
                <p className='xui-opacity-8 xui-font-sz-110 xui-line-height-2 xui-lg-w-fluid-80'>We collect data to:</p>
                <ul className='xui-opacity-8 xui-font-sz-100 xui-line-height-2 xui-lg-w-fluid-80 xui-d-grid xui-grid-gap-half xui-grid-col-1 xui-mt-1-half'>
                    <li>Provide and improve our legal services</li>
                    <li>Respond to your inquiries and requests</li>
                    <li>Send you information about our services and other updates</li>
                    <li>Analyze how users interact with our Website</li>
                    <li>Comply with legal and regulatory obligations</li>
                </ul>
            </div>
            <div className=''>
                <h1 className='bebas-neue-regular xui-font-sz-250 xui-lg-font-sz-300'>4. Data Usage</h1>
                <p className='xui-opacity-8 xui-font-sz-110 xui-line-height-2 xui-lg-w-fluid-80'>We use the collected data for the purposes listed above. Your data is processed by authorized personnel within our organization and may be accessed by third-party service providers who assist us with operating the Website (subject to strict confidentiality agreements).</p>
            </div>
            <div className=''>
                <h1 className='bebas-neue-regular xui-font-sz-250 xui-lg-font-sz-300'>5. Data Sharing and Disclosure</h1>
                <p className='xui-opacity-8 xui-font-sz-110 xui-line-height-2 xui-lg-w-fluid-80'>We will not share your personal information with third parties except in the following limited circumstances:</p>
                <ul className='xui-opacity-8 xui-font-sz-100 xui-line-height-2 xui-lg-w-fluid-80 xui-d-grid xui-grid-gap-half xui-grid-col-1 xui-mt-1-half'>
                    <li><b>Service Providers:</b> We may share your information with service providers who assist us with Website operation, such as IT providers and marketing agencies. These providers are contractually obligated to keep your information confidential and secure.</li>
                    <li><b>Legal Requirements:</b> We may disclose your information if required by law, such as in response to a court order or subpoena.</li>
                    <li><b>Professional Obligations:</b> We may disclose your information to the extent necessary to comply with our professional obligations as lawyers.</li>
                </ul>
            </div>
            <div className=''>
                <h1 className='bebas-neue-regular xui-font-sz-250 xui-lg-font-sz-300'>6. Data Storage and Security</h1>
                <p className='xui-opacity-8 xui-font-sz-110 xui-line-height-2 xui-lg-w-fluid-80'>You agree to indemnify, defend, and hold harmless Deji Adeyanju & Partners, its officers, directors, employees, agents, and licensors from and against any and all claims, losses, expenses, damages, and costs, including reasonable attorneys' fees, arising out of or relating to your violation of these Terms.</p>
            </div>
            <div className=''>
                <h1 className='bebas-neue-regular xui-font-sz-250 xui-lg-font-sz-300'>7. User Rights</h1>
                <p className='xui-opacity-8 xui-font-sz-110 xui-line-height-2 xui-lg-w-fluid-80'>You have the right to:</p>
                <ul className='xui-opacity-8 xui-font-sz-100 xui-line-height-2 xui-lg-w-fluid-80 xui-d-grid xui-grid-gap-half xui-grid-col-1 xui-mt-1-half'>
                    <li>Access your personal information we hold</li>
                    <li>Request correction of inaccurate information</li>
                    <li>Request deletion of your personal information (subject to legal and professional obligations)</li>
                    <li>Opt out of receiving marketing communications</li>
                </ul>
            </div>
            <div className=''>
                <h1 className='bebas-neue-regular xui-font-sz-250 xui-lg-font-sz-300'>8. Cookies and Tracking Technologies</h1>
                <p className='xui-opacity-8 xui-font-sz-110 xui-line-height-2 xui-lg-w-fluid-80'>We may use cookies and other tracking technologies to collect non-personal information about your use of our Website. These technologies help us improve the functionality of the Website and understand how users interact with it. You can manage your cookie preferences through your browser settings.</p>
            </div>
            <div className=''>
                <h1 className='bebas-neue-regular xui-font-sz-250 xui-lg-font-sz-300'>9. Children's Privacy</h1>
                <p className='xui-opacity-8 xui-font-sz-110 xui-line-height-2 xui-lg-w-fluid-80'>Our Website is not directed to children under 13. We do not knowingly collect personal information from children under 13.</p>
            </div>
            <div className=''>
                <h1 className='bebas-neue-regular xui-font-sz-250 xui-lg-font-sz-300'>10. Changes to the Privacy Policy</h1>
                <p className='xui-opacity-8 xui-font-sz-110 xui-line-height-2 xui-lg-w-fluid-80'>We may update this Privacy Policy from time to time. We will post the updated Privacy Policy on our Website and may notify you by email if the changes are significant.</p>
            </div>
            <div className=''>
                <h1 className='bebas-neue-regular xui-font-sz-250 xui-lg-font-sz-300'>11. Contact Information</h1>
                <p className='xui-opacity-8 xui-font-sz-110 xui-line-height-2 xui-lg-w-fluid-80'>If you have any questions about this Privacy Policy, please contact us by email at <a href="mailto:info@dejiadeyanjuandpartners.com" className='xui-text-inherit xui-font-w-700'>info@dejiadeyanjuandpartners.com</a></p>
            </div>
            <div className=''>
                <h1 className='bebas-neue-regular xui-font-sz-250 xui-lg-font-sz-300'>12. Legal Basis for Processing (if applicable)</h1>
                <p className='xui-opacity-8 xui-font-sz-110 xui-line-height-2 xui-lg-w-fluid-80'>We collect and process your personal information based on your consent when you provide it to us. We may also process your information to comply with our contractual obligations or legitimate interests in operating our law firm.</p>
            </div>
            <div className=''>
                <h1 className='bebas-neue-regular xui-font-sz-250 xui-lg-font-sz-300'>13. International Data Transfers (if applicable)</h1>
                <p className='xui-opacity-8 xui-font-sz-110 xui-line-height-2 xui-lg-w-fluid-80'>We do not currently transfer data internationally. However, if this changes in the future, we will update this policy and provide information on any safeguards in place for international data transfers.</p>
            </div>
            <div className=''>
                <h1 className='bebas-neue-regular xui-font-sz-250 xui-lg-font-sz-300'>14. Compliance with Relevant Laws and Regulations</h1>
                <p className='xui-opacity-8 xui-font-sz-110 xui-line-height-2 xui-lg-w-fluid-80'>We strive to comply with the Nigerian Data Protection Act, 2023 and all other relevant privacy laws and regulations, including GDPR and CCPA (as applicable).</p>
                <p className='xui-opacity-8 xui-font-sz-110 xui-line-height-2 xui-lg-w-fluid-80 xui-mt-1'>This Privacy Policy is designed to be comprehensive, clear, and easily accessible. It details the information we collect, how we use it, and your rights regarding your data.</p>
            </div>
        </section>
        </>
    );
};

export default Privacy;