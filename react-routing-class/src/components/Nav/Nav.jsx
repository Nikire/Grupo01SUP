<<<<<<< HEAD
import React from "react";
import style from "./Nav.module.css";
import { Link } from "react-router-dom";

=======
import React from 'react';
import { Link } from 'react-router-dom';
import style from './Nav.module.css';
>>>>>>> 1f2201fdb5145272b98fdba9b3bb208a2e97d1da
export default function Nav() {
	console.log(style);
	return (
		<div className={style.navbar}>
			<h2>ESTO ES MI NAV</h2>
			<Link to="/">
<<<<<<< HEAD
				<button>Ir al home</button>
			</Link>
			<Link to="/details">
				<button>Ir a details</button>
=======
				<button>Volver al home!</button>
>>>>>>> 1f2201fdb5145272b98fdba9b3bb208a2e97d1da
			</Link>
		</div>
	);
}
