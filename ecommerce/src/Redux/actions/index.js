import {
	FETCH_PRODUCTS,
	ADD_TO_CART,
	REMOVE_FROM_CART,
} from "../action-types.js";

export function fetchProducts() {
	return function (dispatch) {
		fetch("https://fakestoreapi.com/products")
			.then(res => res.json())
			.then(data =>
				dispatch({
					type: FETCH_PRODUCTS,
					payload: data,
				})
			);
	};
}

export const buyProduct = (prod_id, products) => dispatch => {
	// prod_id = 5
	console.log(prod_id);
	const encontrado = products.find(el => el.id === prod_id);
	if (encontrado) {
		dispatch({
			type: ADD_TO_CART,
			payload: encontrado,
		});
	}
};

export const removeProduct = (prod, cart) => dispatch => {
	const filtrado = cart.filter(el => el.id !== prod.id);
	dispatch({
		type: REMOVE_FROM_CART,
		payload: filtrado,
	});
};
