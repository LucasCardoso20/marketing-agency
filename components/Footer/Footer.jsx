import React from 'react'
import { urlFor } from '../../client/client'
import Link from 'next/link'
import logo from '../../images/logo.webp'
import Image from 'next/image'
import footerImg from '../../images/footer_bg.webp'
import { menuFirstColumn, menuSecondColumn } from '../../menuData'
import { GrFacebookOption } from 'react-icons/gr'
import { RiTwitterFill } from 'react-icons/ri'
import { AiFillYoutube } from 'react-icons/ai'

const Footer = ({ footer }) => {
  return (
    <footer id='footer' className='footer'>
      <div className="footer-container">
        <div className="logo-container">
          <Image src={logo} alt='logo' />
          <h5 className='subtitle-span'>Professional Search Engines Optimization</h5>
        </div>

        <div className="menu-footer">
          <ul className="menu-first-column">
            {menuFirstColumn.map((item) => <Link href={''} key={item.name}><li key={item.name}>{item.name}</li></Link>)}
          </ul>

          <ul>
            {menuSecondColumn.map((item) => <Link href={''} key={item.name}><li key={item.name}>{item.name}</li></Link>)}
          </ul>

        </div>

        <div className="footer-news-letter">
          <h4 className='title-h4'>
            Newsletter
          </h4>

          <div className="container-input">
            <input type="email" placeholder='Enter your e-mail' />
            <button className='btn btn-second-color'>Subscribe</button>
          </div>

        </div>
      </div>

      <div className="footer-directs container">
        <p>
          © 2022 All rights reserved by <span className='subtitle-white'>Lucas Cardoso</span>
        </p>

        <ul className='footer-socials-list'>
          <li>
            <Link href='/'>
              <a>
                <GrFacebookOption />
              </a>

            </Link>
          </li>

          <li>
            <Link href='/'>
              <a>
                <RiTwitterFill />
              </a>
              
            </Link>

          </li>

          <li>
            <Link href='/'>
              <a>
                <AiFillYoutube />
              </a>
              
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer