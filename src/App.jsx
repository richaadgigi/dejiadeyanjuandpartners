import React, { useEffect } from 'react';
import "./assets/styles/main.css";
import { ArrowRight, Email, LogoFacebook, LogoInstagram, LogoX, Partnership, Phone } from '@carbon/icons-react';

const App = () => {
    useEffect(() => {
        window.xuiLazyLoadings();
    }, []);
    return (
        <>
        <nav className='dap-bg-primary xui-container xui-h-100'></nav>
        <section className='xui-px-1 xui-lg-px-2 dap-bg-primary'>
            <div className='dap-bg-accent xui-bdr-rad-1 xui-overflow-hidden xui-bg-pos-center xui-bg-sz-cover xui-bg-lazy' xui-bg-img={'https://images.pexels.com/photos/7841844/pexels-photo-7841844.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'}>
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
                    <h2 className='xui-text-capitalize xui-font-w-normal xui-font-sz-180 xui-lg-font-sz-180 xui-lg-w-fluid-90 xui-line-height-3 xui-mx-auto'>Our practices areas & services</h2>
                    <p className='xui-font-sz-95 xui-opacity-5 xui-line-height-2 xui-lg-w-fluid-60 xui-mx-auto'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui odio, ipsum sint excepturi quam asperiores perferendis laudantium corporis optio.</p>
                </div>
                <div className='xui-d-grid xui-grid-col-1 xui-lg-grid-col-3 xui-grid-gap-2 xui-mt-4'>
                    <div className='dap-bg-gray xui-bdr-rad-1 xui-p-1'>
                        <div className='xui-w-50 xui-h-50 dap-bg-accent xui-bdr-rad-half xui-d-flex xui-flex-ai-center xui-flex-jc-center'>
                            <Partnership size={20} />
                        </div>
                        <h3 className='xui-mt-2 xui-font-sz-125 xui-font-w-normal'>Divorce</h3>
                        <p className='xui-opacity-6 xui-font-sz-80 xui-mt-half xui-line-height-1-half'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum optio eos nemo totam iure aut labore.</p>
                    </div>
                    <div className='dap-bg-gray xui-bdr-rad-1 xui-p-1'>
                        <div className='xui-w-50 xui-h-50 dap-bg-accent xui-bdr-rad-half xui-d-flex xui-flex-ai-center xui-flex-jc-center'>
                            <Partnership size={20} />
                        </div>
                        <h3 className='xui-mt-2 xui-font-sz-125 xui-font-w-normal'>Divorce</h3>
                        <p className='xui-opacity-6 xui-font-sz-80 xui-mt-half xui-line-height-1-half'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum optio eos nemo totam iure aut labore.</p>
                    </div>
                    <div className='dap-bg-gray xui-bdr-rad-1 xui-p-1'>
                        <div className='xui-w-50 xui-h-50 dap-bg-accent xui-bdr-rad-half xui-d-flex xui-flex-ai-center xui-flex-jc-center'>
                            <Partnership size={20} />
                        </div>
                        <h3 className='xui-mt-2 xui-font-sz-125 xui-font-w-normal'>Divorce</h3>
                        <p className='xui-opacity-6 xui-font-sz-80 xui-mt-half xui-line-height-1-half'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum optio eos nemo totam iure aut labore.</p>
                    </div>
                    <div className='dap-bg-gray xui-bdr-rad-1 xui-p-1'>
                        <div className='xui-w-50 xui-h-50 dap-bg-accent xui-bdr-rad-half xui-d-flex xui-flex-ai-center xui-flex-jc-center'>
                            <Partnership size={20} />
                        </div>
                        <h3 className='xui-mt-2 xui-font-sz-125 xui-font-w-normal'>Divorce</h3>
                        <p className='xui-opacity-6 xui-font-sz-80 xui-mt-half xui-line-height-1-half'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum optio eos nemo totam iure aut labore.</p>
                    </div>
                    <div className='dap-bg-gray xui-bdr-rad-1 xui-p-1'>
                        <div className='xui-w-50 xui-h-50 dap-bg-accent xui-bdr-rad-half xui-d-flex xui-flex-ai-center xui-flex-jc-center'>
                            <Partnership size={20} />
                        </div>
                        <h3 className='xui-mt-2 xui-font-sz-125 xui-font-w-normal'>Divorce</h3>
                        <p className='xui-opacity-6 xui-font-sz-80 xui-mt-half xui-line-height-1-half'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum optio eos nemo totam iure aut labore.</p>
                    </div>
                    <div className='dap-bg-gray xui-bdr-rad-1 xui-p-1'>
                        <div className='xui-w-50 xui-h-50 dap-bg-accent xui-bdr-rad-half xui-d-flex xui-flex-ai-center xui-flex-jc-center'>
                            <Partnership size={20} />
                        </div>
                        <h3 className='xui-mt-2 xui-font-sz-125 xui-font-w-normal'>Divorce</h3>
                        <p className='xui-opacity-6 xui-font-sz-80 xui-mt-half xui-line-height-1-half'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum optio eos nemo totam iure aut labore.</p>
                    </div>
                </div>
            </div>
        </section>
        <section className='dap-bg-secondary xui-container xui-py-3 xui-lg-py-5'>
            <div className='xui-text-center'>
                <h2 className='xui-text-capitalize xui-font-w-normal xui-font-sz-200 xui-lg-font-sz-200 xui-lg-w-fluid-90 xui-line-height-3 xui-mx-auto'>Let us be your GuideStart the process now</h2>
                <p className='xui-font-sz-95 xui-opacity-5 xui-line-height-2 xui-lg-w-fluid-60 xui-mx-auto xui-mt-1'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui odio, ipsum sint excepturi quam asperiores perferendis laudantium corporis optio.</p>
            </div>
            <div className='dap-scrollable xui-d-flex xui-flex-wrap-nowrap xui-flex-ai-center xui-grid-gap-4 xui-mt-4'>
                <img className='xui-img-150' src="https://freelogopng.com/images/all_img/1684047438forbes-logo-png.png" alt="forbes" />
                <img className='xui-img-150' src="https://www.pngkey.com/png/full/50-504236_bloomberg-media-logo-png.png" alt="bloomberg" />
                <img className='xui-img-150' src="https://elmoore.com/wp-content/uploads/2019/06/nytimes-logo-png-new-york-times-296.png" alt="new york times" />
                <img className='xui-img-150' src="https://freelogopng.com/images/all_img/1684047438forbes-logo-png.png" alt="forbes" />
                <img className='xui-img-150' src="https://www.pngkey.com/png/full/50-504236_bloomberg-media-logo-png.png" alt="bloomberg" />
                <img className='xui-img-150' src="https://elmoore.com/wp-content/uploads/2019/06/nytimes-logo-png-new-york-times-296.png" alt="new york times" />
            </div>
        </section>
        <footer className='dap-bg-primary xui-text-white xui-container xui-py-2 xui-lg-py-4'>
            <div className='xui-row'>
                <div className='xui-col-12 xui-lg-col-5 xui-lg-pr-2'>
                    <div className='xui-d-inline-flex xui-flex-ai-center xui-grid-gap-half'>
                        <img className='xui-img-40' src="https://cdn0.iconfinder.com/data/icons/circle-icons/512/new_york_times.png" alt="logo" />
                        <span className='xui-font-w-700'>THE DAP</span>
                    </div>
                    <p className='xui-font-sz-85 xui-opacity-5 xui-line-height-2 xui-lg-w-fluid-90 xui-mt-1'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui odio, ipsum sint excepturi quam.</p>
                    <div className='xui-d-grid xui-grid-col-1 xui-grid-gap-1-half xui-mt-4'>
                        <div className='xui-d-inline-flex xui-flex-ai-center xui-grid-gap-half'>
                            <Email size={24} />
                            <span className='xui-font-sz-90 xui-opacity-6'>testuser@gmail.com</span>
                        </div>
                        <div className='xui-d-inline-flex xui-flex-ai-center xui-grid-gap-half'>
                            <Phone size={24} />
                            <span className='xui-font-sz-90 xui-opacity-6'>testuser@gmail.com</span>
                        </div>
                    </div>
                </div>
                <div className='xui-col-12 xui-lg-col-7 xui-lg-pl-2'>
                    <div className='xui-d-grid xui-grid-col-1 xui-lg-grid-col-2 xui-grid-gap-2'>
                        <div>
                            <h4 className='xui-text-uppercase xui-font-sz-95'>Quick menu</h4>
                            <div className='xui-d-flex xui-grid-gap-2 xui-mt-2'>
                                <a className='xui-opacity-5 xui-font-sz-90 xui-text-inherit xui-text-dc-none xui-d-inline-block' href="#">Privacy Policy</a>
                                <a className='xui-opacity-5 xui-font-sz-90 xui-text-inherit xui-text-dc-none xui-d-inline-block' href="#">Privacy Policy</a>
                                <a className='xui-opacity-5 xui-font-sz-90 xui-text-inherit xui-text-dc-none xui-d-inline-block' href="#">Privacy Policy</a>
                                <a className='xui-opacity-5 xui-font-sz-90 xui-text-inherit xui-text-dc-none xui-d-inline-block' href="#">Privacy Policy</a>
                                <a className='xui-opacity-5 xui-font-sz-90 xui-text-inherit xui-text-dc-none xui-d-inline-block' href="#">Privacy Policy</a>
                            </div>
                        </div>
                        <div>
                            <h4 className='xui-text-uppercase xui-font-sz-95'>Subscribe</h4>
                            <form className='dap-footer-subscribe xui-mt-2 xui-d-flex xui-flex-ai-center' action="">
                                <input type="text" placeholder='subscribe@dap.com' />
                                <button className='xui-d-flex xui-flex-ai-center xui-flex-jc-center'>
                                    <ArrowRight size={24} />
                                </button>
                            </form>
                            <div className='xui-d-flex xui-flex-ai-center xui-grid-gap-1 xui-mt-2'>
                                <div className='xui-w-40 xui-h-40 xui-bdr-rad-circle xui-bg-white xui-d-flex xui-flex-ai-center xui-flex-jc-center xui-text-black'>
                                    <LogoX size={20} />
                                </div>
                                <div className='xui-w-40 xui-h-40 xui-bdr-rad-circle xui-bg-white xui-d-flex xui-flex-ai-center xui-flex-jc-center xui-text-black'>
                                    <LogoInstagram size={20} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr className='xui-my-4' />
            <div className='xui-d-flex xui-flex-ai-center xui-flex-jc-space-between'>
                <span className='xui-opacity-4 xui-font-sz-85'>Copyrights &copy; 2024 - DAP - Nigeria</span>
                <div className='xui-d-inline-flex xui-flex-ai-center xui-grip-gap-2'>
                    <div className='xui-lg-ml-1'>
                        <a className='xui-opacity-5 xui-font-sz-90 xui-text-inherit xui-text-dc-none xui-d-inline-block' href="#">Terms Of Use</a>
                    </div>
                    <div className='xui-lg-ml-1'>
                        <a className='xui-opacity-5 xui-font-sz-90 xui-text-inherit xui-text-dc-none xui-d-inline-block' href="#">Privacy Policy</a>
                    </div>
                </div>
            </div>
        </footer>
        </>
    );
};

export default App;