import React from 'react';
import { BsFillPeopleFill } from "react-icons/bs";
import './Header.css';
import Login_Modal from '../Login_Modal/Login_Modal';


function Header() {
    return (
        <div className='Header'>
            <div className='Logo'>
                <img className='ML' src='images/Logo.png'/>
                <img className='Outback' src='images/Outback-logo.png'/>
            </div>
            <div className='GetStarted'>
                <Login_Modal />
            </div>
        </div>
    );
}

export default Header;