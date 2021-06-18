import React, {useRef} from 'react';

//hooks
import UseFadeIn from '../../hooks/UseFadeInUp';

//Imagenes
import ImgFumigacionDesinfeccion from '../../assets/static/Ratones-peleando.jpg';

//Estilos
import "../../styles/Servicios/ServicioItem.css";

const ServicioItem = () => {
    const refServicioItem = useRef();
    const {opacity, fadeInUp} = UseFadeIn(refServicioItem);
    return(
        <React.Fragment>
            <div 
                ref={refServicioItem} 
                className={`ServicioItem ${fadeInUp}`}
                style={{opacity: opacity}}
            >
                <img src={ImgFumigacionDesinfeccion} alt=""/>
                <h2>FUMIGACIÓN Y DESINFECCIÓN</h2>
                <ul>
                    <li>Con Termonebulizador a humo.</li>
                    <li>Empresas - Domicilios - Almacenes.</li>
                </ul>
            </div>
        </React.Fragment>
    )
}

export default ServicioItem;