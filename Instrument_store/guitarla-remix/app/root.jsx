import {
    Meta,
    Links,
    Link,
    Outlet,
    Scripts,
    LiveReload,
    useRouteError,
    isRouteErrorResponse
} from '@remix-run/react';
import styles from '~/styles/index.css';
import Header from '~/components/header';
import Footer from '~/components/footer';

export function meta(){ 
    return (
        [
            { charset: 'utf-8' },
            { title: 'Guitar - LA - Remix' },
            { viewport: "width=device-width,initial-scale=1"}
       ]
    )
};


export function links(){
    return [
        {
            rel: 'stylesheet',
            href: 'https://necolas.github.io/normalize.css/8.0.1/normalize.css'
        },
        {
            rel: 'preconnect',
            href: 'https://fonts.googleapis.com'
        },
        {
            rel: 'preconnect',
            href: 'https://fonts.gstatic.com',
            crossOrigin : "true"
        }, 
        {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap'
        },
        {
            rel: 'stylesheet',
            href: styles
        }
    ];
}

export default function App(){
    return (

        <Document>
            <Outlet />
        </Document>

    );
}

function Document ({children}){
    return (
        <html lang="es">
            <head>
                <Meta />
                <Links />
            </head>
            <body>
                <Header/>
                {children}
                <Footer/>
                <Scripts/>
                <LiveReload/>
            </body>
        </html>
    );
}

/* Manejo de Errores */
export function CatchBoundary() {
    const error = useRouteError()
    return (
        <Document>
            <p className='error'>{error.status } {error.statusText}</p>
        </Document>
    )
}

export function ErrorBoundary() {
    const error = useRouteError();
  
    if (isRouteErrorResponse(error)) {
      return (
        <Document>
          <h1 className='error'>
            {error.status} {error.statusText}
          </h1>
          <Link className='error-enlace' to="/">Tal vez quieras volvera a la página principal</Link>
          <p>{error.data}</p>
        </Document>
      );
    } else if (error instanceof Error) {
      return (
        <Document>
          <h1 className='error'>Error</h1>
          <p>{error.message}</p>
          <p>The stack trace is:</p>
          <pre>{error.stack}</pre>
        </Document>
      );
    } else {
      return (
        <Document>
          <h1 className='error'>Oh no!</h1>
          <Link className='error-enlace' to="/">Tal vez quieras volvera a la página principal</Link>
          <p className='error'>Something went wrong and we don't know what.</p>
        </Document>
      )
    }
  }