import React, { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import FetchStories from '../components/FetchStories';

const Stories = (props) => {
    return (
        <section className='xui-container xui-py-3 xui-lg-py-4'>
            <FetchStories />
        </section>
    );
};

export default Stories;