import React from 'react';
import { Link } from 'react-router-dom';
import style from './Card.module.css';
export default function Card() {
	return (
		<div className={style.card}>
			<h3>ESTA ES MI CARD</h3>
			<Link to="/details">
				<span> ME GUSTARIA TENER UN LINK A DETALLES </span>
			</Link>
		</div>
	);
}
