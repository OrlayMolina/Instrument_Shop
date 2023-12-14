import { useLoaderData } from '@remix-run/react';
import { getGuitarras } from '~/models/guitarras.server';
import Guitarra from '~/components/guitarra';

export async function loader(){
    const guitarras = await getGuitarras();
    const guitarrasArray = Object.values(guitarras.data);
    return guitarrasArray;
}


function Tienda() {

    const guitarras = useLoaderData();

    return (
        <main className='contenedor'>
            <h2 className='heading'>Nuestra Colección</h2>

            {guitarras?.length && (
                <div className='guitarras-grid'>
                    {guitarras.map( guitarra => (
                        <Guitarra
                            key={guitarra?.attributes.url}
                            guitarra={guitarra?.attributes}
                        />
                    ))}
                </div>
            )}
        </main>
    )
}

export default Tienda
