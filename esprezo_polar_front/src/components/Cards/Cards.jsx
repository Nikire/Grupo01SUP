import React from 'react';
import { Link } from 'react-router-dom';
export default function Cards({ products }) {
	return (
		<div>
			{products.map((card) => (
				<Link to={'/productos/' + card.id} key={card.id}>
					<h3>{card.name}</h3>
					<span>{card.price}</span>
					<p>{card.description}</p>
					<br />
				</Link>
			))}
		</div>
	);
}
