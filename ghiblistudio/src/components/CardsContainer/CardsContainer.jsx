import React, { useEffect } from "react";
import { getFilms } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import Card from "../Card/Card";
import { Link } from "react-router-dom";
import Spinner from "../Spinner/Spinner";
import s from "./CardsContainer.module.css";

const CardsContainer = () => {
	const dispatch = useDispatch();
	const filmsRedux = useSelector(state => state.allFilms);
	const loading = useSelector(state => state.loading);

	useEffect(() => {
		dispatch(getFilms());
	}, [dispatch]);
	return (
		<div className={s.CardsContainer}>
			{/* <button onClick={() => console.log(filmsRedux)}>asdf</button> */}
			{loading ? (
				<Spinner />
			) : filmsRedux.length ? (
				filmsRedux.map(film => (
					<Link key={film.id} to={`/films/${film.id}`}>
						<Card film={film} />
					</Link>
				))
			) : (
				<Spinner />
			)}
		</div>
	);
};

export default CardsContainer;

//http://localhost:3000/films/2baf70d1-42bb-4437-b551-e5fed5a87abe
