import React from 'react';
import './header.styles.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/084 crown.svg'

const Header = () => {
    return (
        <div className='header'>
            <Link to='/' className='logo-container'>
                <Logo classname='logo' />
            </Link>
            <div className='options'>
                <Link classname='option' to='/shop'> 
                    SHOP 
                </Link>
                <Link classname='option' to='/contact'> 
                    CONTACT
                </Link>
                
            </div>
        </div>
    )
}

export default Header;