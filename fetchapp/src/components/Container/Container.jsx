import React, { Component } from 'react';
import Card from '../Card/Card';
import './Container.css';
export default class Container extends Component {
	constructor(props) {
		super(props);
		this.state = { pokimon: [] };
	}
	//const [pokimon,setPokimon]= useState([])
	//axios.get('https://pokeapi.co/api/v2/pokemon').then(data=>)
	componentDidMount() {
		fetch('https://pokeapi.co/api/v2/pokemon')
			.then((res) => res.json())
			.then((data) => this.setState({ pokimon: data.results }));
	}
	render() {
		return (
			<div>
				<h2>este es mi pi :D</h2>
				<button onClick={() => console.log(this.state.pokimon)}>aber</button>
				<div className="container">
					{/* //if(this.state.pokimon) this.state.pokimon.map
          //this.state.pokimon && this.state.pokimon.map */}
					{/* if(){}else{}
          (loading) ? "loading" : "componente" */}

					{this.state.pokimon?.map((e) => (
						<Card data={e} key={e.name} />
					))}
				</div>
			</div>
		);
	}
}
