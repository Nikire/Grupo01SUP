import React, { useEffect } from 'react';
import { getFilms } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../Card/Card';
import { Link } from 'react-router-dom';

const CardsContainer = () => {
	const dispatch = useDispatch();
	const filmsRedux = useSelector((state) => state.allFilms);
	useEffect(() => {
		dispatch(getFilms());
	}, [dispatch]);
	return (
		<div>
			<button onClick={() => console.log(filmsRedux)}>asdf</button>
			{filmsRedux.length &&
				filmsRedux.map((film) => (
					<Link key={film.id} to={`/films/${film.id}`}>
						<Card film={film} />
					</Link>
				))}
		</div>
	);
};

export default CardsContainer;

//http://localhost:3000/films/2baf70d1-42bb-4437-b551-e5fed5a87abe
