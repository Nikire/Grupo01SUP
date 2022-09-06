import React from 'react';
import Nav from '../Nav/Nav.jsx';
import Home from '../Home/Home.jsx';
import DetailsContainer from '../DetailsContainer/DetailsContainer';
import { Routes, Route } from 'react-router-dom';

export default function AppRouter() {
	return (
		<div>
			<Nav />
			<Routes>
				{/* <Switch> */}
				<Route path="/" element={<Home />} />
				<Route path="/films/:filmId" element={<DetailsContainer />} />
			</Routes>
			{/* </Switch> */}
		</div>
	);
}
