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
            
        })
        .finally(() => {
            window.xuiLazyLoadings();
        });
    }, [stories]);
    return (
        <section className='xui-container xui-py-3 xui-lg-py-4'>
            {stories && stories.count <= 0 && <div className='xui-my-2 xui-text-center'>
                <img className='xui-img-300 xui-mx-auto' src="https://img.freepik.com/free-vector/gradient-literature-illustration_52683-81905.jpg?t=st=1713753372~exp=1713756972~hmac=80601c6eef7900dcfbd62ac8cdae6fb7fb8793c08afe1285a3e96060b9b7a38b&w=740" alt="no story" />
                <h2 className='xui-font-w-normal xui-mt-1'>No story to read at the moment</h2>
            </div>}
            <div className='xui-d-grid xui-grid-col-1 xui-lg-grid-col-3 xui-grid-gap-2'>
                {!stories && <>
                    <Story image={'https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} date={'June 11th, 2023'} category={'Justice'} heading={'Y Combinator accepts Cowrywise into its summer 2018 batch'} skeleton />
                    <Story image={'https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} date={'June 11th, 2023'} category={'Justice'} heading={'Y Combinator accepts Cowrywise into its summer 2018 batch'} skeleton />
                    <Story image={'https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} date={'June 11th, 2023'} category={'Justice'} heading={'Y Combinator accepts Cowrywise into its summer 2018 batch'} skeleton />
                </>}
                {stories && stories.count > 0 && stories.rows.map((story, index) => (
                    <Story image={story.image} date={moment(story.createdAt).format('MMMM Do, YYYY')} category={story.category.name} heading={story.title} unique_id={story.unique_id} stripped={story.stripped} />
                ))}
            </div>
        </section>
    );
};

export default Stories;