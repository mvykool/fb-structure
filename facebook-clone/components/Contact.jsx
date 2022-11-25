import React from 'react'
import Image from 'next/image'

const Contact = ({ src, name}) => {
  return (
    <div className='flex items-center space-x-3 mb-2 relative hover:bg-gray-200 cursor-pointer p-2 rounded-xl'>
        <Image
        className='circle-img'
        objectFit="cover"
        src={src}
        name={name}
        height={50}
        width={50}
        layout="fixed"
        />
        <p>{name}</p>
        <div className='absolute bottom-2 left-7 bg-green-500 h-3 w-3 rounded-full'/>
    </div>
  )
}

export default Contact