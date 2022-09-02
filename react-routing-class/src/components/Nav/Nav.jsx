import React from 'react';
import style from './Nav.module.css';
export default function Nav() {
	console.log(style);
	return (
		<div className={style.navbar}>
			<h2>ESTO ES MI NAV</h2>
		</div>
	);
}
