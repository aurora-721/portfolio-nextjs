import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import todovueImg from '../public/assets/projects/todovue.png';
import ggQuest from '../public/assets/projects/ggQuest.png'
import mediumApp from '../public/assets/projects/medium.png'
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
            ifCode= {false}
            codeUrl='https://github.com/'
            tech='Vue Vuex JS'
            buttonTitle='Project Description'
          />
          <ProjectItem
            title='Medium App'
            backgroundImg={mediumApp}
            projectUrl='https://medium-app-rho.vercel.app/'
            codeUrl='https://github.com/aurora-721/medium_app'
            ifCode= {true}
            tech='Next JS Sanity'
            buttonTitle='ViewApp'
          />
          <ProjectItem
            title='Vue To Do App'
            backgroundImg={todovueImg}
            projectUrl='https://task-tracker-vue-umber.vercel.app/'
            codeUrl='https://github.com/aurora-721/task_tracker_vue'
            ifCode= {true}
            tech='Vue JS'
            buttonTitle='View App'
          />
          <ProjectItem
            title='Web 3 RSVP App'
            backgroundImg={web3RSVP}
            projectUrl='https://web3-rsvp-frontend-starter-gilt.vercel.app/'
            codeUrl='https://github.com/aurora-721/web3rsvp'
            ifCode= {true}
            tech='React, JS, Solidity, The Graph, IPFS, Infura, Polygon, Lens'
            buttonTitle='View App'
          />
          <ProjectItem
            title='ggQuest'
            backgroundImg={ggQuest}
            projectUrl='https://stark-quest.vercel.app/'
            codeUrl='https://github.com/aurora-721/ggQuest'
            ifCode= {true}
            tech='Vue JS Cairo'
            buttonTitle='View App'
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
