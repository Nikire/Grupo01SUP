import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Nav.module.css';
export default function Nav() {
	return (
		<nav className={style.nav}>
			<NavLink to="/">Ir a home</NavLink>
			<NavLink to="/films/create">Crear pelicula</NavLink>
		</nav>
	);
}
