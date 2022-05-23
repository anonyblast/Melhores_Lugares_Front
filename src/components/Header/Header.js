import React from 'react';
import GroupsIcon from '@mui/icons-material/Groups';
import './Header.css';
import Popup from '../../components/Popup/LoginPopup';
import { useState } from 'react';

function Header() {
    const [buttonPopup, setButtonPopup] = useState(false);

    return (
        <div className='Header'>
            <div className='Logo'>
                <img className='ML' src='images/Logo.png'/>
                <img className='Outback' src='images/Outback-logo.png'/>
            </div>
            <button className='GetStarted' onClick={() => setButtonPopup(true)}>
                <p>Entrar na <b>FILA!</b></p>
                <GroupsIcon fontSize='small'/>
            </button>

            {buttonPopup && <Popup props={setButtonPopup}/>}
                
        </div>
    );
}

function entrarFila(){
    console.log("teste")
}

export default Header;