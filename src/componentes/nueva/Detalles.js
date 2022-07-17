import { useEffect, useState, useContext } from "react";
import { Contexto } from "../../servicios/Memoria";
import { useNavigate, useParams } from "react-router";
import estilos from "./Detalles.module.css";
import { actualizarMeta, borrarMeta, crearMeta } from "../../servicios/Pedidos";

function Detalles() {
	const { id } = useParams();

	const [form, setForm] = useState({
		detalles: "",
		eventos: 1,
		periodo: "semana",
		icono: "🏃‍♂️",
		meta: 52,
		plazo: "2023-01-01",
		completado: 0,
	});

	/* Destructuring the state and the dispatch function from the context. */
	const [estado, enviar] = useContext(Contexto);

	const { detalles, eventos, periodo, icono, meta, plazo, completado } = form;

	/**
	 * When the user types something in the input field, the onChange function will update the state of
	 * the form with the new value.
	 * @param event - The event object
	 * @param prop - The name of the property to be updated.
	 */
	const onChange = (event, prop) => {
		setForm((estado) => ({ ...estado, [prop]: event.target.value }));
	};

	const navegar = useNavigate();

	const metMemoria = estado.objetos[id];
	/* Checking if the id is in the state. If it is not, it will redirect to the error page. */
	useEffect(() => {
		if (!id) return;
		if (!metMemoria) {
			return navegar("/484");
		}

		/* Setting the state of the form to the object in the array with the id that is passed in the
      url. Accedemos a los objetos en el estado y obtenemos la meta que tiene esta id*/
		setForm(estado.objetos[id]);
	}, [id, metMemoria, navegar]);

	const crear = async () => {
		//FORMA LOCALY  const nuevaMeta = await crearMeta();
		const nuevaMeta = await crearMeta(form);
		//nuevaMeta se termina guardando para ejecutar enviar,y termina en nuestro estado global
		enviar({ tipo: "crear", meta: nuevaMeta });
		navegar("/lista");
	};
	//enviamos la informacion de una accion 'actualizar' - se actualiza nuestra meta en la memoria
	//una vez hecho esto navegamos nuevamente a la lista
	const actualizar = async () => {
		const metaActualizada = await actualizarMeta(form);
		enviar({ tipo: "actualizar", meta: metaActualizada });
		navegar("/lista");
	};

	// es suficiente con el id para borrar
	const borrar = async () => {
		//FORMA LOCAL const idBorrada = await borrarMeta();
		//FORMA LOCAL enviar({ tipo: 'borrar', id: idBorrada});
		await borrarMeta(form.id);
		enviar({ tipo: "borrar", id: form.id });
		navegar("/lista");
	};

	const cancelar = () => {
		navegar("/lista");
	};

	const frecuencias = ["dia", "semana", "mes", "año"];
	const iconos = ["🏃‍♂️", "🌍", "📚", "🎸", "📝"];

	return (
		<div className="tarjeta">
			<form className="p-4">
				<label className="label">
					Describe tu meta
					<input
						className="input"
						placeholder="ej. 52 caminatas"
						value={detalles}
						onChange={(e) => onChange(e, "detalles")}
					/>
				</label>
				<label className="label">
					¿Con que frecuencia deseas cumplir tu meta?{" "}
					<span>(ej. 1 vez a la semana)</span>
					<div className="flex mb-6">
						<input
							className="input mr-6"
							type="number"
							value={eventos}
							onChange={(e) => onChange(e, "eventos")}
						/>
						<select
							className="input"
							value={periodo}
							onChange={(e) => onChange(e, "periodo")}
						>
							{frecuencias.map((opcion) => (
								<option key={opcion} value={opcion}>
									{opcion}
								</option>
							))}
						</select>
					</div>
				</label>
				<label className="label">
					¿Cuantas veces deseas completar esta meta?
					<input
						className="input"
						type="number"
						value={meta}
						onChange={(e) => onChange(e, "meta")}
					/>
				</label>
				<label className="label">
					¿Tienes una fecha limite?
					<input
						className="input"
						type="date"
						value={plazo}
						onChange={(e) => onChange(e, "plazo")}
					/>
				</label>
				<label className="label">
					¿Cuantas veces haz completado ya esta meta?
					<input
						className="input"
						type="number"
						value={completado}
						onChange={(e) => onChange(e, "completado")}
					/>
				</label>
				<label className="label">
					Escoge el icono de la meta
					<select
						className="input"
						value={icono}
						onChange={(e) => onChange(e, "icono")}
					>
						{iconos.map((opcion) => (
							<option key={opcion} value={opcion}>
								{opcion}
							</option>
						))}
					</select>
				</label>
			</form>
			<div className={estilos.botones}>
				{!id && (
					<button className="boton boton--negro" onClick={crear}>
						Crear
					</button>
				)}
				{id && (
					<button className="boton boton--negro" onClick={actualizar}>
						Actualizar
					</button>
				)}
				{id && (
					<button className="boton boton--gris" onClick={borrar}>
						Borrar
					</button>
				)}
				<button className="boton boton--gris" onClick={cancelar}>
					Cancelar
				</button>
			</div>
		</div>
	);
}

export default Detalles;
