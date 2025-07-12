import React from 'react';
import classroom from '../../assets/class.png';
import ply from '../../assets/playground.png';
import swimming from '../../assets/swimming.png';
const Qzone = () => {
    return (
        <div>
            <h2 className='font-bold mb-5'>Q-Zone</h2>
            <div className='space-y-5'>
                <img src={swimming} alt="" />
                <img src={classroom} alt="" />
                <img src={ply} alt="" />
            </div>
        </div>
    );
};

export default Qzone;