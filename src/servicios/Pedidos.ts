import { Metatype } from "../tipos/Metatype";


//Promise<Metatype[]>  se usa cuando se trabaja cuando se trae una lista que es una promesa  en typescript
export async function pedirMetas() :Promise<Metatype[]> {
	const response = await fetch("/api/metas");
	//Anterior / const metas: Metatype[] = response.await response.json();
	const metas: Metatype[] = await response.json();
	//console.log('Soy "metas" y asi salgo de Pedidos.js:', metas);
	return metas;
}

export async function pedirMeta(id: number) :Promise<Metatype> {
	const response = await fetch(`/api/metas${id}`);
	const meta: Metatype = await response.json();
	return meta;
}

export async function crearMeta(meta: Metatype) : Promise<Metatype>{
	const response = await fetch("/api/metas", {
		method: "POST",
		body: JSON.stringify(meta),
		headers: {
			"Content-Type": "application/json; charset=utf-8",
		},
	});
	const metaCreada: Metatype = await response.json();
	console.log("Meta creada!", metaCreada);
	return metaCreada;
}

export async function actualizarMeta(meta: Metatype) :Promise<Metatype> {
	const response = await fetch(`/api/metas/${meta.id}`, {
		method: "PUT",
		body: JSON.stringify(meta),
		headers: {
			"content-type": "application/json; charset=utf-8",
		},
	});
	const metaActualizada: Metatype = await response.json();
	console.log("Meta actualizada!", metaActualizada);
	return metaActualizada;
}

export async function borrarMeta(id: number) : Promise<void> {
	await fetch(`/api/metas/${id}`, {
		method: "DELETE",
	});
	console.log("Meta borrada!", id);
}
