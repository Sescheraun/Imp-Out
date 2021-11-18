import React from 'react';
import {Link} from 'react-router-dom'
//import { ReactComponent as ImperialLogo } from '../../assets/Emblem_of_the_First_Galactic_Empire.svg'
 
import './header.styles.scss';

const Header = () => (

    <div className = 'header'>
        <Link className='logo-container' to='/' >
            
        </Link>

        <div className = 'options'>
            <Link className = 'option' to='/shop'>SHOP</Link>
            <Link className = 'option' to= '/shop'>CONTACT</Link>
        </div>
    </div>

)

export default Header;