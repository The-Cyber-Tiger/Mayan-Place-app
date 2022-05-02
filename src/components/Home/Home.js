import { Link } from 'react-router-dom'
import './Home.css'
import triangle from '../../assets/images/new-triangle-big.png'
import NavDesktop from '../Navbar/NavDesktop';
import NavMobile from '../Navbar/NavMobile';
import {  isMobile } from 'react-device-detect';

function Home() {


    const renderNav = () =>{
       return isMobile ? <NavMobile/> : <NavDesktop/>
    }
    
    return ( 
    <div className="home">

        { renderNav() }
        
        <div className='hero'>
            <h1>Find a Place <br/> in Mexican Paradise</h1>
            <h5>Discover Real Estates that suits you in Tulum</h5>
        </div>
        <div className='get_started'>
                <Link to='/'><svg width="35" height="35" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.5 28.7188C22.3524 28.7188 28.7188 22.3524 28.7188 14.5C28.7188 6.64756 22.3524 0.28125 14.5 0.28125C6.64756 0.28125 0.28125 6.64756 0.28125 14.5C0.28125 22.3524 6.64756 28.7188 14.5 28.7188ZM8.25469 14.1821C8.35585 14.0801 8.47611 13.9991 8.60861 13.9436C8.74111 13.888 8.88324 13.8592 9.0269 13.8586C9.17055 13.858 9.31291 13.8858 9.44585 13.9402C9.57878 13.9947 9.69969 14.0748 9.80166 14.176L13.4062 17.7525V8.62109C13.4062 8.33101 13.5215 8.05281 13.7266 7.8477C13.9317 7.64258 14.2099 7.52734 14.5 7.52734C14.7901 7.52734 15.0683 7.64258 15.2734 7.8477C15.4785 8.05281 15.5938 8.33101 15.5938 8.62109V17.7525L19.1983 14.176C19.4045 13.9717 19.6833 13.8576 19.9736 13.8589C20.2638 13.8601 20.5417 13.9767 20.746 14.1828C20.9503 14.389 21.0644 14.6678 21.0631 14.9581C21.0618 15.2483 20.9453 15.5261 20.7392 15.7305L15.2704 21.1575C15.0655 21.3608 14.7886 21.4749 14.5 21.4749C14.2114 21.4749 13.9345 21.3608 13.7296 21.1575L8.26084 15.7305C8.15864 15.6293 8.0774 15.5089 8.02177 15.3763C7.96614 15.2437 7.93721 15.1014 7.93664 14.9576C7.93606 14.8138 7.96386 14.6712 8.01844 14.5382C8.07301 14.4051 8.15329 14.2841 8.25469 14.1821Z" fill="white"/>
                </svg>Get Started</Link>
        </div>
        <div className='new_triangle'>
                <img src={triangle} alt='triangle'></img>
        </div>
        
    </div> );
}

export default Home;