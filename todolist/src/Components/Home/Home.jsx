import React, { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import TodosContainer from "../TodosContainer/TodosContainer";

const Home = () => {
	const [toDos, setToDos] = useState([]);
	const [searchInput, setSearchInput] = useState("");
	const handleSetInput = event => {
		setSearchInput(event.target.value.trim());
	};
	const handleSetTodo = () => {
		searchInput && setToDos([searchInput, ...toDos]);
	};
	return (
		<div>
			<h1>Nuestra ToDo List</h1>
			<button
				style={{ background: "red", color: "white", padding: ".8em" }}
				onClick={() => console.log(searchInput)}
			>
				ver que carajo tenemos en el searchInput
			</button>
			<SearchBar
				handleSetTodo={handleSetTodo}
				handleSetInput={handleSetInput}
			/>
			<TodosContainer toDos={toDos} />
		</div>
	);
};

export default Home;
