import React from 'react'
import StoryCard from './StoryCard';

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
    <div className='flex justify-center space-x-3 mx-auto'>
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