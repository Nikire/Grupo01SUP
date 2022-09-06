import React from 'react';

export default function Details({
	details: {
		title,
		original_title,
		description,
		director,
		producer,
		release_date,
	},
}) {
	return (
		<div>
			<h1>{title}</h1>
			<h2 className="subtitle">{original_title}</h2>
			<p>{description}</p>
		</div>
	);
}
