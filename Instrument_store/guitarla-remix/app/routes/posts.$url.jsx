import { useLoaderData } from '@remix-run/react'
import { getPost } from '~/models/posts.server';
import { formatearFecha } from '~/utils/helpers';
import styles from '~/styles/blog.css';

export function meta({data}){
    /** Sí no hay data**/
    if(!data){
        return {
            title: 'Blog no encontrada',
            description: `GuitarLA - venta de guitarras, guitarra no encontrada`
        }
    }

    return [
        {
            title: `GuitarLA - ${data.data[0].attributes.titulo}`,
            description: `GuitarLA - venta de guitarras ${data.data[0].attributes.titulo}`
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

export async function loader({params}){
    
    const { url } = params;
    const post = await getPost(url);
    if(post.data.length === 0){
        throw new Response('', {
            status: 404,
            statusText: 'Post no encontrado'
        })
    }

    return post;
}

export default function Post() {

    const post = useLoaderData();

    const { titulo, contenido, imagen, publishedAt } = post?.data[0]?.attributes
    return (
      <article className='contenedor post mt-3'>
          <img className="imagen" src={imagen?.data?.attributes?.url} alt={`imagen blog ${titulo}`} />
              <div className="contenido">
                  <h3>{titulo}</h3>
                  <p className='fecha'>{formatearFecha(publishedAt)}</p>
                  <p className="texto">{contenido[0]?.children[0]?.text}</p>
              </div>
      </article>
    )
  }