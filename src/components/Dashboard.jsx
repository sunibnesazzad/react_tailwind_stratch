import React from 'react'
import { Link } from 'react-router-dom'

export const Dashboard = () => {
  return (
    <div> 
        <p>This is Dashboard</p>
        <Link to="/products" className='underline'>Go to Product Page</Link>
    </div>
  )
}
