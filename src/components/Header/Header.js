import React, { useState, useEffect } from 'react';

//CSS
import '../../styles/Header/Header.css';

//Iconos
import { FiMenu } from "react-icons/fi";

const Header = () => {
    const [isDisplayed, setIsDisplayed] = useState(false);
    return(
        <React.Fragment>
            <div className="header">
                <nav>
                    <a 
                        href="#"
                        className="menu-icon"
                        onClick={() => setIsDisplayed(!isDisplayed)}
                    >
                        <FiMenu/>
                    </a>
                    {
                        isDisplayed &&
                        <ul>
                            <li><a href='#'>INICIO</a></li>
                            <li><a href='#'>SERVICIOS</a></li>
                            <li><a href='#'>NOSOTROS</a></li>
                            <li><a href='#'>CONTACTANOS</a></li>
                        </ul>
                    }
                </nav>
            </div>
        </React.Fragment>
    )
}

export default Header;