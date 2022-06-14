import { useContext } from 'react';
import {useParams} from 'react-router';
import { Contexto } from '../../servicios/Memoria';
import Detalles from '../nueva/Detalles';
 
function Modal() {
    /* Destructuring the id from the useParams hook. */
    const {id} = useParams();
    /* Destructuring the state and the dispatch function from the context. */
    const [estado, enviar] = useContext(Contexto)

    return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75">
        /* It's just a way to show the data in the modal. */
        {JSON.stringify(estado.objetos[id])}
        <Detalles></Detalles>
    </div>
    
    )
}

export default Modal