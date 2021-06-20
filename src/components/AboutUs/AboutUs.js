import React, {useRef} from 'react';

//hooks
import UseFadeIn from '../../hooks/UseFadeInUp';

import '../../styles/AboutUs/AboutUs.css';
import '../../styles/animation/fadeInUpp.css';

const AboutUs = () => {
    const refAboutUs = useRef();
    const {opacity, fadeInUp} = UseFadeIn(refAboutUs);
    return(
        <React.Fragment>
            <div ref={refAboutUs} className={`AboutUs ${fadeInUp}`} style={{opacity: opacity}}>
                <div
                    className={`AboutUs-title-container ${fadeInUp}`}
                    style={{opacity: opacity}}
                    id="Nosotros"
                >
                    <h2>NOSOTROS</h2>
                </div>
                <p>SAUBERKEIT es una empresa con 15 años de experiencia a nivel nacional en soluciones de control de plagas, fumigación y limpieza industrial.
                    <br/>Mantenimiento y destranque de duchas Sanitarias.
                    <br/>Tambien contamos con un sistema de pozos sépticos y de agua.
                </p>
            </div>
        </React.Fragment>
    )
}

export default AboutUs;