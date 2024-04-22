import React, { useEffect, useState } from 'react';
import Story from '../components/Story';
import axios from 'axios';
import moment from 'moment';

const Stories = () => {
    const [ stories, setStories ] = useState(null);
    useEffect(() => {
        axios({
            method: "GET",
            url: "https://api.dejiadeyanjuandpartners.com/public/posts"
        })
        .then((res) => {
            setStories(res.data.data);
            window.xuiLazyLoadings();
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(() => {
        });
    }, []);
    return (
        <section className='xui-container xui-py-3 xui-lg-py-4'>
            <div className='xui-d-grid xui-grid-col-1 xui-lg-grid-col-3 xui-grid-gap-2'>
                {stories && stories.count > 0 && stories.rows.map((story, index) => (
                    <Story image={story.image} date={moment(story.createdAt).format('MMMM Do, YYYY')} category={story.category.name} heading={story.title} unique_id={story.unique_id} stripped={story.stripped} />
                ))}
            </div>
        </section>
    );
};

export default Stories;