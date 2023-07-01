import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './sidebar.jsx';

export default function Layout() {
  return (
    <div className='flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden'>
      <div>
        <Sidebar/>
      </div>
      <div className='p-4'>
       <div className='bg-teal-200'>Header</div>
       <div>{<Outlet />}</div>
      </div>
    </div>
  )
}
