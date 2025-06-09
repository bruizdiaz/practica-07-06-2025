//CommonJS
// const express = require('express');

//---Importaciones---
//ESModule
import express from 'express';
import data from './database.js';
//---Importaciones---

//--Declaraciones de constantes o variables--
const app = express();
const port = 3000;
const items = data.items;
//--Declaraciones de constantes o variables--

// GET sirve para solicitar datos cuando este en /api/characters.
app.get('/api/characters', (req, res) => {
	console.log('Obteniendo la lista de personajes de la MiniAPI-DragonBall.');
	res.setHeader('Content-type', 'application/json');
	res.json({ items });
});

app.get('/api/characters/:id', (req, res) => {
	const id = req.params.id;
	// const idNumero = parseInt(ajdawdhaikjwdha); = NaN (Not a Number)
	const idNumero = parseInt(id);
	console.log(`Estoy obteniendo el personaje con la Id: ${id}`);
	//Verificar si el ID es un numero.
	//Cuando idNumero sea NaN:
	if (isNaN(idNumero)) {
		return res.status(400).json({
			message: 'invalid parameter ID is not a number.',
			error: 400,
		});
	}
	//let i es una variable auxiliar para iterar en el for.
	//Mientras i sea menor al largo del array items.
	//Suma uno en i.
	for (let i = 0; i < items.length; i++) {
		if (items[i].id === idNumero) {
			res.setHeader('Content-type', 'application/json');
			return res.json(items[i]);
		}
	}

	return res.status(404).json({
		error: 404,
		message: 'Id no encontrada.',
	});
});

// app.get('/api/characters/:id', (req, res) => {
// 	const { id } = req.params;
// 	const idNumero = Number(id); // Usa Number() que es más directo que parseInt

// 	console.log(`Buscando personaje con ID: ${id}`);

// 	// Verificamos que el ID sea un número entero válido
// 	if (!Number.isInteger(idNumero)) {
// 		return res.status(400).json({
// 			error: 400,
// 			message: 'El parámetro ID no es un número válido.',
// 		});
// 	}

// 	// Usamos find() para buscar el personaje directamente
// 	const personaje = items.find((item) => item.id === idNumero);

// 	if (personaje) {
// 		res.setHeader('Content-Type', 'application/json');
// 		return res.json(personaje);
// 	}

// 	// Si no lo encuentra, respondemos con un 404
// 	return res.status(404).json({
// 		error: 404,
// 		message: 'Personaje no encontrado.',
// 	});
// });
//Si no encuentra una url especificada anteriormente tira un error.
app.use((req, res) => {
	return res.status(404).json({
		error: 404,
		message: 'URL no encontrada.',
	});
});

app.listen(port, () => {
	console.log(`Example app listening on Http://localhost:${port}`);
});
