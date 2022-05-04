import React from 'react';
import './Footer.css';
import FindInPageIcon from '@mui/icons-material/FindInPage';
import FindInPage from '@mui/icons-material/FindInPage';

function Footer() {
    return (
        <div className='Footer'>
            <div className='Footer-content'>
                <div className='Footer-content-left'>
                    <title>Restaurant</title>
                    <p>Acesse aqui o <a href="">Manual dos Melhores Lugares</a><FindInPage/></p>
                    <p>Siga o nosso conteúdo no <a>Instagram!</a></p>
                    <p>Conheça as novidades na <a>Home</a></p>
                </div>
                <div className='Footer-content-right'>
                    <p>Para um restaurante sem <b>FILAS</b></p>
                    <div className='Footer-content-right-button'><a href="">Assine já</a></div>
                </div>
            </div>
            <div className='Footer-content-bottom'>
                <p>Copyright © 2022 Melhores Lugares - All Rights Reserved.</p>
            </div>
        </div>
    );
}

export default Footer;