import React from 'react'
import { useSession } from 'next-auth/react'
import { 
    ChevronDownIcon,
    ShoppingBagIcon,
} from '@heroicons/react/outline'
import { 
    ClockIcon,
    DesktopComputerIcon,
    UsersIcon,
} from '@heroicons/react/solid'
import SideBarIcon from './SideBarIcon'
import Viwed from './Viwed'

const SideBar = () => {
  
    const { data: session, loading } = useSession();

  return (
    <div className='xl:inline'>
    <div className='p-5 pt-7 max-w-[100px] xl:min-w-[370px] lg:bg-white xl:h-[45%] rounded-b-md'>
        <SideBarIcon src={session.user.image} title={session.user.name}/>
        
        <SideBarIcon Icon={UsersIcon} title="Friends" />
        <SideBarIcon Icon={ShoppingBagIcon} title="Marketplace" />
        <SideBarIcon Icon={DesktopComputerIcon} title="watch" />
        <SideBarIcon Icon={ClockIcon} title="Memories" />
        <SideBarIcon Icon={ChevronDownIcon} title="See More" />
    </div>

    <div className='hidden xl:block p-5 pt-7 max-w-[600px] xl:min-w-[370px] lg:bg-white mt-4 xl:h-[50%] rounded-md'>
      <Viwed/>
    </div>
    </div>
  )
}

export default SideBar