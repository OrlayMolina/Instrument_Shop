import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Guitarra({ guitarra }) {

    const { descripcion, imagen, precio, url, nombre } = guitarra;

    return (
        <div className='guitarra'>
            <img src={imagen?.data?.attributes?.formats?.medium?.url} alt={`Imagen guitarra ${nombre}`} />
            <div className='contenido'>
                <h3>{nombre}</h3>
                <p className='descripcion'>{descripcion}</p>
                <p className='precio'>{precio}</p>

                <Link 
                    to={`/guitarras/${url}`} 
                    className='enlace'
                >Ver Producto</Link>

            </div>
        </div>
    )
}

Guitarra.propTypes = {
    guitarra: PropTypes.object.isRequired
};

export default Guitarra
