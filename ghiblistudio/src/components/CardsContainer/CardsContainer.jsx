import React, { useEffect } from "react";
import { getFilms } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const CardsContainer = () => {
	const dispatch = useDispatch();
	const filmsRedux = useSelector(state => state.allFilms);
	useEffect(() => {
		dispatch(getFilms());
	}, [dispatch]);
	return (
		<div>
			<button onClick={() => console.log(filmsRedux)}>asdf</button>
		</div>
	);
};

export default CardsContainer;
