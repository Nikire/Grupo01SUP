import React, { useState } from "react";

export default function CreateFilm() {
	const [input, setInput] = useState({
		name: "",
		description: "",
		image: "",
	});
	//input.name
	//input["name"]

	const [errors, setErrors] = useState({});

	const handleChange = e => {
		setInput({
			...input,
			[e.target.name]: e.target.value,
		});
		console.log({
			...input,
			[e.target.name]: e.target.value,
		});
	};
	const handleSubmit = e => {
		e.preventDefault();
		//dispatch(createFilm(input))
		if (!input.name || input.name.length > 20)
			setErrors({ ...errors, name: true });
		else setErrors({ ...errors, name: false });
		console.log(input); //caso success
	};
	//-------------VALIDACIONES------------------
	//name -> 20 caracter max y que no sea vacio
	return (
		<div>
			<h1>Crear una pelicula</h1>
			<form onSubmit={e => handleSubmit(e)}>
				<input
					type="text"
					placeholder="name"
					onChange={e => handleChange(e)}
					name="name"
					value={input.name}
				/>
				<span hidden={!errors.name}> EL NAME ESTÁ MAL</span>
				<input
					type="description"
					placeholder="description"
					onChange={e => handleChange(e)}
					name="description"
					value={input.description}
				/>
				<input
					type="text"
					placeholder="image"
					name="image"
					onChange={e => handleChange(e)}
					value={input.image}
				/>
				<button type="submit">CREAR PELICULITA</button>
			</form>
		</div>
	);
}
