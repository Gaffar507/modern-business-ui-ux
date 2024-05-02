import React, { useState } from 'react'
import { close, logo, menu } from '../assets';
import { navLinks } from '../constants'

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className='w-full flex justify-between items-center py-6 navbar'>
      <img src={logo} alt="hoobank" className='w-[124px] h-[32px]:' />

      <ul className='list-none hidden sm:flex justify-end items-center flex-1'>
        {navLinks.map((nav, index)=>(
          <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px]
          ${index === navLinks.length - 1? 'mr-0' : 'mr-10'}
           text-white`}> <a href={`#${nav.id}`}>{nav.title}</a> </li>
        ))}
      </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img src={toggle? close: menu} alt="menu" 
          className='cursor-pointer w-[22px] has-[22px] object-contain'
          onClick={()=>setToggle((pre)=>!pre)}
          />
        
          <div className={`${!toggle?'hidden' : 'flex'} p-6 mx-4 my-2 min-w-[140px] bg-black-gradient rounded-xl absolute top-20 right-0 sidebar`} >
            <ul className='list-none flex flex-1 flex-col justify-end items-center'>
              {navLinks.map((nav, index)=>(
                <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px]
                ${index === navLinks.length - 1? 'mb-0' : 'mb-4'}
                text-white`}> <a href={`#${nav.id}`}>{nav.title}</a> </li>
                ))}
              </ul>
          </div>

        </div>

    </div>
  )
}

export default Navbar
