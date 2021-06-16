import React from 'react';

//Estilos
import '../../styles/Portrait/Portrait.css';

//Imagenes
import portraitImage from '../../assets/static/indexiphone20.png';

const Portrait = () => {
    return(
        <React.Fragment>
            <div className="Portrait">
                <img 
                    className="portrait-img" 
                    src={portraitImage} 
                    alt=""
                />
                <div className="img-overlay">
                    <h2 className="img-description">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, </h2>
                    <a className="img-button" href="/">CONTACTAR</a>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Portrait;