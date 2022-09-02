import React from 'react';
import { Link } from 'react-router-dom';
import style from './Nav.module.css';
export default function Nav() {
	console.log(style);
	return (
		<div className={style.navbar}>
			<h2>ESTO ES MI NAV</h2>
			<Link to="/">
				<button>Volver al home!</button>
			</Link>
		</div>
	);
}
