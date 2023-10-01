import React from 'react'
import { Link, Outlet} from 'react-router-dom'

const product = () => {
  return (
     <>
    <div  >
      <input  type="search" className='border-2 border-black rounded' placeholder='search product' />   
    </div>
    <nav>
      <Link  to='featured'> Featured </Link>
      <Link  to= 'new'> new </Link>
    </nav>
    <Outlet/>
    </>
  )
}

export default product
