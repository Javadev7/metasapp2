import estilos from './Principal.module.css'
import Botonmenu from './Botonmenu';
import {ReactComponent as ListaSVG} from '../../img/lista.svg'
import {ReactComponent as NuevaSVG} from '../../img/nueva.svg'

function Principal({children}) {
    return (
      <div className={estilos.principal}>
        <aside className={estilos.aside}>
          <Botonmenu 
          href="/lista" 
          texto="Lista de Metas"
          Icono={ListaSVG}/>
           
          <Botonmenu 
          href="/crear" 
          texto="Nueva Meta"
          Icono={NuevaSVG}/>
       </aside>
        <main className="main">
          {children}
        </main>
      </div>
    );
  }
  
  export default Principal;