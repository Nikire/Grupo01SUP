import * as actions from '../actionTypes';

const initialState = {
	allProducts: [],
	productDetails: {},
	loading: true,
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case actions.GET_PRODUCTS:
			return {
				...state,
				allProducts: action.payload,
			};
		case actions.GET_PRODUCT_DETAILS:
			return {
				...state,
				productDetails: action.payload,
			};
		case actions.SET_LOADING:
			return {
				...state,
				loading: action.payload,
			};
		default:
			return state;
	}
};

export default rootReducer;
