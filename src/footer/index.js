import React from 'react';
import './footer.css';

function Footer(){
    return(
        <footer>
            <ul className='footer-left'>
                <li><a href=''> Publicidad</a></li>
                <li><a href=''> Negocios</a></li>
                <li><a href=''> A cerca de</a></li>
                <li><a href=''> Como funciono</a></li>
            </ul>

            <ul className='footer-right'>
                <li><a href=''> Privacidad</a></li>
                <li><a href=''> Condiciones</a></li>
                <li><a href=''> Preferencias</a></li>
            </ul>
        </footer>
    );
}

export {Footer};