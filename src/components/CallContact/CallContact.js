import React, {useRef} from 'react';

//hooks
import UseFadeIn from '../../hooks/UseFadeInUp';

//Imagen
import CallContactImg from '../../assets/static/indexiphone20.png';

//Estilos
import '../../styles/CallContact/CallContact.css';
import '../../styles/Button/OrangeButton.css';

const CallContact = () => {
    const refCallContact = useRef();
    const {opacity, fadeInUp} = UseFadeIn(refCallContact);
    return(
        <React.Fragment>
            <div ref={refCallContact} className="call-contact">
                <div
                    className={`call-contact--image ${fadeInUp}`}
                    style={{opacity: opacity}}
                >
                    <img  src={CallContactImg} alt=""/>
                </div>
                <div
                    className={`call-contact--description ${fadeInUp}`}
                    style={{opacity: opacity}}
                >
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna ali</p>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna ali</p>
                    <a 
                        className="orange-btn"
                        href="/#Contactanos"
                    >
                        <span>CONTACTARME</span>
                    </a>
                </div>
            </div>
        </React.Fragment>
    )
}

export default CallContact;