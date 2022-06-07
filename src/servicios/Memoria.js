import { createContext, useReducer } from "react";


/* const estadoInicial = {
    orden: [],
    objetos: {}
};

function reductor(estado, accion) {
      switch (accion.tipo) {
          case "colocar":{
              const metas = accion.metas;
              const nuevoEstado = {
                  orden: metas.map(meta => meta.id),
                  obejtos: metas.reduce((objeto, meta) =>( {...objeto, [meta.id]: meta }), {})
              }
              return nuevoEstado;
          }
      }  
}

console.log(reductor(estadoInicial, {tipo:'colocar', metas: listaMock})) */
             
export const Contexto = createContext(null);

function Memoria({children}) {
   // const [estado, enviar] = useReducer(reductor, estadoInicial)
    return (
        <Contexto.Provider value ={'compartido'}> 
            {children}
        </Contexto.Provider>
    )
} 

export default Memoria