import { useLoaderData } from '@remix-run/react';
import { getGuitarra } from '~/models/guitarras.server';
import styles from '~/styles/guitarras.css';

export function meta({data}){
    return [
        {
            title: `GuitarLA - ${data.data[0].attributes.nombre}`,
            description: `GuitarLA - venta de guitarras ${data.data[0].attributes.nombre}`
        }
    ]
}

export function links(){
    return [
        {
            rel: 'stylesheet',
            href: styles
        }
    ]
}

export async function loader({ params }) {

    const { url } = params;
    const guitarra = await getGuitarra(url);

    return guitarra;

}

function Guitarra() {

    const guitarra = useLoaderData();
    const { nombre, imagen, precio, descripcion} = guitarra.data[0].attributes;

    return (
        <main className='contenedor guitarra'>
            <img className='imagen' src={imagen.data.attributes.url} alt={`Imagen de la guitarra ${nombre}`} />

            <div className='contenido'>
                <h3>{nombre}</h3>

                <p className='texto'>{descripcion[0]?.children[0]?.text}</p>
                <p className='precio'>${precio}</p>
            </div>
        </main>
    )
}

export default Guitarra
