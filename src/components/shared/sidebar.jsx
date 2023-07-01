import React from 'react';
import classNames from 'classnames';
import { FcComboChart } from "react-icons/fc";
import { HiOutlineLogout } from 'react-icons/hi'
import { DASHBOARD_SIDEBAR_LINKS, DASHBOARD_SIDEBAR_BOTTOM_LINKS } from '../../lib/constants/index.jsx';
import { Link, useLocation } from 'react-router-dom';

const linkClass =
	'flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base';

export default function Sidebar() {
  return (
    <div className='flex flex-col bg-neutral-600 w-60 p-3 text-white h-screen'>
        <div className='flex items-center gap-2 px-1 py-3'>
            <FcComboChart fontSize={24}/>
            <span className='text-neutral-100 text-large'>Open Shop</span>
        </div>

                {/* Middle part code start*/}
                
        <div className='flex-1 py-8 flex flex-col gap-0.5'>
            {DASHBOARD_SIDEBAR_LINKS.map((item) => (
                <SidebarLinks key={item.key} item={item} />

            )) }
        </div>

               {/* bottom part code start*/}

        <div className="flex flex-col gap-0.5 pt-2 border-t border-neutral-900">
            {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((item) => (
                <SidebarLinks key={item.key} item={item} />

            )) }

                   {/* Logout icon part */}

                <div className={classNames(linkClass, 'cursor-pointer text-red-500')}>
					<span className="text-xl">
						<HiOutlineLogout />
					</span>
					Logout
				</div>
        </div>
    </div>
  )
}

// sidebar links function

function SidebarLinks( {item}) {

    const { pathname } = useLocation();

      return(

        <Link to={item.path} 
              className={classNames(pathname === item.path ? 'bg-neutral-700 text-white' : 'text-neutral-400', linkClass)} >
             <span>{item.icon}</span>
              {item.label}
        </Link>

      )
}
