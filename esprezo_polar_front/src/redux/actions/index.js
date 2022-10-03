import axios from 'axios';
import * as actions from '../actionTypes';

/* export const getFilms = () => async dispatch => {
	dispatch(setLoading(true));
	try {
		const films = await axios.get("https://ghibliapi.herokuapp.com/films/#");
		dispatch({
			type: actions.GET_FILMS,
			payload: films.data,
		});
		dispatch(setLoading(false));
	} catch (error) {
		console.log(error);
	}
}; */

export const getProducts = () => async (dispatch) => {
	dispatch(setLoading(true));
	try {
		const products = await axios.get('http://localhost:3001/productos/');
		dispatch({
			type: actions.GET_PRODUCTS,
			payload: products.data,
		});
		dispatch(setLoading(false));
	} catch (error) {
		console.log(error);
	}
};

export const getProductDetails = (id) => async (dispatch) => {
	dispatch(setLoading(true));
	try {
		const productDetail = await axios.get(
			'http://localhost:3001/productos/' + id
		);
		dispatch({
			type: actions.GET_PRODUCT_DETAILS,
			payload: productDetail.data,
		});
		dispatch(setLoading(false));
	} catch (error) {
		console.log(error);
	}
};

export const createProduct = (info) => async (dispatch) => {
	try {
		axios.post('http://localhost:3001/productos/', info);
	} catch (e) {
		console.log(e);
	}
};

export const eliminarProducto = (id) => async (dispatch) => {
	try {
		axios.delete('http://localhost:3001/productos/' + id);
	} catch (e) {
		console.log(e);
	}
};

export const editProduct = (description, id) => async (dispatch) => {
	try {
		axios.put('http://localhost:3001/productos/' + id, { description });
	} catch (e) {
		console.log(e);
	}
};

export const setLoading = (boolLoading) => (dispatch) => {
	dispatch({
		type: actions.SET_LOADING,
		payload: boolLoading,
	});
};
