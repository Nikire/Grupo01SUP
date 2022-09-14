import { OPERATION } from "../action-types.js";

// {
// 	num1: "",
// 	type: "",
// 	num2: "",
// 	result: "",
// }

export const operacion = (num1, num2, tipoOperacion) => dispatch => {
	num1 = parseInt(num1);
	num2 = parseInt(num2);
	let result;
	console.log(tipoOperacion);
	switch (tipoOperacion) {
		case "+":
			result = num1 + num2;
			break;
		case "-":
			result = num1 - num2;
			break;
		default:
			result = 0;
			break;
	}
	dispatch({
		type: OPERATION,
		payload: {
			num1: num1,
			num2,
			operationType: tipoOperacion,
			result: result,
		},
	});
};

// export const sumar = (num1, num2) => dispatch => {
// 	num1 = parseInt(num1);
// 	num2 = parseInt(num2);
// 	const resultado = num1 + num2;
// 	const todosLosValores = {
// 		num1: num1,
// 		num2: num2,
// 		type: "+",
// 		result: resultado,
// 	};
// 	dispatch({
// 		type: SUMAR,
// 		payload: todosLosValores,
// 	});
// };

// export function restar(num1, num2) {
// 	return function (dispatch) {
// 		num1 = parseInt(num1);
// 		num2 = parseInt(num2);
// 		const resultado = num1 - num2;
// 		const todosLosValores = {
// 			num1: num1,
// 			num2: num2,
// 			type: "-",
// 			result: resultado,
// 		};
// 		dispatch({
// 			type: RESTAR,
// 			payload: todosLosValores,
// 		});
// 	};
// }
