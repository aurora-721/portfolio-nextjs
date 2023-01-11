import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import todovueImg from '../public/assets/projects/todovue.png';
import ggQuest from '../public/assets/projects/ggQuest.png'
import vuextodoImg from '../public/assets/projects/vuextodo.png';
import itechWebGUI from '../public/assets/projects/black-gui2.png';
import web3RSVP from '../public/assets/projects/web3RSVP.png'
import fetchpeople from '../public/assets/projects/fetchpeople.png'
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='I-Tech Web GUI'
            backgroundImg={itechWebGUI}
            projectUrl='/itech'
            tech='Vue Vuex JS'
          />
          <ProjectItem
            title='Vue To Do App'
            backgroundImg={todovueImg}
            projectUrl='https://task-tracker-vue-umber.vercel.app/'
            tech='Vue JS'
          />
          <ProjectItem
            title='Web 3 RSVP App'
            backgroundImg={web3RSVP}
            projectUrl='https://web3-rsvp-frontend-starter-gilt.vercel.app/'
            tech='React, JS, Solidity, The Graph, IPFS, Infura, Polygon, Lens'

          />

          <ProjectItem
            title='ggQuest'
            backgroundImg={ggQuest}
            projectUrl='https://stark-quest.vercel.app/'
            tech='Vue JS'
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
