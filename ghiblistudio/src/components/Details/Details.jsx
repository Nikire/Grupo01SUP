import React from 'react';

export default function Details({
	details: {
		title,
		original_title,
		description,
		director,
		producer,
		release_date,
		movie_banner,
	},
}) {
	return (
		<div>
			<h1>{title}</h1>
			<h2 className="subtitle">
				{original_title} - {release_date}
			</h2>
			<h3>
				Director: {director} - Producer: {producer}
			</h3>
			<p>{description}</p>

			<img src={movie_banner} alt={title} />
		</div>
	);
}
