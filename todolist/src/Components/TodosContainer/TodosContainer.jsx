import React from "react";
import s from "./TodosContainer.module.css";

export default function TodosContainer({ toDos }) {
	return (
		<div className={s.todosContainer}>
			<ul>
				{!toDos.length ? (
					<h2>No hay tareas</h2>
				) : (
					toDos.map((el, i) => (
						<li key={el + i} id={el + i}>
							{el} <span>&times;</span>
						</li>
					))
				)}
			</ul>
		</div>
	);
}
