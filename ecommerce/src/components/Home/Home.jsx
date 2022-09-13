import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, buyProduct, removeProduct } from "../../Redux/actions";

const Home = () => {
	const dispatch = useDispatch();
	const products = useSelector(state => state.products);
	const cart = useSelector(state => state.cart);
	useEffect(() => {
		!products.length && dispatch(fetchProducts());
	}, []);
	return (
		<div>
			{products.map(product => (
				<section key={product.id}>
					<h3>{product.title}</h3>
					<p>{product.price}</p>
					<img
						src={product.image}
						alt={product.title}
						style={{ width: "100px" }}
					/>
					<button onClick={() => dispatch(buyProduct(product.id, products))}>
						Comprar
					</button>
					<button onClick={() => dispatch(removeProduct(product, cart))}>
						Eliminar del carrito
					</button>
				</section>
			))}
		</div>
	);
};

export default Home;
