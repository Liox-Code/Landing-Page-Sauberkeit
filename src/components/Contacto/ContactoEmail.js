import React from 'react';

//Estilos
import '../../styles/Contacto/ContactoEmail.css';

const ContactoEmail = () => {
    return(
        <React.Fragment>
            <div className="contacto-email">
                <form className="email-form">
                    <input type="text" placeholder="Nombre"/>
                    <input type="text" placeholder="Email
                    "/>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                    <button>ENVIAR</button>
                </form>
            </div>
        </React.Fragment>
    )
}

export default ContactoEmail;