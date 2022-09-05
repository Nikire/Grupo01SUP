import React, { useState } from "react";
import "./Card.css";

export default function Card({ data }) {
	const [pokemon, setPokemon] = useState({});
	fetch(data.url)
		.then(res => res.json())
		.then(result => setPokemon(result));
	return (
		<div className="card">
			<p>{pokemon.name}</p>
			<img src={pokemon.sprites?.front_default} alt={pokemon.name} />
		</div>
	);
}
