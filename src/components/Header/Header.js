import React from 'react';
import GroupsIcon from '@mui/icons-material/Groups';
import './Header.css';

function Header() {
    return (
        <div className='Header'>
            <div className='Logo'>
                <img className='ML' src='images/Logo.png'/>
                <img className='Outback' src='images/Outback-logo.png'/>
            </div>
            <div className='GetStarted'>
                <p>Entrar na <b>FILA!</b></p>
                <GroupsIcon fontSize='small'/>
            </div>
        </div>
    );
}

export default Header;