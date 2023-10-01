import React from 'react'
import { useNavigate } from 'react-router'

const Home = () => {
  const nvigate =  useNavigate()
  return (
   <>
   <div>
      home  page </div>
      <button  onClick={() => nvigate('order-summary') }  className='  btn btn-primary btn-sm'>order  place</button>
    </>
  )
}

export default Home
