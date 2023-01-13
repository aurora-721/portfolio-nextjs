import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className='uppercase text-sm tracking-widest text-gray-300'>
            LET&#39;S MANIFEST A BETTER REALITY
          </p>
          <h1 className='py-4 text-white'>
            Hi, I&#39;m <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#21a8d5] to-[#c116d8]'> Aurora</span>
          </h1>
          <h1 className='py-2 text-white'>A Frontend Developer</h1>

          <p className='py-4 text-gray-200 sm:max-w-[70%] m-auto'>
          The world around us as we see it today has been mostly constructed, modified by us. My belief is that if you don't like the current reality work to change it by creating a better one.
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <a
              href='https://www.linkedin.com/in/auroramakovac/'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full bg-gradient-to-r from-[#21a8d5] to-[#214bd5] shadow-[0_5px_10px_-1px_rgba(0,0,0,0.75)] shadow-gray-900  p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href='https://github.com/aurora-721'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full bg-gradient-to-r from-[#214bd5] to-[#6921d5] shadow-[0_5px_10px_-1px_rgba(0,0,0,0.75)] shadow-gray-900  p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaGithub />
              </div>
            </a>
            <a
              href='https://twitter.com/721_aurora/'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full bg-gradient-to-r from-[#6921d5] to-[#c116d8] shadow-[0_5px_10px_-1px_rgba(0,0,0,0.75)] shadow-gray-900  p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaTwitter />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
