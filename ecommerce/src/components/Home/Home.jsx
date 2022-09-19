import React, { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, buyProduct, removeProduct } from "../../Redux/actions";
import Cart from "../Cart/Cart";

const Home = () => {
	const dispatch = useDispatch();
	const products = useSelector(state => state.products);
	const cart = useSelector(state => state.cart);
	const [precioTotal,setPrecioTotal] = useState(0)
	
	useEffect(() => {
		!products.length && dispatch(fetchProducts());
	}, []);

	useEffect(()=>{
		setPrecioTotal(cart.reduce((acc,el)=>acc+el.price,0))
	},[cart])
	
	return (
		<div>
			<h1>valor de nuestro chango: {precioTotal}</h1>
		<Cart cart={cart}/>
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
