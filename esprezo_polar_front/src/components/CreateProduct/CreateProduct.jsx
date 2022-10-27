import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import s from './CreateProduct.module.css';
import { createProduct } from '../../redux/actions';
import { useDispatch } from 'react-redux';
export default function CreateProduct() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [input, setInput] = useState({
		name: '',
		price: 0,
		description: '',
	});
	const handleInputChange = (e) => {
		setInput({ ...input, [e.target.name]: e.target.value });
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(createProduct(input));
		Swal.fire('Creado!', 'El producto se creó con éxito', 'success');
		navigate('/');
	};

	return (
		<div className="centrar">
			<form className={s.container} onSubmit={handleSubmit}>
				<input
					onChange={handleInputChange}
					type="text"
					name="name"
					placeholder="Name..."
				></input>
				<input
					onChange={handleInputChange}
					type="number"
					name="price"
					placeholder="Price..."
				></input>
				<textarea
					onChange={handleInputChange}
					name="description"
					placeholder="Description..."
				></textarea>
				<button type="submit"> AÑADIR PRODUCTO </button>
			</form>
		</div>
	);
}
