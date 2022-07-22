import React from "react";
import { Link } from "react-router-dom";
import estilos from "./Botonmenu.module.css";


interface VinculoProps {
	Icono: any; //anny ayuda en situaciondes rapidas aunque  no es buena practica
	texto: string;
	to: string;
}


function Botonmenu({ Icono, texto, to }: VinculoProps) {
	return (
		<Link to={to} className={estilos.botonmenu}>
			<Icono className={estilos.icono} />
			{texto && <span className={estilos.texto}>{texto}</span>}
		</Link>
	);
}

export default Botonmenu;
