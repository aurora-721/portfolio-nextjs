import Image from 'next/image';
import React from 'react';
import CssImg from '../public/assets/skills/css.png';
import Javascript from '../public/assets/skills/js.png';
import ReactImg from '../public/assets/skills/react.png';
import Vuejs from '../public/assets/skills/vue.png';
import Python from '../public/assets/skills/python.png';
import Postman from '../public/assets/skills/postman.png';
import NextJS from '../public/assets/skills/next.png';
import Cplusplus from '../public/assets/skills/c++.png';
import Figma from '../public/assets/skills/figma.png';
import SqlImg from '../public/assets/skills/sql.png';

const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
      <div className='max-w-[1080px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Skills
        </p>
        <h2 className='py-4'>What I Can Do</h2>
        <br />
        <div className='grid grid-cols-3 lg:grid-cols-5 gap-8'>
          <div className='m-auto'>
            <Image className='drop-shadow-xl hover:scale-105 ease-in duration-300' src={ReactImg} width='88px' height='130px' alt='/' />
          </div>
          <div className='m-auto'>
            <Image className='drop-shadow-xl hover:scale-105 ease-in duration-300' src={CssImg} width='88px' height='130px' alt='/' />
          </div>
          <div className='m-auto'>
            <Image className='drop-shadow-xl hover:scale-105 ease-in duration-300' src={Javascript} width='88px' height='130px' alt='/' />
          </div>
          <div className='m-auto'>
            <Image className='drop-shadow-xl hover:scale-105 ease-in duration-300' src={Vuejs} width='88px' height='130px' alt='/' />
          </div>
          <div className='m-auto'>
            <Image className='drop-shadow-xl hover:scale-105 ease-in duration-300' src={Python} width='88px' height='130px' alt='/' />
          </div>
          <div className='m-auto'>
            <Image className='drop-shadow-xl hover:scale-105 ease-in duration-300' src={Postman} width='88px' height='130px' alt='/' />
          </div>
          <div className='m-auto'>
            <Image className='drop-shadow-xl hover:scale-105 ease-in duration-300' src={Cplusplus} width='88px' height='130px' alt='/' />
          </div>
          <div className='m-auto'>
            <Image className='drop-shadow-xl hover:scale-105 ease-in duration-300' src={Figma} width='88px' height='130px' alt='/' />
          </div>
          <div className='m-auto'>
            <Image className='drop-shadow-xl hover:scale-105 ease-in duration-300' src={SqlImg} width='88px' height='130px' alt='/' />
          </div>
          <div className='m-auto'>
            <Image className='drop-shadow-xl hover:scale-105 ease-in duration-300' src={NextJS} width='88px' height='130px' alt='/' />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Skills;
