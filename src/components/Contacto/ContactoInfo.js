import React, {useRef} from 'react';

//hooks
import UseFadeIn from '../../hooks/UseFadeInUp';

//Estilos
import '../../styles/Contacto/ContactoInfo.css';
import '../../styles/Icon.css';

//Iconos
import { FaFacebookF, FaTwitter, /*FaPhoneAlt*/ } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

//Imagenes
import QR from '../../assets/static/QR.svg';

const ContactoInfo = () => {
    const refContactoInfo = useRef();
    const {opacity, fadeInUp} = UseFadeIn(refContactoInfo);
    return(
        <React.Fragment>
            <div ref={refContactoInfo} className="contacto-info-container">
                <h3
                    className={`${fadeInUp}`}
                    style={{opacity: opacity}}
                >
                    Envianos tus consultas
                </h3>
                <p
                    className={`${fadeInUp}`}
                    style={{opacity: opacity}}
                >
                    No dudes en consultarnos y enviarnos tus dudas y las resolveremos, puedes contactarnos llenando el formulario o ya sea vía llamada telefónica, al whatsapp o en nuestras redes sociales.
                </p>
                <div className="contacto-info">
                    {/* <div
                        className={`contacto-info-item ${fadeInUp}`}
                        style={{opacity: opacity}}
                    >
                        <FaPhoneAlt className="contact-icon phoneIcon"/>
                        <span>:</span>
                        <span>
                            777 12345 <br/>
                            777 12345 <br/>
                            777 12345
                        </span>
                    </div> */}
                    <div
                        className={`contacto-info-item ${fadeInUp}`}
                        style={{opacity: opacity}}
                    >
                        <IoLogoWhatsapp className="contact-icon whatsappIcon"/>
                        <span>:</span>
                        <span>
                            789-58246<br/>
                            701-89477<br/>
                            735-82793
                        </span>
                    </div>
                    <div className='icons-container'>
                        <div
                            className={`social-media-icon-container social-media-icon ${fadeInUp}`}
                            style={{opacity: opacity}}
                        >
                            <FaFacebookF className="icon"/>
                        </div>
                        <div
                            className={`social-media-icon-container social-media-icon ${fadeInUp}`}
                            style={{opacity: opacity}}
                        >
                            <FaTwitter className="icon"/>
                        </div>
                    </div>
                    <div
                        className={`qr-container ${fadeInUp}`}
                        style={{opacity: opacity}}
                    >
                        <p>O escanea nuestro QR para contactarnos.</p>
                        <img 
                            className='QR' 
                            src={QR} 
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ContactoInfo;