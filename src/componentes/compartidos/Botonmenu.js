import estilos from './Botonmenu.module.css';

function Botonmenu({Icono, texto, href}){
    return (
        <a href={href} className={estilos.botonmenu}>
           <Icono className={estilos.icono}/>
           {texto && <span className={estilos.texto}>{texto}</span>}
        </a>
    );
}

export default Botonmenu;