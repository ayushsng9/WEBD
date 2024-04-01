import { useState,useEffect } from 'react';
import './Navbar.css'
import logo from './assets/logo.png'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import menu_icon from './assets/menu-icon.png'


export default function Navbar()
{   
    const [sticky,setSticky]  = useState(false);
    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            window.scrollY > 50? setSticky(true):setSticky(false)
        })
    },[])

    const[mobileMenu,setMobileMenu] = useState(false);

    function toggleMenu()
    {
        mobileMenu? setMobileMenu(false) : setMobileMenu(true)
    }

    return(
        <nav className= {`container ${sticky?'dark-nav':null}`}>
            <img src={logo} alt="" className='logo' />
            <ul className={mobileMenu?'':'hide-mobile-menu'}>
                <li><Link to='Body' smooth={true} duration={500} offset={0}>Home</Link></li>
                <li><Link to='Programs' smooth={true} duration={500} offset={-270}>Program</Link></li>
                <li><Link to='About' smooth={true} duration={500} offset={-100}>About Us</Link></li>
                <li><Link to='Campus' smooth={true} duration={500} offset={-240}>Campus</Link></li>
                <li><Link to='Testimonials' smooth={true} duration={500} offset={-280}>Testimonials</Link></li>
                <li>
                <Link to='Contact' smooth={true} duration={500} offset={-240}><a href="" style={{fontSize:"16px"}}>Contact us</a></Link>
                </li>
            </ul>
            <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu} />
        </nav>
    );
}