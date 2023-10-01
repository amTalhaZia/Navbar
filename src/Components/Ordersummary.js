import React from 'react'
import { useNavigate } from 'react-router'

const Ordersummary = () => {
    const nvigate = useNavigate()
  return (
    <>
    <div> Order is placed </div>
    <button onClick={() => nvigate(-1)} className='  m-2 btn btn-primary btn-sm'> back </button>
    </>
  )
}

export default Ordersummary
