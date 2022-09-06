import * as actions from '../actionTypes';

const initialState = {
	allFilms: [],
	filmDetails: {},
	loading: true,
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case actions.GET_FILMS: {
			return {
				...state,
				allFilms: action.payload,
			};
		}
		case actions.GET_DETAILS: {
			return {
				...state,
				filmDetails: action.payload,
			};
		}

		default:
			return state;
	}
};

export default rootReducer;
