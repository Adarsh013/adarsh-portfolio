import React from 'react';
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';


const HeaderSocials = () => {
    return (
        <div className='home__socials'>
            <a
                href='https://github.com/Adarsh013'
                className='home__social-link'
                target='_blank'
                rel='noreferrer'
            >
                <FaGithub />
            </a>

            <a
                href='https://www.linkedin.com/in/adarsh-gupta0/'
                className='home__social-link'
                target='_blank'
                rel='noreferrer'
            >
                <FaLinkedinIn />
            </a>

            <a
                href='https://x.com/AdarshG79142992'
                className='home__social-link'
                target='_blank'
                rel='noreferrer'
            >
                <FaTwitter />
            </a>

            <a
                href='https://leetcode.com/u/adarsh_020/'
                className='home__social-link'
                target='_blank'
                rel='noreferrer'
            >
                <SiLeetcode />
            </a>
        </div>
    );
};

export default HeaderSocials;