import React from 'react';
// import { Link } from 'react-router-dom';
import DashboardStatsGrid from './shared/DashboardStatsGrid.jsx';
import  TransactionChart  from './shared/TransactionChart.jsx';
import BuyerProfilePieChart from './shared/BuyerProfilePieChart.jsx';
import RecentOrders from './shared/RecentOrders.jsx';
import PopularProducts from './shared/PopularProducts.jsx';


export const Dashboard = () => {
  return (
    <div className='flex flex-col gap-4'> 
        <DashboardStatsGrid />
        <div className="flex flex-row gap-4 w-full">
				    <TransactionChart />
				    <BuyerProfilePieChart />
			  </div>

        <div className="flex flex-row gap-4 w-full">
          <RecentOrders />
          <PopularProducts />

        </div>

    </div>
  )
}
