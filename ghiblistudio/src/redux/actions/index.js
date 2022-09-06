import axios from 'axios';
import * as actions from '../actionTypes';

export const getFilms = () => async (dispatch) => {
	try {
		const films = await axios.get('https://ghibliapi.herokuapp.com/films/#');
		dispatch({
			type: actions.GET_FILMS,
			payload: films.data,
		});
	} catch (error) {
		console.log(error);
	}
};
export const getFilmDetails = (id) => async (dispatch) => {
	try {
		const filmDetails = await axios.get(
			`https://ghibliapi.herokuapp.com/films/${id}`
		);
		dispatch({
			type: actions.GET_DETAILS,
			payload: filmDetails.data,
		});
	} catch (error) {
		console.log(error);
	}
};
