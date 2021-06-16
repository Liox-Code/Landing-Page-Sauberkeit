import React from 'react';

//Imagenes
import ImgFumigacionDesinfeccion from '../../assets/static/Ratones-peleando.jpg';

//Estilos
import "../../styles/Servicios/ServicioItem.css";

const ServicioItem = () => {
    return(
        <React.Fragment>
            <div className="ServicioItem">
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