import React from 'react'
import { useSelector } from 'react-redux'

function Nav() {
    const favouritesList = useSelector((state)=>state.favourite)
  return (
    <div className='bg-secondary shadow-lg position-fixed w-100 top-0 text-end z-3'>
      <p className='px-5 pt-2 fw-bold fs-5'>Favourites : {favouritesList.length}</p>
    </div>
  )
}

export default Nav
