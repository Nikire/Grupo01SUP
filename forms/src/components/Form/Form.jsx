import React, { useState } from "react";
import { validate } from "../../helper/validate";
import s from "./Form.module.css";

export default function Form() {
	const [errors, setErrors] = useState({});
	const [dataForm, setDataForm] = useState({
		name: "",
		age: "",
		email: "",
	});

	const handleSetDataForm = e => {
		setDataForm({
			...dataForm,
			[e.target.name]: e.target.value,
		});
		setErrors(
			validate({
				...dataForm,
				[e.target.name]: e.target.value,
			})
		);
	};

	const handleSubmit = e => {
		setErrors(
			validate({
				...dataForm,
			})
		);
		e.preventDefault();
		if (Object.values(errors).length === 0) {
			// fetch(`http://localhost:3000`, {
			// 	method: "POST",
			// 	body: dataForm,
			// });
			console.log("funcionó");
		} else {
			console.log("errorsito");
		}
	};

	return (
		<form onSubmit={e => handleSubmit(e)}>
			<input
				type="text"
				onChange={e => handleSetDataForm(e)}
				placeholder="name completo"
				name="name"
				value={dataForm.name}
				className={`${errors.name && s.error}`}
			/>
			{errors.name && <span style={{ color: "red" }}>{errors.name}</span>}
			<input
				type="number"
				onChange={e => handleSetDataForm(e)}
				placeholder="age"
				name="age"
				value={dataForm.age}
			/>
			{errors.age && <span style={{ color: "red" }}>{errors.age}</span>}

			<input
				type="text"
				onChange={e => handleSetDataForm(e)}
				placeholder="email"
				name="email"
				value={dataForm.email}
			/>
			{errors.email && <span style={{ color: "red" }}>{errors.email}</span>}
			<br />
			<input type="submit" disabled={dataForm.name === ""} />
		</form>
	);
}
