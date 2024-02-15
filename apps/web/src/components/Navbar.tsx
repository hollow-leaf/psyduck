import React, { useState } from 'react'
import { close, logo, menu } from '../assets'
import { navLinks } from '../constants'
import { navLinksTypes } from 'src/models/type/ui.type'
import { useNavigate } from 'react-router-dom'

export default function Navbar() {

  const [active, setActive] = useState<string>('Home')
  const [toggle, setToggle] = useState<boolean>(false)
  const navigate = useNavigate();

  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>
      <img src={logo} alt='Psyduck' className='w-[248px] h-[64px]' />

      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav: navLinksTypes, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${active === nav.title ? 'text-white' : 'text-dimWhite'
              } ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`}
              onClick={() => {
                if (index === 1) {
                  window.open('https://github.com/hollow-leaf/psyduck', '_blank');
                } else if (index === 2) {
                  navigate("/launch");
                } else {
                  setActive(nav.title);
                }
              }}
          >
            <a href={index === 0 ? `#${nav.id}` : undefined}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <img
          src={toggle ? close : menu}
          alt='menu'
          className='w-[28px] h-[28px] object-contain'
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${!toggle ? 'hidden' : 'flex'
            } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className='list-none flex justify-end items-start flex-1 flex-col'>
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? 'text-white' : 'text-dimWhite'
                  } ${index === navLinks.length - 1 ? 'mb-0' : 'mb-4'}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}
