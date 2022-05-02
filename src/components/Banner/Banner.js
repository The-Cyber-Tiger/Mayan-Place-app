import { Link } from "react-router-dom"

import './Banner.css'

import imgStats from '../../assets/images/number-stats.png'
function Banner() {

    return ( 
        <div className="banner">
            
                <div className='b_testimonial'>
                    <h4>"Best Agency in the Zone"</h4>
                    <p>-Brian Simons</p>
                </div>
                <div className='b_info'>
                    <img src={imgStats} alt='stats ' />
                </div>
                <div className='b_contact'>
                    <h3>We have a place for you</h3>
                    <Link to={'/contact'}>
                    <button>Contact</button>
                    </Link>
                
                </div>
            
        </div>
     );
}

export default Banner;