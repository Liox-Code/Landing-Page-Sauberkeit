import React, { useState, useEffect } from 'react';

//CSS
import '../../styles/Header/Header.css';

//Iconos
import { FiMenu } from "react-icons/fi";
function useWindowsSize() {
    const [size, setSize] = useState( window.innerWidth );
    const handleResize = () => setSize( window.innerWidth );
    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [])
    return size;
}

const Header = () => {
    const [isDisplayed, setIsDisplayed] = useState(false);
    const width = useWindowsSize();
    return(
        <React.Fragment>
            <div className="header">
                <div className="header-container">
                    {
                        (width < 800) &&
                        <React.Fragment>
                            <FiMenu
                                className="menu-icon"
                                onClick={() => setIsDisplayed(!isDisplayed)}
                            />
                        </React.Fragment>
                    }
                    {
                        (isDisplayed || width >= 800) &&
                        <React.Fragment>
                            <nav>
                                <a
                                    className="nav-link"
                                    href="/#"
                                >
                                    INICIO
                                </a>
                                <a
                                    className="nav-link"
                                    href="/#Servicios"
                                >
                                    SERVICIOS
                                </a>
                                <a
                                    className="nav-link"
                                    href="/#Nosotros"
                                >
                                    NOSOTROS
                                </a>
                                <a
                                    className="nav-link"
                                    href="/#Contactanos"
                                >
                                    CONTÁCTANOS
                                </a>
                            </nav>
                        </React.Fragment>
                    }
                </div>
            </div>
        </React.Fragment>
    )
}

export default Header;