import { useContext } from 'react';
import { Contexto } from '../../servicios/Memoria';
import Meta from './Meta';

const listaMock = [{
    "id": "1",
    "detalles": "Correr por 30 minutes",
    "periodo": "dia",
    "eventos": 1,
    "icono": "🏃",
    "meta": 365,
    "plazos": "2030-01-01",
    "completado": 5

},{
"id": "2",
"detalles": "Leer libros",
"periodo": "año",
"eventos": 6,
"icono": "🏃",
"meta": 12,
"plazos": "2030-01-01",
"completado": 0

}, {
"id": "3",
"detalles": "Viajar",
"periodo": "mes",
"eventos": 1,
"icono": "🏃",
"meta": 60,
"plazos": "2030-01-01",
"completado": 5

    }
];


function Lista(){

    const prueba = useContext(Contexto)
   console.log(prueba)
    return (
        listaMock.map(meta => <Meta key={meta.id} {...meta}></Meta>)
    );
}

export default Lista;