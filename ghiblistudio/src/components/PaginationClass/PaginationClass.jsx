import React, { Component } from "react";
import { connect } from "react-redux";
import { getFilms } from "../../redux/actions";
import s from "../Pagination/Pagination.module.css";

class PaginationClass extends Component {
	constructor() {
		super();
		this.state = {
			numeritos: [],
		};
	}
	prueba = function () {
		for (
			let i = 1;
			i <= Math.ceil(this.props.allFilms.length / this.props.moviesPerPage);
			i++
		) {
			this.state.numeritos.push(i);
		}
	};
	componentDidMount() {
		!this.state.numeritos.length && this.prueba();
	}

	render() {
		return (
			<div>
				<ul>
					{this.state.numeritos.map(el => (
						<li
							key={el}
							onClick={() => this.props.handleSetPage(el)}
							className={this.props.currentPage === el ? s.active : ""}
						>
							{el}
						</li>
					))}
				</ul>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		allFilms: state.allFilms,
	};
};

// this.props.getFilms()
const mapDispatchToProps = dispatch => {
	return {
		getFilms: () => dispatch(getFilms()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(PaginationClass);
