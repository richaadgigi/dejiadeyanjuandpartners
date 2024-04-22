import axios from 'axios';
import moment from 'moment';
import React, { useEffect, useState } from 'react';

const StoryDetails = () => {
    const [ story, setStory ] = useState(null);
    useEffect(() => {
        axios({
            method: "GET",
            url: "https://api.dejiadeyanjuandpartners.com/public/post/stripped?stripped=something-happening-in-the-tech-industry-in-alias-with-the-law-firms-of-nigeria"
        })
        .then((res) => {
            setStory(res.data.data);
            window.xuiLazyLoadings();
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(() => {
        });
    }, []);
    return (
        <>
        {story && <section className='xui-container xui-py-3 xui-lg-py-5'>
            <h1 className='xui-font-sz-200 xui-lg-font-sz-300 xui-line-height-4-half xui xui-lg-w-fluid-70'>{story.title}</h1>
            <div className='xui-d-inline-flex xui-flex-ai-center xui-flex-jc-space-between xui-grid-gap-1'>
                <span className='xui-font-w-700 xui-font-sz-85 dap-text-secondary xui-text-uppercase'>{story.category.name}</span>
                <div className='xui-w-5 xui-h-5 xui-bg-black'></div>
                <span className='xui-font-sz-75 xui-opacity-7'>{moment(story.createdAt).format('MMMM Do, YYYY')}</span>
            </div>
            <img className='xui-my-2 xui-h-200 xui-lg-h-400 xui-w-fluid-100' src={story.image} alt="story image" />
            <div className='xui-line-height-2'>{story.details}</div>
        </section>}
        </>
    );
};

export default StoryDetails;