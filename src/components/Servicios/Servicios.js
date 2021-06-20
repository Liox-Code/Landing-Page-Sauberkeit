import React, {useRef} from 'react';

//hooks
import UseFadeIn from '../../hooks/UseFadeInUp';

//Componente
import ServicioItem from './ServicioItem';

//Estilos
import '../../styles/Servicios/Servicio.css';

const Servicios = () => {
    const refServicios = useRef();
    const data = {
        "servicios": [
            {
                "id": 1,
                "title": "FUMIGACIÓN Y DESINFECCIÓN",
                "listaServicios": [
                    "Con Termonebulizador a humo.",
                    "Empresas - Domicilios - Almacenes."
                ]
            },
            {
                "id": 2,
                "title": "LIMPIEZA DE VIDRIOS EXTERIORES",
                "listaServicios": [
                    "Lavado de ventanas externas.",
                    "Lavado de fachadas flotantes."
                ]
            },
            {
                "id": 3,
                "title": "PINTADO DE EDIFICIOS",
                "listaServicios": [
                    "Fachadas.",
                    "Oficinas.",
                    "Departamentos.",
                    "Áreas comunes.",
                    "Parqueos (Señalización)",
                    "Pintado con Diseños 3D.",
                    "Pintado de Murales.",
                ]
            },
            {
                "id": 4,
                "title": "LIMPIEZA DE DESAGÜES SANITARIOS",
                "listaServicios": [
                    "Pozos cépticos con sisterna.",
                    "Cámaras principales.",
                    "Bajantes y Ductos edificios.",
                    "Caja de registro y sumideros (Domicilio).",
                ]
            },
            {
                "id": 5,
                "title": "MANTENIMIENTO DE BOMBAS",
                "listaServicios": [
                    "Bombas de Agua.",
                    "Bombas Sumergibles.",
                    "Bombas Loderas.",
                    "Hidroceles.",
                    "Tableros Eléctricos.",
                ]
            },
        ]
    };
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
                    {data.servicios.map( data => 
                        <ServicioItem key={data.id} data={data}/>
                    )}
                </div>
            </div>
        </React.Fragment>
    )
}

export default Servicios;