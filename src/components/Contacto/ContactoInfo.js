import React from 'react';

//Estilos
import '../../styles/Contacto/ContactoInfo.css';
import '../../styles/Icon.css';

//Iconos
import { FaFacebookF, FaTwitter } from "react-icons/fa";

//Imagenes
import QR from '../../assets/static/QR.png';

const ContactoInfo = () => {
    return(
        <React.Fragment>
            <div className="contacto-info-container">
                <h3>Envianos tus consultas</h3>
                <p>No dudes en consultarnos y enviarnos tus dudas y las resolveremos, puedes contactarnos llenando el formulario o ya sea vía llamada telefónica, al whatsapp o en nuestras redes sociales.</p>
                <div className="contacto-info">
                    <span>Llamanos al:</span>
                    <span>{'777 12345'}</span>
                    <span>Whatsapp:</span>
                    <span>{'777 12345'}</span>
                    <div className='icons-container'>
                        <FaFacebookF className="contact-icon icon"/>
                        <FaTwitter className="contact-icon icon"/>
                    </div>
                    <p>O escanea nuestro QR para contactarnos.</p>
                    <img 
                        className='QR' 
                        src={QR} 
                        alt=""
                    />
                </div>
            </div>
        </React.Fragment>
    )
}

export default ContactoInfo;