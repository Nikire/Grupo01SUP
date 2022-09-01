import React, { Fragment } from "react";
import Button from "../Button/Button.jsx";

const Container = () => {
	// Usando el operador ternario validar que el contador no sea
	// menor que 0 ni que supere los 7

	const [count, setCount] = React.useState({
		latitud: "32",
		longitud: "-58",
	});
	function handleSumar() {
		setCount(count + 1);
	}

	// function handleSumarAsync() {
	// 	setCount(papasConQueso => ({
	// 		...papasConQueso,
	// 		count: 1000,
	// 		latitud: 32323232,
	// 	}));
	// }

	function handleRestar() {
		setCount(count - 1);
	}
	return (
		<>
			{/* <button onClick={handleSumarAsync}>Suma Async</button> */}
			<button onClick={handleSumar}>Suma</button>
			<span>{count.count ? count.count : "No hay count papucho"}</span>
			<button onClick={() => handleRestar()}>Resta</button>
			<button onClick={() => console.log(count)}>console.log</button>
			{/* <Button text="Click me!" />
			<Button text="No me clickees" /> */}
		</>
	);
};

export default Container;
