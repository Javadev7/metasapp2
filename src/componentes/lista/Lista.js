import { useContext } from 'react';
import {Outlet} from 'react-router';
import { Contexto } from '../../servicios/Memoria';
import Meta from './Meta';



function Lista(){

    const [estado, enviar] = useContext(Contexto)
      return (
        <>
          {estado.orden.map(id => <Meta key={id} { ...estado.objetos[id]}></Meta>)}    
         /* A react-router-dom component that renders the component that matches the current route. */
          <Outlet /> 
        </>
   );
}

export default Lista;         