import axios from 'axios';
import * as actions from '../actionTypes';

export const getFilms = () => async (dispatch) => {
	dispatch(setLoading(true));
	try {
		const films = await axios.get('https://ghibliapi.herokuapp.com/films/#');
		dispatch({
			type: actions.GET_FILMS,
			payload: films.data,
		});
		dispatch(setLoading(false));
	} catch (error) {
		console.log(error);
	}
};
export const getFilmDetails = (id) => async (dispatch) => {
	dispatch(setLoading(true));
	try {
		const filmDetails = await axios.get(
			`https://ghibliapi.herokuapp.com/films/${id}`
		);
		dispatch({
			type: actions.GET_DETAILS,
			payload: filmDetails.data,
		});
		dispatch(setLoading(false));
	} catch (error) {
		console.log(error);
	}
};

export const setLoading = (boolLoading) => (dispatch) => {
	dispatch({
		type: actions.SET_LOADING,
		payload: boolLoading,
	});
};
