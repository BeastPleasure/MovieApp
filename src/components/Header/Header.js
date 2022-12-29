import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import Logo from '../../Assets/ImdbLogo.png';
import ProfilePic from '../../Assets/ProfilePic.png'

const Header = () => {
  return (
    <div className='header'>

        <div className='headerLeft'>

            <Link to='/'>
                 
                 <img className='header__icon' src={Logo} alt=''/>      
            
            </Link>

            <Link to='/movies/popular'>
                 
                 Popular     
            
            </Link>

            <Link to='/movies/top_rated'>
                 
                 Top Rated
            
            </Link>

            <Link to='/movies/upcoming'>
                 
                 Upcoming
            
            </Link>

        </div>


        <div className='headerRight'>

          <img className='profilePic' src={ProfilePic} alt=''/>  

        </div>

    </div>
  );
};

export default Header;