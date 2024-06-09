import axios from 'axios';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate, useParams } from 'react-router-dom';
import NavbarSpacing from '../components/NavbarSpacing';

const StoryDetails = () => {
    const navigate = useNavigate();
    const [ story, setStory ] = useState(null);
    const { stripped } = useParams();
    useEffect(() => {
        axios({
            method: "GET",
            url: `https://api.dejiadeyanjuandpartners.com/public/post/stripped?stripped=${stripped}`
        })
        .then((res) => {
            setStory(res.data.data);
            window.xuiLazyLoadings();
        })
        .catch((err) => {
            navigate('/stories');
        })
        .finally(() => {
        });
        window.xuiScrollOnAnimation();
    }, [story]);
    return (
        <>
        {!story && <section className='xui-container xui-py-3 xui-lg-py-5'>
            <h1 className={'xui-font-sz-200 xui-lg-font-sz-300 xui-line-height-4-half xui xui-lg-w-fluid-70 xui--skeleton'}>{'Something happening in the tech industry in alias with the law firms of Nigeria'}</h1>
            <div className='xui-d-inline-flex xui-flex-ai-center xui-flex-jc-space-between xui-grid-gap-1'>
                <span className={'xui-font-w-700 xui-font-sz-85 dap-text-secondary xui-text-uppercase xui--skeleton'}>{'Justice'}</span>
                <div className='xui-w-5 xui-h-5 xui-bg-black'></div>
                <span className={'xui-font-sz-75 xui-opacity-7 xui--skeleton'}>{'June 11th, 2023'}</span>
            </div>
            <div className={'xui-my-2 xui-h-200 xui-lg-h-400 xui-w-fluid-100 xui-bg-pos-center xui-bg-sz-cover xui--skeleton'}></div>
        </section>}
        {story && <>
        <section className='xui-bg-pos-center xui-bg-sz-cover xui-bg-lazy' xui-bg-img={story.image}>
            <div className='dap-overlay-dark xui-container dap-bg-primary-overlay xui-text-white xui-py-8 xui-lg-py-8'>
                <NavbarSpacing />
                <h1 xui-aos={'fade-up'} xui-aos-duration={2} xui-aos-delay={.08} xui-aos-once={'exists'} className='bebas-neue-regular xui-font-sz-350 xui-lg-font-sz-500 xui-my-none xui-lg-w-fluid-80'>{story.title}</h1>
                {/* <Button path={'/contact'} others={'xui-mt-1'} text={'Book a consultation'} color={'var(--color-white)'} /> */}
            </div>
        </section>
        <section className='xui-container xui-py-3 xui-lg-py-5'>
            <h1 className={'xui-font-sz-200 xui-lg-font-sz-300 xui-line-height-4-half xui xui-lg-w-fluid-70 ' + (!story && 'xui--skeleton')}>{story.title}</h1>
            <div className='xui-d-inline-flex xui-flex-ai-center xui-flex-jc-space-between xui-grid-gap-1'>
                <span className={'xui-font-w-700 xui-font-sz-85 dap-text-secondary xui-text-uppercase ' + (!story && 'xui--skeleton')}>{story.category.name}</span>
                <div className='xui-w-5 xui-h-5 xui-bg-black'></div>
                <span className={'xui-font-sz-75 xui-opacity-7 ' + (!story && 'xui--skeleton')}>{moment(story.createdAt).format('MMMM Do, YYYY')}</span>
            </div>
            <div className={'xui-my-2 xui-h-200 xui-lg-h-400 xui-w-fluid-100 xui-bg-lazy xui-bg-pos-center xui-bg-sz-cover ' + (!story && 'xui--skeleton')} xui-bg-img={story.image}></div>
            <div className={'dap-content-box xui-line-height-2 ' + (!story && 'xui--skeleton')} dangerouslySetInnerHTML={{ __html: story.details}}></div>
        </section>
        </>}
        </>
    );
};

export default StoryDetails;