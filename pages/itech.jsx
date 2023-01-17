import Image from 'next/image';
import React from 'react';
import itechWebGUI from '../public/assets/projects/black-gui2.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';
import { FaGithub, FaTwitter } from 'react-icons/fa';
import { IoIosArrowBack } from "react-icons/io";



const netflix = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={itechWebGUI}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Instrumentation Technologies </h2>
          <h3>Vue / Vuex / Javascript</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <h6 className='px-4'>Project</h6>
          <h2 className='p-4'>Base Framework for Web GUI</h2>
          <p className='p-4'>
          While working as a frontend developer at Instrumentation Technology's software development department, I successfully managed to 
          rewrite 80% of the existing frontend code base and built a frontend framework with extensive documentation.
          </p>          
          <p className='p-4'>
          Instrumentation Technology's core buisness is selling measurment devices for particle accelerators. 
          The Web GUIs built from the frontend framework served as the main user interface display for users interacting 
          with Instrumenation Techonology's measurment devices.
          </p>          
          <p className='p-4'>
          The frontend framework had to be designed to allow for ease of customizability and versitility, since each of Instrumentation Technology's devices 
          incorporates different functionalities and has different applications based on client's wishes. 
          </p>          
          <p className='p-4'>
          The aim of frontend framework was:
          </p>
          <ul className='px-4'>
            <li>- faster GUI creation</li>
            <li>- better code maintence</li>
            <li>- easier addition of new functionalities</li>
            <li>- ease of customizability for new GUIs</li>
            <li>- fast signal refresh time</li>
            <li>- quick incorporation of global access to states</li>
            <li>- refreshing only the basic of what was needed for the user</li>
          </ul>

          <p className='p-4'>
            I am proud to say that the frontend framework was successfully recieved and is in use today.
          </p>  
     
          <Image
            src={itechWebGUI}
            alt='/'
          />

        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-900 bg-gradient-to-tr from-[#1570d1] to-[#c116d8] rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid px-5 grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-200 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Vue
              </p>
              <p className='text-gray-200 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Vuex
              </p>
              <p className='text-gray-200 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Javascript
              </p>
              <p className='text-gray-200 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> CSS
              </p>
              <p className='text-gray-200 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> HTML
              </p>
            </div>
          </div>
        </div>
        <div className='flex m-auto '>
          <Link
              href='/#projects'
              className='px-4'
            >
            <div className='rounded-full bg-gradient-to-r from-[#21a8d5] to-[#214bd5] shadow-[0_5px_10px_-1px_rgba(0,0,0,0.75)] shadow-gray-900  p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
              <IoIosArrowBack />
            </div>
          </Link>
          <a
            href='https://www.linkedin.com/in/auroramakovac/'
            target='_blank'
            rel='noreferrer'
            className='px-4'
          >
            <div className='rounded-full bg-gradient-to-r from-[#214bd5] to-[#6921d5] shadow-[0_5px_10px_-1px_rgba(0,0,0,0.75)] shadow-gray-900  p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
              <FaGithub />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default netflix;
