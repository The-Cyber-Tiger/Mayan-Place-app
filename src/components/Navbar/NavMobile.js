import { useState } from 'react'
import { Link } from 'react-router-dom'
import './NavMobile.css'
import logoVertical from '../../assets/images/Logo-mobile.png'

function NavMobile(){

    const [menuActive, setMenuActive] = useState(false)

    const handleMenu = () => {
        setMenuActive(!menuActive)
    }

    const MenuOptions = () =>{
        return(
            <div className="menu-options">
                <Link  to='/contact'>Agents</Link>
                <Link  to='/contact'>Contact</Link>
                <Link  to='/contact'>Places</Link>
                <Link  to='/contact'>About Us</Link>
            </div>
        )
    }
    return ( 
        <nav className='navMobile'>
            <div className="mobile_logo">
                <img src={logoVertical} alt="logo"></img>
            </div>
            <div className='burguer_menu'>
                <button onClick={handleMenu}>
                <svg width="35" height="35" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.16193 35.179H41.9744M9.16193 14.8665H41.9744H9.16193ZM9.16193 25.0227H41.9744H9.16193Z" stroke="white" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round"/>
                </svg>
                </button>
            </div>
            {menuActive ? <MenuOptions/> : null }
        </nav>
     );
}
 
export default NavMobile;