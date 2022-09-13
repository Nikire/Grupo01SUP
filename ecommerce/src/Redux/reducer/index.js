import * as actions from "../action-types.js";

const initialState = {
	products: [],
	cart: [],
	prod_details: {},
};

const rootReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case actions.FETCH_PRODUCTS:
			return {
				...state,
				products: payload,
			};
		case actions.ADD_TO_CART:
			return {
				...state,
				cart: [...state.cart, payload],
			};
		case actions.REMOVE_FROM_CART:
			return {
				...state,
				cart: payload,
			};
		default:
			return state;
	}
};

export default rootReducer;
