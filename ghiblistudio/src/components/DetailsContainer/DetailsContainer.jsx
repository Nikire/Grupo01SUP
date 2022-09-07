import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getFilmDetails } from '../../redux/actions/index.js';
import Details from '../Details/Details.jsx';
import Spinner from '../Spinner/Spinner.jsx';
export default function DetailsContainer() {
	const { filmId } = useParams();
	const dispatch = useDispatch();
	const details = useSelector((state) => state.filmDetails);
	const loading = useSelector((state) => state.loading);

	useEffect(() => {
		dispatch(getFilmDetails(filmId));
	}, [dispatch]);

	return loading ? <Spinner /> : <Details details={details} />;
}
