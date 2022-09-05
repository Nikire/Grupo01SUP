import "./App.css";
//imports
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
	);
}

export default App;
