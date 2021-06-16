import React from 'react';

//Componente
import ServicioItem from './ServicioItem';

//Estilos
import '../../styles/Servicios/Servicio.css';

const Servicios = () => {
    return(
        <React.Fragment>
            <div className="Servicios">
                <h2>NUESTROS SERVICIOS</h2>
                <div className='Servicios-Container'>
                    <ServicioItem/>
                    <ServicioItem/>
                    <ServicioItem/>
                    <ServicioItem/>
                    <ServicioItem/>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Servicios;