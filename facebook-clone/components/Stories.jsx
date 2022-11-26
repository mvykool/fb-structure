import React from 'react'
import StoryCard from './StoryCard';
import Image from 'next/image';
import { PlusIcon } from '@heroicons/react/outline';

const stories = [
    {
        name: "Sonny Sangha",
        src: "https://links.papareact.com/zof",
        profile: "https://links.papareact.com/l4v",
    },
    {
        name: "elon musk",
        src: "https://links.papareact.com/4zn",
        profile:"https://links.papareact.com/kxk",
    },
    {
        name: "jeff bezoz",
        src: "https://links.papareact.com/k2j",
        profile: "https://links.papareact.com/f0p",
    },
    {
        name: "mark zuckerberg",
        src: "https://links.papareact.com/xql",
        profile: "https://links.papareact.com/snf",
    },
    {
        name: "bill gates",
        src: "https://links.papareact.com/4u4",
        profile: "https://links.papareact.com/zvy",
    },
];

const Stories = () => {
  return (
    <div className='flex justify-center py-5 md:py-0 space-x-3 pl-20 xl:pl-0 overflow-y-hidden overflow-x-auto md:overflow-visible scrollbar-hide'>
      <div className='relative xl:flex xl:justify-center h-14 w-14 md:w-20 md:h-20 lg:h-56 lg:w-36 cursor-pointer overflow-x p-3 transition duration-200 transform ease-in hover:scale-105 hover:animate-pulse'>
      <div
        className='absolute flex justify-center items-center bg-white opacity-100 rounded-full z-50 xl:bottom-10  circle-img border-2 p-1 border-blue-600 border-separate md:border-spacing-1 ' 
        >
          <PlusIcon className='object-cover  rounded-full w-5 h-5 text-blue-600 '/>
        </div>
        <Image
        className='object-cover brightness-75 rounded-full md:rounded-md'
        src="/default-story.jpg"
        layout="fill"
        />
        <p className='opacity-0 lg:opacity-100  md:absolute bottom-2 text-white flex text-sm'>add story</p>
    </div>
      {stories.map( story => (
        <StoryCard 
        key={story.src}
         name={story.name} 
         src={story.src}
          profile={story.profile} />
      ))}
    </div>
  )
}

export default Stories