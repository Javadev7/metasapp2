import { Link } from "react-router-dom";
import estilos from "./Botonmenu.module.css";

function Botonmenu({ Icono, texto, to }) {
	return (
		<Link to={to} className={estilos.botonmenu}>
			<Icono className={estilos.icono} />
			{texto && <span className={estilos.texto}>{texto}</span>}
		</Link>
	);
}

export default Botonmenu;
