import React, {useRef} from 'react';

//hooks
import UseFadeIn from '../../hooks/UseFadeInUp';

//Componente
import ContactoEmail from './ContactoEmail';
import ContactoInfo from './ContactoInfo';

//Estilos
import '../../styles/Contacto/Contacto.css';

const Contacto = () => {
    const refContacto = useRef();
    const {opacity, fadeInUp} = UseFadeIn(refContacto);
    return(
        <React.Fragment>
            <div className="contacto" id="Contactanos">
                <h2
                    ref={refContacto}
                    className={`${fadeInUp}`}
                    style={{opacity: opacity}}
                >
                    CONTACTO
                </h2>
                <div className="contacto-container">
                    <ContactoInfo/>
                    <ContactoEmail/>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Contacto;