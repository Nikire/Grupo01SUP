import React, { useEffect, useState } from "react";
import { getFilms } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import Card from "../Card/Card";
import { Link } from "react-router-dom";
import Spinner from "../Spinner/Spinner";
import s from "./CardsContainer.module.css";
import Pagination from "../Pagination/Pagination";
import PaginationClass from "../PaginationClass/PaginationClass";

const CardsContainer = () => {
	const dispatch = useDispatch();
	const filmsRedux = useSelector(state => state.allFilms);
	const loading = useSelector(state => state.loading);
	const [currentPage, setCurrentPage] = useState(1);
	const [moviesPerPage, setMoviesPerPage] = useState(5);
	//                   2        *     4         = 8
	const lastIndex = currentPage * moviesPerPage;
	//                    8         -    4      =  4
	const firstIndex = lastIndex - moviesPerPage;
	const currentMovies = filmsRedux.slice(firstIndex, lastIndex);

	const handleSetPage = num => {
		setCurrentPage(num);
	};

	const handleSetMoviesPerPage = num => {
		setCurrentPage(1);
		setMoviesPerPage(parseInt(num));
	};

	useEffect(() => {
		dispatch(getFilms());
	}, [dispatch]);

	useEffect(() => {
		console.log(firstIndex, lastIndex);
	}, [lastIndex, firstIndex]);

	return (
		<div className={s.CardsContainer}>
			{loading ? (
				<Spinner />
			) : filmsRedux.length ? (
				<>
					<select
						name=""
						id=""
						onChange={e => handleSetMoviesPerPage(e.target.value)}
					>
						<option value="5">5</option>
						<option value="3">3</option>
						<option value="10">10</option>
					</select>
					<PaginationClass
						handleSetPage={handleSetPage}
						moviesPerPage={moviesPerPage}
						currentPage={currentPage}
					/>
					{/* <Pagination
					/> */}
					{currentMovies.map(film => (
						<Link key={film.id} to={`/films/${film.id}`}>
							<Card film={film} />
						</Link>
					))}
				</>
			) : (
				<Spinner />
			)}
		</div>
	);
};

export default CardsContainer;

//http://localhost:3000/films/2baf70d1-42bb-4437-b551-e5fed5a87abe
