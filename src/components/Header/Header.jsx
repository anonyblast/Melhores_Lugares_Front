import React from 'react';
import './Header.css';
import LoginModal from '../LoginModal/LoginModal' ;

function Header() {
    return (
        <div className='Header'>
            <div className='Logo'>
                <img className='ML' src='images/Logo.png' alt=''/>
            </div>
            <div className='GetStarted'>
                <LoginModal/>
            </div>
        </div>
    );
}

export default Header;