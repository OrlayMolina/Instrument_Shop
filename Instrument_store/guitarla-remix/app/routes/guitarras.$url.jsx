import { useLoaderData } from '@remix-run/react';
import { getGuitarra } from '~/models/guitarras.server';
import styles from '~/styles/guitarras.css';

export async function loader({ params }) {

    const { url } = params;
    console.log(url);
    const guitarra = await getGuitarra(url);

    if(guitarra.data.length === 0){
        throw new Response('', {
            status: 404,
            statusText: 'Guitarra no encontrada'
        })
    }

    return guitarra;

}

export function meta({data}){
    /** Sí no hay data**/
    if(!data){
        return {
            title: 'Guitarra no encontrada',
            description: `GuitarLA - venta de guitarras, guitarra no encontrada`
        }
    }

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

                <form className='formulario'>
                    <label htmlFor='cantidad'>Cantidad</label>

                    <select id='cantidad'>

                        <option value="">-- Seleccione --</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>

                    <input 
                        type="submit" 
                        value="Agregar al carrito"
                    />
                    
                </form>
            </div>
        </main>
    )
}

export default Guitarra
