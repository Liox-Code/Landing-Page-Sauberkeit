import React from 'react';

//CSS
import '../../styles/Header.css';

class Header extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="header">
                    <nav>
                        <ul>
                            <li>INICIO</li>
                            <li>SERVICIOS</li>
                            <li>NOSOTROS</li>
                            <li>CONTACTANOS</li>
                        </ul>
                    </nav>
                </div>
            </React.Fragment>
        )
    }
}

export default Header;