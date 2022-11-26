import React from 'react'
import StoryCard from './StoryCard';
import Image from 'next/image';

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

const Stories = ({ session }) => {
  return (
    <div className='flex justify-center py-5 md:py-0 space-x-3 mx-auto pl-20 xl:pl-0 overflow-y-hidden overflow-x-auto md:overflow-visible'>
      <div className='relative h-14 w-14 md:w-20 md:h-20 lg:h-56 lg:w-32 cursor-pointer overflow-x p-3 transition duration-200 transform ease-in hover:scale-105 hover:animate-pulse'>
      <Image
        className='absolute opacity-0 lg:opacity-100 rounded-full z-50 top-4 circle-img md:border-2 p-0.5 md:border-separate md:border-spacing-1 ' 
        src={session.user.image}
        width={40}
        height={40}
        layout="fixed"
        objecFit="cover"
        />
        <Image
        className='object-cover brightness-75 rounded-full md:rounded-md'
        src="/default-story.jpg"
        layout="fill"
        />
        <p className='hiden md:absolute bottom-2 text-white flex text-sm'>{session.user.name}</p>
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