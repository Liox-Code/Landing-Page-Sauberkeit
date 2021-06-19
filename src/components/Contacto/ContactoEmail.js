import React, {useState, useEffect, useRef} from 'react';
import emailjs from 'emailjs-com';

//hooks
import UseFadeIn from '../../hooks/UseFadeInUp';

//Estilos
import '../../styles/Contacto/ContactoEmail.css';
import '../../styles/Button/MustardButton.css';

const ContactoEmail = () => {
    const refContactoEmail = useRef();
    const {opacity, fadeInUp} = UseFadeIn(refContactoEmail);
    const [emailMessage, setEmailMessage] = useState({
        name: '',
        email: '',
        message: '',
        nameError: '',
        emailError: '',
        messageError: '',
    });

    function sendEmail(e) {
        e.preventDefault();

        setEmailMessage({
            ...emailMessage,
            name: emailMessage.name.trim(),
            email: emailMessage.email.trim(),
            message: emailMessage.message.trim(),
        });
        
        if(emailMessage.name && emailMessage.email && emailMessage.message){
            emailjs.sendForm('service_a7fy4as', 'template_xesee6o', e.target, 'user_mjJypJYA8sRwr9oyzkzgw')
            .then((result) => {
                alert('Enviado exitosamente');
            }, (error) => {
                alert(error.message);
            });
        }

        setEmailMessage({
            ...emailMessage,
            name: '',
            email: '',
            message: '',
            nameError: '',
            emailError: '',
            messageError: '',
        });
    }

    const updateField = e => {
        let errorVacio = '';
        if(!e.target.value){
            errorVacio = 'Campo vacio';
        }

        setEmailMessage({
            ...emailMessage,
            [e.target.name]: e.target.value,
            [e.target.name+'Error']: errorVacio
        });
    }

    return(
        <React.Fragment>
            <div
                ref={refContactoEmail}
                className={`contacto-email ${fadeInUp}`}
                style={{opacity: opacity}}
            >
                <form className="email-form" onSubmit={sendEmail}>
                    <div className="email-form--input-container">
                        <input
                            type="text"
                            placeholder="Nombre"
                            name="name"
                            required
                            onChange={updateField}
                            value={emailMessage.name}
                        />
                        { emailMessage.nameError && <span className="error-form-field">{emailMessage.nameError}</span>}
                    </div>
                    <div className="email-form--input-container">
                        <input
                            type="email"
                            placeholder="Email"
                            name="email"
                            required
                            onChange={updateField}
                            value={emailMessage.email}
                        />
                        { emailMessage.emailError && <span className="error-form-field">{emailMessage.emailError}</span>}
                    </div>
                    <div className="email-form--input-container">
                        <textarea
                            cols="30"
                            rows="10"
                            name="message"
                            required
                            onChange={updateField}
                            value={emailMessage.message}
                        ></textarea>
                        { emailMessage.messageError && <span className="error-form-field">{emailMessage.messageError}</span>}
                    </div>
                    <button 
                        className="submit mustard-btn"
                        disabled={(!emailMessage.name || !emailMessage.email || !emailMessage.message)}
                        type="submit"
                    >
                        <span>ENVIAR</span>
                    </button>
                </form>
            </div>
        </React.Fragment>
    )
}

export default ContactoEmail;