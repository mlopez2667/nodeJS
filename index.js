'use strict'
/*DEPENDENCIAS*/
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

/*MODELOS*/

const Product = require('./models/product');


/**/
const app = express();
const port = process.env.PORT || 3002

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/api/product',(req,res)=>{
	Product.find({}, (err, products)=>{
		if(err) return res.status(500).send({mensaje: `Error al realizar la consulta: ${err}`});
		if(!products) return res.status(404).send({mensaje: "No Existen Productos"});

		res.send(200,{products});
	})

});

app.get('/api/product/:productId',(req,res) => {

	Product.findById(req.params.productId, (err, product) => {
		if(err) return res.status(500).send({mensaje: `Error al realizar la consulta: ${err}`});
		if(!product) return	res.status(404).send({mensaje: 'EL producto no existe'});

		res.status(200).send({ product })
	});

});

app.post('/api/product',(req,res)=>{
	console.log('POST /api/product')
	console.log(req.body)
	
	let product = new Product();
	product.name = req.body.name;
	product.picture = req.body.picture;
	product.price = req.body.price;
	product.category= req.body.category;
	product.description = req.body.description;

	product.save((err, productStored)=>{
		if (err) res.status(500).send({Mensaje:`Error al salvar los datos: ${err} `})
		
		res.status(200).send({product: productStored});
	});
});

app.put('/api/product/productId',(req,res)=>{


});

app.delete('/api/product/productId',(req,res)=>{


});
/*LOCAL
mongoose.connect('mongodb://localhost:27017/prueba_nodejs',(err,res)=>{
*/
mongoose.connect('mongodb://mlopez:12345678@ds119060.mlab.com:19060/shopmlopez',(err,res)=>{
	if(err){
		return console.log(`Error al conectar a la base de datos: ${err}`);
	} 
		console.log('Conexion a la base de datos establecida correctamente...');

	app.listen(port, () => {
		console.log(`Api Rest Corriendo un http://localhost:${port}`)
	});


});

