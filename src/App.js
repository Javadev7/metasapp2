import { useContext, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./componentes/compartidos/Layout";
import Modal from "./componentes/compartidos/Modal";
import NoEncontrado from "./componentes/compartidos/NoEncontrado";
import Lista from "./componentes/lista/Lista";
import Detalles from "./componentes/nueva/Detalles";
import { Contexto } from "./servicios/Memoria";
import { pedirMetas } from "./servicios/Pedidos";

function App() {
	//la funcion enviar, enviara acciones
	const [, enviar] = useContext(Contexto);

	//para llamar una funcion al iniciar un componente y le ponemos una lista
	//vacia para que se llame solo una vez cuando se monte el componente
	useEffect(() => {
		//jalamos el servicio creado
		async function fetchData() {
			const metas = await pedirMetas();
			console.log('Soy "metas"  y asi llego a Lista.js:', metas);
			enviar({ tipo: "colocar", metas });
		}
		fetchData();
	}, []);

	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<Lista />} />
				<Route path="/lista" element={<Lista />}>
					<Route
						path="/lista/:id"
						element={
							<Modal>
								<Detalles />
							</Modal>
						}
					/>
				</Route>
				<Route path="/nueva" element={<Detalles />} />
			</Route>
			<Route path="*" element={<NoEncontrado />} />
		</Routes>
	);
}

export default App;
