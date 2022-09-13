import React, { Component } from "react";
import { connect } from "react-redux";
import { buyProduct, removeProduct, fetchProducts } from "../../Redux/actions";

class HomeClass extends Component {
	componentDidMount() {
		!this.props.products.length && this.props.fetchProducts();
	}
	render() {
		return (
			<div>
				{this.props.products.length ? (
					this.props.products.map(product => (
						<section key={product.id}>
							<h3>{product.title}</h3>
							<p>{product.price}</p>
							<img
								src={product.image}
								alt={product.title}
								style={{ width: "100px" }}
							/>
							<button
								onClick={() =>
									this.props.buyProduct(product.id, this.props.products)
								}
							>
								Comprar
							</button>
							<button
								onClick={() =>
									this.props.removeProduct(product, this.props.cart)
								}
							>
								Eliminar del carrito
							</button>
						</section>
					))
				) : (
					<h1>cargando</h1>
				)}
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		products: state.products,
		cart: state.cart,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		fetchProducts: () => dispatch(fetchProducts()),
		buyProduct: (prod_id, products) => dispatch(buyProduct(prod_id, products)),
		removeProduct: (prod, cart) => dispatch(removeProduct(prod, cart)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeClass);
