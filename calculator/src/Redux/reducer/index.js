import * as actions from "../action-types.js";

const initialState = {
	value: 0,
	resultCache: [],
};
//                                      {type,payload}
function rootReducer(state = initialState, action) {
	//  SUMAR
	switch (action.type) {
		case actions.SUMAR:
			return {
				...state,
				// resultCache: state.resultCache.concat(action.payload),
				resultCache: [...state.resultCache, action.payload],
				value: action.payload.result,
			};
		case actions.RESTAR:
			return {
				...state,
				resultCache: [...state.resultCache, action.payload],
				value: action.payload.result,
			};
		case actions.OPERATION:
			return {
				...state,
				resultCache: [...state.resultCache, action.payload],
				value: action.payload.result,
			};
		default:
			return state;
	}
}

export default rootReducer;
