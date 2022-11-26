import React from 'react'
import { SearchIcon } from '@heroicons/react/outline'
import { DotsHorizontalIcon, VideoCameraIcon } from '@heroicons/react/solid'
import Contact from './Contact';
import Image from 'next/image';
import { BsCheckLg } from 'react-icons/bs'

/**contact list */

const contacts = [
    { src: "https://links.papareact.com/f0p", name: "Jeff Bezoz" },
    { src: "https://links.papareact.com/kxk", name: "Elon Musk" },
    { src: "https://links.papareact.com/zvy", name: "Bill Gates" },
    { src: "https://links.papareact.com/snf", name: "Mark Zuckerberg" },
    { src: "https://links.papareact.com/d0c", name: "Harry Potter" },
    { src: "https://links.papareact.com/6gg", name: "The Queen" },
    { src: "https://links.papareact.com/r57", name: "James Bond" },
  ];


const Widgets = () => {
  return (
    <div className='hidden lg:flex flex-col w-[370px] p-4 pt-5 bg-white'>
      <div className='flex justify-between items-center p-2 text-gray-500 mb-1'>

      <h2 className='text-xl text-black font-bold'>Events</h2>
        
        <DotsHorizontalIcon className='h-6 cursor-pointer'/>
      </div>

      {/**event pic */}

      <div className='transition duration-200 transform hover:scale-105'>
    
        <div className='absolute z-50 mt-1'>
          <div className='flex space-x-12 items-center'>
            <p className=' p-2 m-2 text-white text-lg font-bold cursor-pointer'>Turn Glow Festival 2022</p>
            <div className='p-2 bg-white rounded-lg h-10 w-8 cursor-pointer'>
            <BsCheckLg className='h-7 text-blue-600'/>
            </div>
          </div>
        </div>
        
        <Image
        className='rounded-md mb-10 cursor-pointer'
        src="/events.jpg"
        height={400}
        width={400}
        />
        
      </div>


        <div className='flex justify-between items-center p-2 text-gray-500 mb-5'>
            <h2 className='text-xl text-black font-bold'>Contacts</h2>
            <div className='flex space-x-2'>
               <VideoCameraIcon className='h-6'/>
               <SearchIcon className='h-6'/>
               <DotsHorizontalIcon className='h-6'/>
            </div>
        </div>
       <div className='mx-4 mt-2'>
       {contacts.map(contact => (
            <Contact
            key={contact.src}
            src={contact.src}
            name={contact.name}
            />
        ))}
       </div>
    </div>
  )
}

export default Widgets