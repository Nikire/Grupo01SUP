import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { operacion } from "../../Redux/actions";

const Home = () => {
	const dispatch = useDispatch();
	const valueRedux = useSelector(state => state.value);
	const resultCache = useSelector(state => state.resultCache);
	const [values, setValues] = React.useState({
		value1: "",
		value2: "",
	});

	const handleSetValues = e => {
		setValues({
			...values,
			[e.target.name]: e.target.value,
		});
	};
	const { value1 } = values;
	const value2 = values.value2;

	const handleSendOperation = tipoOperacion => {
		setValues({
			value1: "",
			value2: "",
		});
		dispatch(operacion(value1, value2, tipoOperacion));
	};

	return (
		<div>
			<input
				type="number"
				name="value1"
				value={value1}
				placeholder="value1"
				onChange={e => handleSetValues(e)}
			/>
			<input
				type="number"
				name="value2"
				value={value2}
				placeholder="value2"
				onChange={e => handleSetValues(e)}
			/>
			<button onClick={() => handleSendOperation("+")}>Sumar</button>
			<span>{valueRedux}</span>
			<button onClick={() => handleSendOperation("-")}>Restar</button>
			<ul>
				{resultCache.length ? (
					resultCache.map((el, i) => (
						<li key={i}>
							{el.num1} {el.operationType} {el.num2} = {el.result}
						</li>
					))
				) : (
					<li>No hay historial</li>
				)}
			</ul>
		</div>
	);
};

export default Home;
