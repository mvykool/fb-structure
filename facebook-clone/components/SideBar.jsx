import React from 'react'
import { useSession } from 'next-auth/react'
import { 
    ChevronDownIcon,
    ShoppingBagIcon,
    UserGroupIcon,
} from '@heroicons/react/outline'
import { 
    CalendarIcon,
    ClockIcon,
    DesktopComputerIcon,
    UsersIcon,
} from '@heroicons/react/solid'
import SideBarIcon from './SideBarIcon'

const SideBar = () => {
  
    const { data: session, loading } = useSession();

  return (
    <div className='p-2 mt-5 max-w-[600px] xl:min-w-[300px]'>
        <SideBarIcon src={session.user.image} title={session.user.name}/>
        
        <SideBarIcon Icon={UsersIcon} title="Friends" />
        <SideBarIcon Icon={UserGroupIcon} title="Groups" />
        <SideBarIcon Icon={ShoppingBagIcon} title="Marketplace" />
        <SideBarIcon Icon={DesktopComputerIcon} title="watch" />
        <SideBarIcon Icon={CalendarIcon} title="Events" />
        <SideBarIcon Icon={ClockIcon} title="Memories" />
        <SideBarIcon Icon={ChevronDownIcon} title="See More" />
    </div>
  )
}

export default SideBar