import imagen from '../../public/img/nosotros.jpg';
import styles from '~/styles/nosotros.css';

export function meta(){
    // se puede agregar return con un objeto o un array de objetos
    return (
        [
            { title: 'GuitarLA - Sobre Nosotros' },
            { description: "Venta de Guitarras y Blog de música"}
        ]
    )
}

export function link(){
    return [
        {
            rel: 'stylesheet',
            href: styles
        },
        {
            rel: 'preload',
            href: imagen,
            as: 'image'
        }
    ]
}

function Nosotros() {
    return (
        <main className="contenedor nosotros">
            <h2 className="heading">Nosotros</h2>

            <div className="contenido">
                <img src={imagen} alt="imagen sobre nosotros" />

                <div>
                    <p>Nunc sagittis elementum suscipit. Sed auctor, erat at sollicitudin porttitor, lorem neque lacinia metus, tincidunt bibendum eros ante vitae ex. Proin ut semper nulla. Proin scelerisque posuere fermentum. Duis dignissim velit sit amet sem elementum, non semper velit mattis. Donec ullamcorper aliquet turpis vel euismod. Nulla facilisi. Vestibulum in massa quis massa condimentum tristique.</p>

                    <p>Nunc sagittis elementum suscipit. Sed auctor, erat at sollicitudin porttitor, lorem neque lacinia metus, tincidunt bibendum eros ante vitae ex. Proin ut semper nulla. Proin scelerisque posuere fermentum. Duis dignissim velit sit amet sem elementum, non semper velit mattis. Donec ullamcorper aliquet turpis vel euismod. Nulla facilisi. Vestibulum in massa quis massa condimentum tristique.</p>
                </div>
            </div>
        </main>
    )
}

export default Nosotros
