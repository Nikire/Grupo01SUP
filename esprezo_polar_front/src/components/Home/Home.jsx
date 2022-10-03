import React from 'react';
import s from './Home.module.css';
import Spinner from '../Spinner/Spinner';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getProducts } from '../../redux/actions';
import Cards from '../Cards/Cards';

export default function Home() {
	const dispatch = useDispatch();
	const productsRedux = useSelector((state) => state.allProducts);
	console.log(productsRedux);
	useEffect(() => {
		dispatch(getProducts());
	}, [dispatch]);
	return (
		<div className="centrar">
			{/* <Spinner /> */}
			<Cards products={productsRedux} />
		</div>
	);
}
