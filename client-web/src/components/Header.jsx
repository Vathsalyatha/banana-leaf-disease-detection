import React from 'react'
import { CiMenuFries } from "react-icons/ci";

const Header = () => {
  return (
    <div className='w-full h-12 2xl:h-14 px-10 flex items-center justify-between '>
        <h1 className='text-xl font-bold text-green-900 mt-2'>Eco<span className='text-black'>Leaf</span></h1>
        <CiMenuFries size={25} className='lg:hidden' />
    </div>

  )
}

export default Header