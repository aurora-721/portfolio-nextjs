import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/profile.png';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-2 gap-8'>
        <div className='col-span-1'>
          <h2 className='py-4'>Greetings, space travelers!</h2>

          <p className='py-2 text-gray-200'>
          Welcome to my website, a corner of the digital galaxy.
          </p>

          <p className='py-2 text-gray-200'>
          As a humble frontend developer, I would like to extend an invitation to you, dear space travelers, to delve deeper into the inner workings of my craft. You have the option to either view my timelog, where you will find a detailed look at my work, or continue scrolling downward, where you shall encounter a selection of my most prized projects, handpicked for your viewing pleasure.
          </p>
          <p className='py-2 text-gray-200'>
          Whichever path you choose, I assure you that you shall find a wealth of information and inspiration. So, choose wisely, my friends, and let us journey together into the ever-evolving realm of web development.
          </p>
          <p className='py-2 text-gray-200'>
          Thank you for visiting my portfolio, and please feel free to reach out to me if you have any questions or would like to collaborate on a project.
          </p>
          <a href='https://docs-e0pdffuia-aurora-721.vercel.app/'>
            <div className='rounded-full m-9 text-center bg-gradient-to-r font-bold from-[#0c640c] to-[#21d57b] hover:from-[#0c4c13] hover:to-[#309c56] shadow-[0_5px_10px_-1px_rgba(0,0,0,0.75)] shadow-gray-900  px-2 py-6 cursor-pointer hover:scale-105 ease-in duration-300'>
              TIMELOG
            </div>
          </a>
        </div>
        <div className='w-full col-span-1 h-auto m-auto shadow-xl shadow-gray-900 rounded-xl flex items-center justify-center hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;
