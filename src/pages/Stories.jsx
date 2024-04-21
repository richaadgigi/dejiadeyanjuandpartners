import React, { useEffect } from 'react';
import Story from '../components/Story';

const Stories = () => {
    useEffect(() => {
        window.xuiLazyLoadings();
    }, []);
    return (
        <section className='xui-container xui-py-3 xui-lg-py-4'>
            <div className='xui-d-grid xui-grid-col-1 xui-lg-grid-col-3 xui-grid-gap-2'>
                <Story image={'https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} date={'June 11th, 2023'} category={'Justice'} heading={'Y Combinator accepts Cowrywise into its summer 2018 batch'} />
                <Story image={'https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} date={'June 11th, 2023'} category={'Justice'} heading={'Y Combinator accepts Cowrywise into its summer 2018 batch'} />
            </div>
        </section>
    );
};

export default Stories;