import React from 'react'
import Image from 'next/image'

const StoryCard = ({ name, src, profile }) => {
  return (
    <div className='relative h-14 w-14 md:w-20 md:h-20 lg:h-56 lg:w-32 cursor-pointer overflow-x p-3 transition duration-200 transform ease-in hover:scale-105 hover:animate-pulse'>
        <Image
        className='absolute opacity-0 lg:opacity-100 rounded-full z-50 top-10'
        src={profile}
        width={40}
        height={40}
        layout="fixed"
        objecFit="cover"
        />
        <Image
        className='object-cover brightness-75 rounded-full md:rounded-3xl'
        src={src}
        layout="fill"
        />
    </div>
  )
}

export default StoryCard