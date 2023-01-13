import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/profile.png';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-2 gap-8'>
        <div className='col-span-1'>
          <p className='uppercase text-xl tracking-widest text-[#7471de]'>
            About
          </p>
          <h2 className='py-4'>My Inspiration</h2>

          <p className='py-2 text-gray-200'>
          Welcome to my personal portfolio page! 
          </p>
          <p className='py-2 text-gray-200'>
          My name is Aurora Makovac and I am a frontend developer. I am always looking for new challenges and opportunities to grow my skills, and I am excited to share my work with you. Thank you for visiting my portfolio, and please feel free to reach out to me if you have any questions or would like to collaborate on a project.          </p>
          <Link href='/#projects'>
            <p className='py-2 text-gray-200 underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className='w-full col-span-1 h-auto m-auto shadow-xl shadow-gray-900 rounded-xl flex items-center justify-center hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;
