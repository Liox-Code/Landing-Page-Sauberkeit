import React from 'react';

//Componentes
import Header from '../Header/Header';
import Portrait from '../Portrait/Portrait';
import Contacto from '../Contacto/Contacto';
import Footer from '../Footer/Footer';

//Estilos
import '../../styles/Layout/Layout.css';

function Layout(props) {
    return (
        <React.Fragment>
            <Header/>
            <Portrait/>
            <div className='content'>
                <div className='content-container'>
                    {props.children}
                </div>
            </div>
            <Contacto/>
            <Footer/>
        </React.Fragment>
    )
}

export default Layout;