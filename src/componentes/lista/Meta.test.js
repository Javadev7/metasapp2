import Meta from "./Meta"
const { render, screen  } = require("@testing-library/react")

jest.mock("react-router-dom", () => {
	//obtiene la libreria antes de que se cree el mock
	const moduloOriginal = jest.requireActual("react-router-dom");
	//retorna la version mock de esta libreria 
	return {
		...moduloOriginal,
	// se renderiza todos los children para que el contenido de link no se pierda
		Link: ({children}) => <div>{children}</div>
	};
})

describe('Componente Meta', () => {
	it('renderiza el boton', () => {
	//render monta nuestro componente en un DOM ficticio
		render(<Meta />);
		//screen es una representation del DOM que viene con algunos elementos utiles 
		//para acceder a diferentes elementos del DOM 
		// eslint-disable-next-line no-unused-expressions
		const boton = screen.getByText('Completado')
		//revisa que el boton este dentro del documento
		expect(boton).toBeInTheDocument()
	});
	it('renderiza icono', () => {
	//render monta nuestro componente en un DOM ficticio
		render(<Meta icono='🤣' />);
		//screen es una representation del DOM que viene con algunos elementos utiles 
		//para acceder a diferentes elementos del DOM 
		// eslint-disable-next-line no-unused-expressions
		const icono = screen.getByText("🤣");
		//revisa que el icono este dentro del documento
		expect(icono).toBeInTheDocument()
	})
})