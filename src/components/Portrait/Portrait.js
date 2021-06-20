import React, { useState, useEffect, useRef } from 'react';

//hooks
import UseFadeIn from '../../hooks/UseFadeInUp';

//Estilos
import '../../styles/Portrait/Portrait.css';
import '../../styles/Button/OrangeButton.css';

//Imagenes
import portraitImage from '../../assets/static/indexiphone20.png';

const Portrait = () => {
    const refPortrait = useRef();
    const {opacity, fadeInUp} = UseFadeIn(refPortrait);
    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => {
        setOffsetY(window.pageYOffset);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return(
        <React.Fragment>
            <div className="Portrait">
                <img 
                    className="portrait-img"
                    style={{ transform: `translateY(${ offsetY * 0.6}px)`}}
                    src={portraitImage}
                    alt=""
                />
                <div
                    ref={refPortrait}
                    className={`img-overlay`}
                >
                    <h2
                        className={`img-description ${fadeInUp}`}
                        style={{
                            opacity: opacity,
                            transform: `translateY(-${ offsetY * 0.2}px)`
                        }}
                    >
                        Limpieza y Fumigación 
                    </h2>
                    <a
                        className={`img-button orange-btn ${fadeInUp}`}
                        style={{
                            opacity: opacity,
                            transform: `translateY(-${ offsetY * 0.2}px)`
                        }}
                        href="/#Contactanos"
                    >
                        <span>CONTACTAR</span>
                    </a>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Portrait;