// TYPE module
// import { Express } from "express";
// Esto vendría del controller (en algún futuro no tan lejano)
// const {deleteProducto} = require('./controller/products.js')

// TYPE commonjs
const express = require('express');
// const controller = require("./controller/index.js");
var morgan = require('morgan');
var cors = require('cors');
const app = express();
// middleware para que la app pueda leer json
app.use(cors());
app.use(morgan('combined'));
app.use(express.json());

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Estoy en el port ${PORT}`));

// CRUD = Create, Read, Update, Delete

/*
Aspectos importantes
*/

let arr = [
	{
		id: 1,
		name: 'pistola',
		price: 2300,
		description: 'buen bandolero',
	},
	{
		id: 2,
		name: 'Espada',
		price: 2300,
		description: 'Linda katana bro',
	},
	{
		id: 3,
		name: 'escudo',
		price: 2300,
		description: 'Lo que tankeas lpm',
	},
	{
		id: 4,
		name: 'empanadas',
		price: 2300,
		description: 'tengo alto hambre',
	},
];

app.get('/productos', (req, res) => {
	res.status(200).json(arr);
});
app.get('/productos/:id', (req, res) => {
	const { id } = req.params;
	console.log(id);
	if (!id) return res.status(404).json({ msg: 'not found' });
	let finded = arr.find((el) => el.id === parseInt(id));
	console.log(finded);
	res.status(200).json(finded);
});

// UPDATE PARA EXPRESS ES PUT
app.put('/productos/:prod_id', (req, res) => {
	const { prod_id } = req.params;
	const description = req.body.description;
	const newArr = arr.map((el) =>
		el.id === parseInt(prod_id) ? { ...el, description: description } : el
	);
	arr = newArr;
	res.status(202).json(arr);
});

// BODY, PARAMS, QUERY

// READ
// PARAMS
// app.get("/:array", (req, res) => {
// 	// sin destructuring
// 	const array = req.params.array;
// 	// con destructuring
// 	// const { array } = req.params;
// 	res.status(200).json(array);
// });

// QUERY
// app.get("/query", (req, res) => {
// 	// http://localhost:3001/query?producto=kurama
// 	// const producto = req.query.producto;
// 	const { producto } = req.query;
// 	res.status(200).json(producto);
// });

// BODY
app.post('/productos', (req, res) => {
	const { price, name, description } = req.body;
	const id = arr[arr.length - 1].id + 1;
	console.log(id);
	arr.push({
		id,
		price,
		name,
		description,
	});
	res.status(201).json(arr);
});

// CREATE
app.post('/crearProducto', (req, res) => {
	// controller.crearProducto(
	// {
	// name:'Espada',
	// price:2300,
	// description:'Linda katana bro'
	// }
	//)
});

// DELETE
app.delete('/productos/:prod_id', async (req, res) => {
	// const {name} = req.body;
	// const newArr = arr.filter(el=>el.name !== name)
	const { prod_id } = req.params;
	arr = arr.filter((el) => el.id !== parseInt(prod_id));
	res.status(200).json(arr);

	// try {
	// 	await deleteProducto()
	// 	res.status(200).json('se borro todo papi')
	// } catch (error) {
	// 	res.status(400).json(error)
	// }
});
