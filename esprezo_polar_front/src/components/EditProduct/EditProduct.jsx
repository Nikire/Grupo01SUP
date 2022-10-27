import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { useNavigate, useParams } from 'react-router-dom';
import s from './EditProduct.module.css';
import { editProduct } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';

export default function EditProduct() {
	const { id } = useParams();
	const details = useSelector((state) => state.productDetails);
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [description, setDescription] = useState(details.description);
	const handleInputChange = (e) => {
		setDescription(e.target.value);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(editProduct(description, id));
		Swal.fire('Modificado!', 'El producto se modificó con éxito', 'success');
		navigate('/');
	};

	return (
		<div className="centrar">
			<form className={s.container} onSubmit={handleSubmit}>
				<h2>{details.name}</h2>
				<span>{details.price}</span>
				<textarea
					onChange={handleInputChange}
					value={description}
					name="description"
					placeholder="Description..."
				></textarea>
				<button type="submit"> MODIFICAR PRODUCTO </button>
			</form>
		</div>
	);
}
