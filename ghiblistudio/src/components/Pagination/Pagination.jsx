import React from "react";
import s from "./Pagination.module.css";

export default function Pagination({
	moviesPerPage,
	filmsRedux,
	handleSetPage,
	currentPage,
}) {
	const numeritos = [];
	//                                   22           /     4
	for (let i = 1; i <= Math.ceil(filmsRedux.length / moviesPerPage); i++) {
		numeritos.push(i);
	}
	return (
		<div>
			<ul>
				{numeritos.map(el => (
					<li
						key={el}
						onClick={() => handleSetPage(el)}
						className={currentPage === el ? s.active : ""}
					>
						{el}
					</li>
				))}
			</ul>
		</div>
	);
}
