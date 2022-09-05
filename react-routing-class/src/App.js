import "./App.css";
//imports
<<<<<<< HEAD
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Details from "./components/Details/Details";
import Nav from "./components/Nav/Nav";
function App() {
	return (
		<>
			{/* Acá irían las rutas */}
			<Nav />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/details" component={Details} />
			</Switch>
		</>
=======
import Home from './components/Home/Home';
import Nav from './components/Nav/Nav';
import Details from './components/Details/Details';
import { Switch, Route } from 'react-router-dom';
function App() {
	return (
		<div className="App">
			<Nav />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/details" component={Details} />
			</Switch>
		</div>
>>>>>>> 1f2201fdb5145272b98fdba9b3bb208a2e97d1da
	);
}

export default App;
