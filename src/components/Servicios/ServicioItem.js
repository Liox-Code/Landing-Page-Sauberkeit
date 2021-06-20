import React, {useRef} from 'react';

//hooks
import UseFadeIn from '../../hooks/UseFadeInUp';

//Imagenes
import ImgFumigacionDesinfeccion from '../../assets/static/Ratones-peleando.jpg';

//Estilos
import "../../styles/Servicios/ServicioItem.css";

const ServicioItem = (props) => {
    const refServicioItem = useRef();
    const { opacity, fadeInUp } = UseFadeIn(refServicioItem);
    const { title, listaServicios } = props.data;
    return(
        <React.Fragment>
            <div
                ref={refServicioItem} 
                className={`ServicioItem ${fadeInUp}`}
                style={{opacity: opacity}}
            >
                <img src={ImgFumigacionDesinfeccion} alt=""/>
                <h2>{title}</h2>
                <ul>
                    {listaServicios.map( (servicio, index) =>
                        <li key={index}>{servicio}</li>
                    )}
                </ul>
            </div>
        </React.Fragment>
    )
}

export default ServicioItem;