// const numbers = [34,67,28,13,466,12];

// const numerosPares = []

// for(i=0; i <=numbers.length; i++){
//     if(numbers[i]%2==0){
//         numerosPares.push(numbers[i])
//     }
// };

// console.log(numerosPares);

// const numerosFiltados = (numbers)=>numbers.filter(numbers=>numbers%2==0)

// console.log(numerosFiltados(numbers))

// const animalsArray = [{ id: 1, animal: 'perro' }, { id: 2, animal: 'gato' }, { id: 3, animal: 'burro' }, { id: 4, animal: 'tortuga' }];

// const listaAnimales = [];
// for (i = 0; i < animalsArray.length; i++) {
//     listaAnimales.push(animalsArray[i].animal)
// }
// console.log(listaAnimales);

const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/routes')
const mongoose = require('mongoose');

const app= express();

app.use(bodyParser.urlencoded({extended: true}));
//app.use(bodyParser.json());
app.use(express.json())

//Mongo URI
const db = require('./config/keys').mongoURI;
//Conexion BD
mongoose.connect(db)
    .then(() =>console.log('Conectado a Mongo'))
    .catch(err => console.log('Mongo error'))

app.listen(3000, () => (console.log('Servidor escuchando puerto 3000')));

app.use('/', routes);