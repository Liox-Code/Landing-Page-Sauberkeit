import React from 'react';

//Componentes
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

//Estilos
import '../../styles/Layout.css';

function Layout(props) {
    return (
        <React.Fragment>
            <Header/>
            <div className='content'>
                <div className='content-container'>
                    {props.children}
                </div>
            </div>
            <Footer/>
        </React.Fragment>
    )
}

export default Layout;