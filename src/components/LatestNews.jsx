import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex items-center gap-3 my-5 px-5 py-3 bg-base-200'>
            <p className='bg-secondary text-base-100 px-5 py-3'>Latest</p>
            <Marquee className='flex gap-5'>
                <p className='font-semibold'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores beatae magni adipisci odio doloremque alias.</p>
                <p className='font-semibold'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores beatae magni adipisci odio doloremque alias.</p>
                <p className='font-semibold'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores beatae magni adipisci odio doloremque alias.</p>
            </Marquee>
        </div>
    );
};

export default LatestNews;