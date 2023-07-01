import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './sidebar.jsx';
import Header from './header.jsx';

export default function Layout() {
  return (
    <div className="bg-neutral-100 h-screen w-screen overflow-hidden flex flex-row">
      <div>
        <Sidebar/>
      </div>
              {/* Nav bar code */}

        <div className="flex flex-col flex-1">

				<Header />

				<div className="flex-1 p-4 min-h-0 overflow-auto">
					<Outlet />
          
				</div>
			</div>

    </div>
  )
}
