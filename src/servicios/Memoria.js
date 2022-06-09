import { createContext, useReducer } from "react";

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

 const estadoInicial = {
    orden: [],
    objetos: {}
};

function reductor(estado, accion) {
      switch (accion.tipo) {
          case "colocar":{
              const metas = accion.metas;
              const nuevoEstado = {
                  orden: metas.map(meta => meta.id),
                  obejtos: metas.reduce((objeto, meta) =>( { ...objeto, [meta.id]: meta }), {})
              }
              return nuevoEstado;
          }
      }  
}

const metas = reductor(estadoInicial, {tipo:'colocar', metas: listaMock})
             
export const Contexto = createContext(null);

function Memoria({children}) {
   const [estado, enviar] = useReducer(reductor, metas)
    return (
        <Contexto.Provider value ={[estado, enviar]}> 
            {children}
        </Contexto.Provider>
    )
} 

export default Memoria