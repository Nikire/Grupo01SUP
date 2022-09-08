import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Nav.module.css";

export default function Nav() {
	return (
		<nav className={s.nav}>
			<NavLink
				to="/"
				className={({ isActive }) => {
					return `${s.nav__item} ${isActive ? s.papasConQueso : undefined}`;
				}}
			>
				Ir a home
			</NavLink>
			<NavLink
				to="/films/create"
				className={({ isActive }) => {
					return `${s.nav__item} ${isActive ? s.papasConQueso : undefined}`;
				}}
			>
				Crear pelicula
			</NavLink>
		</nav>
	);
}
