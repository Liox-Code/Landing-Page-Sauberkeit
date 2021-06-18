import React, {useRef} from 'react';

//hooks
import UseFadeIn from '../../hooks/UseFadeInUp';

//Estilos
import '../../styles/Contacto/ContactoEmail.css';
import '../../styles/Button/MustardButton.css';

const ContactoEmail = () => {
    const refContactoEmail = useRef();
    const {opacity, fadeInUp} = UseFadeIn(refContactoEmail);
    return(
        <React.Fragment>
            <div
                ref={refContactoEmail}
                className={`contacto-email ${fadeInUp}`}
                style={{opacity: opacity}}
            >
                <form className="email-form">
                    <input type="text" placeholder="Nombre"/>
                    <input type="text" placeholder="Email
                    "/>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                    <a 
                        className="mustard-btn"
                        href="/#Enviar"
                    >
                        <span>ENVIAR</span>
                    </a>
                </form>
            </div>
        </React.Fragment>
    )
}

export default ContactoEmail;