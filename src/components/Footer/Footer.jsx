import React from 'react';
import './Footer.css';
import { FaInstagram, FaHome } from "react-icons/fa";

function Footer() {
    return (
        <div className='Footer'>
            <div className='Footer-content'>
                <div className='Footer-content-left'>
                    <p><a><FaInstagram /> Siga o nosso conteúdo no Instagram!</a></p>
                    <p><a><FaHome /> Conheça as novidades na Home</a></p>
                </div>
                <div className='Footer-content-right'>
                    <p>Para um restaurante sem <b>FILAS</b></p>
                    <div className='Footer-content-right-button'>Assine já</div>
                </div>
            </div>
            <div className='Footer-content-bottom'>
                <p>Copyright © 2022 Melhores Lugares - All Rights Reserved.</p>
            </div>
        </div>
    );
}

export default Footer;