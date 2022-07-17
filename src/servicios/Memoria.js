import { createContext, useReducer } from "react";

/* Comprobando si hay un elemento de almacenamiento local llamado 'metas' y, si lo hay, lo está
analizando y configurando como el estado inicial. Si no hay un elemento de almacenamiento local
llamado 'metas', está configurando el estado inicial en una matriz vacía. */
//const memoria = localStorage.getItem('metas');

//colocamos nuevo valor inicial vacio
const estadoInicial = {
	/*  memoria
   ? JSON.parse(memoria)
   : { */
	orden: [],
	objetos: {},
};

function reductor(estado, accion) {
	switch (accion.tipo) {
		case "colocar": {
			const metas = accion.metas;
			const nuevoEstado = {
				orden: metas.map((meta) => meta.id),
				objetos: metas.reduce(
					(objeto, meta) => ({ ...objeto, [meta.id]: meta }),
					{}
				),
			};
			/* Guardando el estado en localStorage. */
			//localStorage.setItem('metas', JSON.stringify(nuevoEstado))
			return nuevoEstado;
		}
		case "crear": {
			const id = accion.meta.id; //Math.random();
			const nuevoEstado = {
				orden: [...estado.orden, id],
				objetos: {
					...estado.objetos,
					[id]: accion.meta,
				},
			};
			//localStorage.setItem('metas', JSON.stringify(nuevoEstado))
			return nuevoEstado;
		}
		case "actualizar": {
			//obtenemos la meta con una id
			const id = accion.meta.id;
			//vamos al estado original, seccion objetos y accedemos a la meta basados en la id
			estado.objetos[id] = {
				//copiamos la meta que ya existe y encima de esta pegamos la nueva metas reemplazando por la nuevas propiedades
				...estado.objetos[id],
				...accion.meta,
			};
			//reemplazamos el estado con uno nuevo para renderizarlos nuevamente
			const nuevoEstado = { ...estado };
			// localStorage.setItem('metas', JSON.stringify(nuevoEstado))

			return nuevoEstado;
		}
		case "borrar": {
			//obtenemos la id que hemos pasado en la accion
			const id = accion.id;
			//actualizamos el orden de las id. filtramos la id de la lista de estado.orden
			const nuevoOrden = estado.orden.filter((item) => item !== id);
			//borramos la meta
			delete estado.objetos[id];
			//construimos nuestro nuevo estado, formado con el nuevo orden creado y utiliza el mismo estado anterior
			const nuevoEstado = {
				orden: nuevoOrden,
				objetos: estado.objetos,
			};
			// localStorage.setItem('metas', JSON.stringify(nuevoEstado))
			return nuevoEstado;
		}
		default:
			throw new Error();
	}
}

// se corre el reductor pasando el estado inicial y tambien pasando la listaMock
//reductor(estadoInicial, {tipo:'colocar', metas: listaMock})

export const Contexto = createContext(null);

function Memoria({ children }) {
	const [estado, enviar] = useReducer(reductor, estadoInicial);
	return (
		/* A React component that provides the context to its children. */
		<Contexto.Provider value={[estado, enviar]}>
			{children}
		</Contexto.Provider>
	);
}

export default Memoria;
