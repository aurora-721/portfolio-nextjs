import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
// import { useRouter } from 'next/router';
import NavLogo from '../public/assets/navLogo.png'

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState('#fff');
  const [linkColor, setLinkColor] = useState('#fff');
  // const [position, setPosition] = useState('fixed')
  // const router = useRouter();

  // useEffect(() => {
  //   if (
  //     router.asPath === '/property' ||
  //     router.asPath === '/crypto' ||
  //     router.asPath === '/netflix' ||
  //     router.asPath === '/twitch'
  //   ) {
  //     setNavBg('transparent');
  //     setLinkColor('#ecf0f3');
  //   } else {
  //     setNavBg('#ecf0f3');
  //     setLinkColor('#1f2937');
  //   }
  // }, [router]);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
  }, []);

  return (
    <div
      className={
        shadow
          ? 'fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300'
          : 'fixed w-full h-20 z-[100]'
      }
    >
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        <Link href='/'>
          <a>
            <Image
              src={NavLogo}
              alt='/'
              width='168'
              height='50'
              className='cursor-pointer drop-shadow-lg'
            />
          </a>
        </Link>
        <div>
          <ul style={{ color: `${linkColor}`, opacity: 1 }} className='hidden md:flex'>
            <li className='ml-10 text-sm bg-opacity-100 uppercase hover:border-b'>
              <Link href='/'>Home</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link href='https://docs-e0pdffuia-aurora-721.vercel.app/'>Timelog</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link href='/#skills'>Skills</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link href='/#projects'>Projects</Link>
            </li>
          </ul>
          {/* Hamburger Icon */}
          <div
            style={{ color: `${linkColor}`, opacity: 1 }}
            onClick={handleNav}
            className='md:hidden'
          >
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        className={
          nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''
        }
      >
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? ' fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#154d77] p-10 ease-in duration-500'
              : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
          }
        >
          <div>
            <div className='flex w-full items-center justify-between'>
              <Link href='/'>
                <a>
                  <Image
                    src={NavLogo}
                    width='114'
                    height='34'
                    alt='/'
                  />
                </a>
              </Link>
              <div
                onClick={handleNav}
                className='rounded-full bg-gradient-to-r from-[#2166d5] to-[#6921d5] shadow-lg shadow-gray-900 p-3 cursor-pointer'
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className='border-b border-gray-300 my-4'>
              <p className='w-[85%] md:w-[90%] py-4'>
                DEAREST EXPLORERS OF THE DIGITAL REALM
              </p>
            </div>
          </div>
          <div className='py-4 flex flex-col'>
            <ul className='uppercase'>
              <Link href='/'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Home
                </li>
              </Link>
              <a href='https://docs-e0pdffuia-aurora-721.vercel.app/'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Timelog
                </li>
              </a>
              <Link href='/#skills'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Skills
                </li>
              </Link>
              <Link href='/#projects'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Projects
                </li>
              </Link>
            </ul>
            <div className='pt-40'>
              <p className='uppercase tracking-widest text-[#aa51e5]'>
                Let&#39;s Connect
              </p>
              <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                <a
                  href='https://www.linkedin.com/in/auroramakovac/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full bg-gradient-to-r from-[#21a8d5] to-[#214bd5] shadow-lg shadow-gray-900 p-4 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <FaLinkedinIn />
                  </div>
                </a>
                <a
                  href='https://github.com/aurora-721'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full bg-gradient-to-r from-[#214bd5] to-[#6921d5] shadow-lg shadow-gray-900 p-4 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <FaGithub />
                  </div>
                </a>
                <a
                  href='https://twitter.com/721_aurora/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full bg-gradient-to-r from-[#6921d5] to-[#c116d8] shadow-lg shadow-gray-900 p-4 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <FaTwitter />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
