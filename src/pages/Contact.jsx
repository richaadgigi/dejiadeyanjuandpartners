import { LogoInstagram, LogoX, Phone, Send } from "@carbon/icons-react";
import { useRef } from "react";
import { Link } from "react-router-dom";

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
    return (
        <>
        {/* <section className="xui-bg-pos-center xui-bg-sz-cover xui-bg-lazy" style={{backgroundImage: `url('https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`}}>
            <div className="xui-overlay-2 xui-container xui-py-4 xui-lg-py-8">
                <h1 className="xui-font-sz-300 xui-lg-font-sz-400 xui-lg-w-fluid-80 xui-w-fluid-100 xui-font-10">Contact Us</h1>
                <p className="xui-font-sz-100 xui-opacity-8 xui-lg-w-fluid-50 xui-line-height-2 xui-mt-1">Want to consult about our services or having any troubles? Just chat us on live or leave an email about your queries to get instant solution. Our support team is always glad to resolve your queries as soon as they can.</p>
            </div>
        </section> */}
        <section className="xui-container xui-py-3 xui-lg-py-5">
            <h2 className="xui-lg-w-fluid-70 xui-font-sz-150 xui-lg-font-sz-250 xui-line-height-4">Do not hesitate to reach out. Just fill in the contact form here and we'll be sure to reply as fast as possible.</h2>
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