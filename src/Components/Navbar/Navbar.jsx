import React, { useEffect, useState } from 'react'
import logo from '../../assets/logo.png'
import '../Navbar/Navbar.css'
import { Link } from 'react-scroll';
import HamburgerMenu from './HamburgerMenu';

export const Navbar = () => {

    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        const heandleScroll = () => {
            setSticky(window.scrollY > 200)
        }

        window.addEventListener('scroll', heandleScroll);

        return () => {
            window.removeEventListener('scroll', heandleScroll);
        }
    }, []);

    const [mobileMenu, setMobileMenu] = useState(true);
    const heandleClick = () => {
        mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
    }


    return (
        <div>
            <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
                <div className='logo-holder'>
                    <img src={logo} alt="" />
                </div>

                <div className='links-holder'>
                    <ul className={mobileMenu ? 'closed-nav' : ''}>
                        <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
                        <li><Link to='program' smooth={true} offset={-260} duration={500}>Program</Link></li>
                        <li><Link to='about' smooth={true} offset={-260} duration={500}>About us</Link></li>
                        <li><Link to='campus' smooth={true} offset={-260} duration={500}>Campus</Link></li>
                        <li><Link to='carusel' smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
                        <li><Link to='contacts' smooth={true} offset={0} duration={500} className='btn'>Contact Us</Link></li>
                    </ul>
                </div>
                <HamburgerMenu className={'hamburger-menu'} onClick={heandleClick}/>

            </nav>
        </div>
    )
}


