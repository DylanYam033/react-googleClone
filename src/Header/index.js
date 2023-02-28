import React from 'react';
import './header.css';

function Header() {
  return (
    <header>
        <nav className="nav-section">
            <ul className="nav-right-section">
                <li>
                    <a href="">Correo</a>
                </li>
                <li>
                    <a href="">Imágenes</a>
                </li>
                <li className="menu-icon">
                    <a href=""></a>
                </li>
                <li>
                    <a href="">
                        <img src="https://lh3.googleusercontent.com/ogw/AAEL6sgcC0R2qXJSyTQdGXsg6rLdhUSA2M_CyTm7_HI4=s32-c-mo" alt="" />
                    </a>
                </li>
            </ul>
        </nav>
    </header>
  );
}

export {Header};