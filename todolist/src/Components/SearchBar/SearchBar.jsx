import React from "react";

export default function SearchBar({ handleSetInput, handleSetTodo }) {
	return (
		<>
			<input type="text" name="search" onChange={e => handleSetInput(e)} />
			<button onClick={handleSetTodo}>Agregar Todo</button>
		</>
	);
}
