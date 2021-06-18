import React, {useRef} from 'react';

//hooks
import UseFadeIn from '../../hooks/UseFadeInUp';

//Componente
import ServicioItem from './ServicioItem';

//Estilos
import '../../styles/Servicios/Servicio.css';

const Servicios = () => {
    const refServicios = useRef();
    const {opacity, fadeInUp} = UseFadeIn(refServicios);
    return(
        <React.Fragment>
            <div
                className={`Servicios`}
                id="Servicios"
            >
                <h2
                    ref={refServicios}
                    className={`${fadeInUp}`}
                    style={{opacity: opacity}}
                >
                    NUESTROS SERVICIOS
                </h2>
                <div
                    className={`Servicios-Container`}
                >
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