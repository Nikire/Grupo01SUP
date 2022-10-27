import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { eliminarProducto, getProductDetails } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
export default function CardDetail() {
	const { id } = useParams();
	const dispatch = useDispatch();
	const details = useSelector((state) => state.productDetails);
	const navigate = useNavigate();
	useEffect(() => {
		dispatch(getProductDetails(id));
	}, [dispatch]);

	const handleEdit = () => {
		navigate('/editar/' + id);
	};

	const handleBorrar = () => {
		console.log('borrame');
		dispatch(eliminarProducto(id));
		Swal.fire('Borrado!', 'El producto se borró con éxito', 'success');
		navigate('/');
	};
	return (
		<div>
			<h2>{details.name}</h2>
			<span>{details.price}</span>
			<p>{details.description}</p>

			<button onClick={handleBorrar} style={{ background: 'red' }}>
				ELIMINAME WACHO
			</button>
			<button onClick={handleEdit} style={{ background: 'cyan' }}>
				EDITAME WACHO
			</button>
		</div>
	);
}
