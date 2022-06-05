import estilos from './Encabezado.module.css'
import {ReactComponent as LogoSVG} from '../../img/Logo.svg';
import {ReactComponent as PerfilSVG} from '../../img/Perfil.svg';
import Botonmenu from './Botonmenu';

function Encabezado() {
  return (
    <header className={estilos.encabezado}>
      <div className={estilos.contenedor}>
        <LogoSVG className={estilos.logo} />
        <a className={estilos.titulo} hreff="/">
          Metas App
        </a> 
      </div>
      <nav>
        <Botonmenu 
          href="/perfil" 
          Icono={PerfilSVG} />
      </nav>
    </header>
  );
}

export default Encabezado;