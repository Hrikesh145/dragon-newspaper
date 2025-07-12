import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
const SocialLogin = () => {
    return (
        <div className='space-y-3'>
            <h2 className='font-bold '>Login with</h2>
            <button className='btn w-full btn-secondary btn-outline '><FcGoogle size={24} />Login with Google</button>
            <button className='btn w-full btn-primary btn-outline'><FaGithub size={24} />Login with Github</button>
        </div>
    );
};

export default SocialLogin;