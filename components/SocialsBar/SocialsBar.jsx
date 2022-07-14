import React from 'react'
import { TbMapPin } from 'react-icons/tb'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { GrFacebookOption } from 'react-icons/gr'
import { RiTwitterFill } from 'react-icons/ri'
import { AiFillYoutube, AiOutlineInstagram } from 'react-icons/ai'
import Link from 'next/link'

const SocialsBar = () => {
    return (
        <div className='socials-bar'>
            <div className="socials-container container">
                <div className="contact-container">

                    <div className="address-local">
                        <TbMapPin />
                        <span>
                            Barra da Tijuca, RJ, Brazil
                        </span>
                    </div>

                    <div className="contact-number">
                        <BsFillTelephoneFill />
                        <span>21 9 7031-9712</span>
                    </div>

                </div>

                <ul className='socials-list'>
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

                    <li>
                        <Link href='/'>
                            <a>
                                <AiOutlineInstagram />
                            </a>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default SocialsBar