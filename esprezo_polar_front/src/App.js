import React from 'react';
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import { Routes, Route } from 'react-router-dom';
import CreateProduct from './components/CreateProduct/CreateProduct.jsx';
import './App.css';
import CardDetail from './components/CardDetail/CardDetail';
import EditProduct from './components/EditProduct/EditProduct';
export default function App() {
	return (
		<div>
			<Nav />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/create" element={<CreateProduct />} />
				<Route path="/productos/:id" element={<CardDetail />} />
				<Route path="/editar/:id" element={<EditProduct />} />
			</Routes>
		</div>
	);
}
