import React from "react";
import style from "./Nav.module.css";
import { Link } from "react-router-dom";

export default function Nav() {
	console.log(style);
	return (
		<div className={style.navbar}>
			<h2>ESTO ES MI NAV</h2>
			<Link to="/">
				<button>Ir al home</button>
			</Link>
			<Link to="/details">
				<button>Ir a details</button>
			</Link>
		</div>
	);
}
