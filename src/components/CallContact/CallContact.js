import React from 'react';

//Imagen
import CallContactImg from '../../assets/static/indexiphone20.png';

//Estilos
import '../../styles/CallContact/CallContact.css';

const CallContact = () => {
    return(
        <React.Fragment>
            <div className="call-contact">
                <div className="call-contact--image">
                    <img  src={CallContactImg} alt=""/>
                </div>
                <div className="call-contact--description">
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna ali</p>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna ali</p>
                    <button>CONTACTARME</button>
                </div>
            </div>
        </React.Fragment>
    )
}

export default CallContact;