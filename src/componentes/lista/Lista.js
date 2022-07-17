import { useContext } from "react";
import { Outlet } from "react-router";
import { Contexto } from "../../servicios/Memoria";
import Meta from "./Meta";

function Lista() {
	const [estado] = useContext(Contexto);

	/* Using the Contexto to get the state and the function to change the state. */

	return (
		<>
			{estado.orden.map((id) => (
				<Meta key={id} {...estado.objetos[id]}></Meta>
			))}

			<Outlet />
		</>
	);
}

export default Lista;
