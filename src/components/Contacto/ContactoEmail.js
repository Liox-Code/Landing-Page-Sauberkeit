import React, {useState , useRef} from 'react';
import emailjs from 'emailjs-com';

//hooks
import UseFadeIn from '../../hooks/UseFadeInUp';
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";

//Estilos
import '../../styles/Contacto/ContactoEmail.css';
import '../../styles/Button/MustardButton.css';
import '../../styles/Icon.css';
import '../../styles/Loader/Loader.css';

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
        exitoEmail: false,
        cargandoEmail: false,
        errorEmail: false,
    });

    function sendEmail(e) {
        e.preventDefault();

        setEmailMessage({
            ...emailMessage,
            name: emailMessage.name.trim(),
            email: emailMessage.email.trim(),
            message: emailMessage.message.trim(),
            cargandoEmail: true,
        });
        
        if(emailMessage.name && emailMessage.email && emailMessage.message){
            enviarEmail(e);
        }
    }

    const enviarEmail = async (e) => {
        await emailjs.sendForm('service_a7fy4as', 'template_xesee6o', e.target, 'user_mjJypJYA8sRwr9oyzkzgw')
        .then((result) => {
            setEmailMessage({
                ...emailMessage,
                exitoEmail: true,
                cargandoEmail: false,
            });
            resetEmailForm(true);
        }, (error) => {
            setEmailMessage({
                ...emailMessage,
                cargandoEmail: false,
                errorEmail: true,
            });
            resetEmailForm(false);
        });
    }

    const resetEmailForm = (reset) => {
        if(reset){
            setTimeout(
                () => {
                    setEmailMessage({
                        ...emailMessage,
                        name: '',
                        email: '',
                        message: '',
                        nameError: '',
                        emailError: '',
                        messageError: '',
                        exitoEmail: false,
                        errorEmail: false,
                    });
                },
                1000
            );
        } else {
            setTimeout(
                () => {
                    setEmailMessage({
                        ...emailMessage,
                        exitoEmail: false,
                        errorEmail: false,
                    });
                },
                1000
            );
        }
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
                        disabled={(!emailMessage.name || !emailMessage.email || !emailMessage.message || emailMessage.errorEmail)}
                        type="submit"
                    >
                        { !emailMessage.cargandoEmail && <span>ENVIAR</span> }
                    </button>
                    { emailMessage.cargandoEmail &&
                        <span className="center margin-top-4">
                            <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
                        </span>
                    }
                    { emailMessage.exitoEmail &&
                        <span className="circular-icon center margin-top-4">
                            <AiFillCheckCircle className="check-icon"/> 
                        </span>
                    }
                    { emailMessage.errorEmail &&
                        <span className="circular-icon center margin-top-4">
                            <AiFillCloseCircle className="wrong-icon"/> 
                        </span>
                    }
                </form>
            </div>
        </React.Fragment>
    )
}

export default ContactoEmail;