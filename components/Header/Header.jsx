import React, { useState } from 'react'
import Link from 'next/link'
import SocialsBar from '../SocialsBar/SocialsBar'
import logo from '../../images/logo.webp'
import Image from 'next/image'
import { data } from '../../menuData'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'


const Header = () => {
  const [menuToggle, setMenuToggle] = useState(false)

  return (
    <>
      <SocialsBar />

      <nav className='nav'>
        <div className="container">
          <div className="nav-container">
            <Link href='/' className="logo-container">
              <a>
                <Image src={logo} />
              </a>

            </Link>

            <ul className="menu-list">
              {data.map((item) => (
                <li key={item.name}>
                  <Link href={item.path}>
                    <a>
                      {item.name}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="menu-icon" onClick={() => setMenuToggle(true)}>
              <HiOutlineMenuAlt3 />
            </div>
          </div>

        </div>



        <div className={menuToggle ? 'menu-mobile show' : 'close'}>
          <AiOutlineClose className='menu-close' onClick={() => setMenuToggle(false)} />
          <ul className="menu-mobile-list">
            {data.map((item) => (
              <li key={item.name} >
                <Link href={item.path} >
                  <a onClick={()=> setMenuToggle(false)}>
                    {item.name}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>

      </nav>
    </>

  )
}

export default Header