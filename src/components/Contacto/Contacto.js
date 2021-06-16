import React from 'react';

//Componente
import ContactoEmail from './ContactoEmail';
import ContactoInfo from './ContactoInfo';

//Estilos
import '../../styles/Contacto/Contacto.css';

const Contacto = () => {
    return(
        <React.Fragment>
            <div className="contacto">
                <h2>CONTACTO</h2>
                <div className="contacto-container">
                    <ContactoInfo/>
                    <ContactoEmail/>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Contacto;