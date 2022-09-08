import React from "react";
import s from "./Card.module.css";

const Card = ({ film: { title, image } }) => {
	return (
		<div className={s.card}>
			<h2 className={s.card__title}>{title}</h2>
			<img src={image} alt={title} className={s.card__img} />
		</div>
	);
};

export default Card;
