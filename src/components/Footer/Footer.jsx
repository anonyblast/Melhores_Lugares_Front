import React from 'react';
import './Footer.css';
import { FaBookOpen, FaInstagram, FaHome } from "react-icons/fa";

function Footer() {
    return (
        <div className='Footer'>
            <div className='Footer-content'>
                <div className='Footer-content-left'>
                    <title>Restaurant</title>
                    <p><FaBookOpen /> Acesse aqui o <a>Manual dos Melhores Lugares</a></p>
                    <p><FaInstagram /> Siga o nosso conteúdo no <a>Instagram!</a></p>
                    <p><FaHome /> Conheça as novidades na Home</p>
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