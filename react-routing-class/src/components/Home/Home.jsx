import React from 'react';
import style from './Home.module.css';
import Card from '../Card/Card';
export default function Home() {
	return (
		<div className={style.home}>
			<h1 className={style.title}> ESTE ES MI HOME </h1>
			<Card />
		</div>
	);
}
