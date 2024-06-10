import { LogoFacebook, LogoInstagram, LogoLinkedin, LogoX, Phone, Send } from "@carbon/icons-react";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import NavbarSpacing from "../components/NavbarSpacing";

const Contact = () => {
    const name = useRef(null);
    const email = useRef(null);
    const message = useRef(null);
    const formData = {name: "", email: "", subject: "", message: ""};
    const onSubmitHandler = (event) => {
        event.preventDefault();
        formData.name = name.current.value;
        formData.email = email.current.value;
        formData.subject = "New Message";
        formData.message = message.current.value;
        window.open("mailto:info@http://dejiadeyanjuandpartners.com/?subject="+ formData.subject +"&body="+ encodeURI(formData.message));
    }
    useEffect(() => {
        window.xuiLazyLoadings();
        window.xuiScrollOnAnimation();
    }, []);
    return (
        <>
        <section className='xui-bg-pos-center xui-bg-sz-cover xui-bg-lazy' xui-bg-img={'https://images.unsplash.com/photo-1587560699334-bea93391dcef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}>
            <div className='dap-overlay-dark xui-container dap-bg-primary-overlay xui-text-white xui-py-8 xui-lg-py-8'>
                <NavbarSpacing />
                <h1 xui-aos={'fade-up'} xui-aos-duration={2} xui-aos-delay={.08} xui-aos-once={'exists'} className='bebas-neue-regular xui-font-sz-350 xui-lg-font-sz-500 xui-my-none xui-lg-w-fluid-80'>Send us a message</h1>
                {/* <Button path={'/contact'} others={'xui-mt-1'} text={'Book a consultation'} color={'var(--color-white)'} /> */}
            </div>
        </section>
        <section className="xui-container xui-py-3 xui-lg-py-5">
            <h2 className="xui-lg-w-fluid-70 xui-font-sz-250 xui-line-height-4">Do not hesitate to reach out. Just fill in the contact form here and we'll be sure to reply as fast as possible.</h2>
            <div className="xui-row xui-mt-4">
                <div className="xui-col-12 xui-lg-col-4">
                    <h3 className="xui-font-sz-150 xui-mb-1">Message us</h3>
                    <Link className="xui-btn-block dap-bg-primary xui-text-white xui-font-sz-80 xui-d-inline-block xui-my-half xui-d-flex xui-flex-ai-center xui-flex-jc-center xui-grid-gap-half" to="mailto:info@dejiadeyanjuandpartners.com">
                        <Send size={20} />
                        <span>Send us a message</span>
                    </Link>
                    <Link className="xui-btn-block dap-bg-primary xui-text-white xui-font-sz-80 xui-d-inline-block xui-my-half xui-d-flex xui-flex-ai-center xui-flex-jc-center xui-grid-gap-half" target="_blank" to="https://x.com/DAPLawFirm">
                        <LogoX size={20} />
                        <span>Tweet Us</span>
                    </Link>
                    <Link className="xui-btn-block dap-bg-primary xui-text-white xui-font-sz-80 xui-d-inline-block xui-my-half xui-d-flex xui-flex-ai-center xui-flex-jc-center xui-grid-gap-half" target="_blank" to="https://www.instagram.com/daplawfirm/">
                        <LogoInstagram size={20} />
                        <span>Follow Us on Instagram</span>
                    </Link>
                    <Link className="xui-btn-block dap-bg-primary xui-text-white xui-font-sz-80 xui-d-inline-block xui-my-half xui-d-flex xui-flex-ai-center xui-flex-jc-center xui-grid-gap-half" target="_blank" to="https://web.facebook.com/profile.php?id=61557483726383">
                        <LogoFacebook size={20} />
                        <span>Find Us on Facebook</span>
                    </Link>
                    <Link className="xui-btn-block dap-bg-primary xui-text-white xui-font-sz-80 xui-d-inline-block xui-my-half xui-d-flex xui-flex-ai-center xui-flex-jc-center xui-grid-gap-half" target="_blank" to="https://www.linkedin.com/company/daplawfirm/">
                        <LogoLinkedin size={20} />
                        <span>We are on Linkedin</span>
                    </Link>
                    <Link className="xui-btn-block dap-bg-primary xui-text-white xui-font-sz-80 xui-d-inline-block xui-my-half xui-d-flex xui-flex-ai-center xui-flex-jc-center xui-grid-gap-half" to="tel:2347037717746">
                        <Phone size={20} />
                        <span>Call us now!</span>
                    </Link>
                </div>
                <div className="xui-col-12 xui-lg-col-8 xui-lg-pl-2">
                    <form className="xui-form" onSubmit={onSubmitHandler}>
                        <div className="xui-form-box">
                            <input type="text" ref={name} name="name" id="name" placeholder="Enter your name" required />
                        </div>
                        <div className="xui-form-box">
                            <input type="email" ref={email} name="email" id="email" placeholder="Enter your email" required />
                        </div>
                        <div className="xui-form-box">
                            <textarea name="message" ref={message} id="message" placeholder="Enter your message" required></textarea>
                        </div>
                        <div className="xui-form-box">
                            <button type="submit" className="xui-btn-block dap-bg-accent xui-text-white xui-font-w-700">Send message</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
        </>
    )
};

export default Contact;