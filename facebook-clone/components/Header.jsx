import Image from 'next/image'
import React from 'react'
import {
    BellIcon,
    ChatIcon,
    ChevronDownIcon,
    HomeIcon,
    ViewGridIcon,
} from "@heroicons/react/solid";

import {
    FlagIcon,
    PlayIcon,
    SearchIcon,
    UserGroupIcon,
    ShoppingCartIcon,
} from "@heroicons/react/outline";
import HeaderIcon from './HeaderIcon';




/**imports from nextauth */
import { useSession, signOut } from 'next-auth/react';


const Header = () => {

   const { data: session } = useSession();


  return (
    <div className='sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 lg:pt-7'>

        {/**left */}
         <div 
         className='flex items-center'
         >
            <Image
            src="https://links.papareact.com/5me"
            width={40}
            height={40}
            layout="fixed"
            />
    
         <div
          className='flex ml-4 items-center p-2 text-xl'
          >
            <SearchIcon
             className='h-6 text-gray-400'
              />
            <input
             className='hidden md:inline-flex ml-3 bg-transparent items-center outline-none placeholder-gray-400 flex-shrink'
              type="text"
              placeholder='Search . . .'
              />
         </div>
         </div> 
        {/**center */}
         <div className='flex justify-center flex-grow'>
            <div className='flex space-x-6 md:space-x-2'>
                <HeaderIcon active Icon={HomeIcon} />
                <HeaderIcon Icon={FlagIcon}/>
                <HeaderIcon Icon={PlayIcon}/>
                <HeaderIcon Icon={ShoppingCartIcon} />
                <HeaderIcon Icon={UserGroupIcon} />
            </div>
         </div>
        {/**right */}
        <div className='flex items-center sm:space-x-2 justify-end'>
          
            <ViewGridIcon className='icon'/>
            <ChatIcon className='icon'/>
            <BellIcon className='icon'/>

            {/**profile pic */}
       <div className='flex items-center border-l p-2'>
       <Image
            onClick={() => signOut()}
            src={session.user.image}
            height="40"
            width="40"
            className="rounded-full cursor-pointer mx-2"
            layout="fixed"
            
            />

            <p className='hidden lg:block whitespace-nowrap font-semibold pr-3'>{session.user.name}</p>
       </div>

            <ChevronDownIcon className='icon'/>
        </div>
    </div>
  )
}

export default Header