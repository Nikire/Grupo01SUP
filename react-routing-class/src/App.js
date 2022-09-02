import './App.css';
//imports
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
	);
}

export default App;
