'use strict'

const Product = require('../models/product');

function getProduct(req,res) {
	
	// esta es una manera abreviada de concatenar en JavaScript
	// res.send(` Variable enviada: ${req.params.productId}`)

	Product.findById(req.params.productId, (err, product) => {
		if(err) return res.status(500).send({mensaje: `Error al realizar la consulta: ${err}`});
		if(!product) return	res.status(404).send({mensaje: 'EL producto no existe'});

		res.status(200).send({ product })
	});

}

function getProducts(req,res) {

	Product.find({}, (err, products)=>{
		if(err) return res.status(500).send({mensaje: `Error al realizar la consulta: ${err}`});
		if(!products) return res.status(404).send({mensaje: "No Existen Productos"});

		res.send(200,{products});
	})
}

function saveProduct(req,res){

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
}

function updateProduct(req,res) {
	
	let update = req.body;

	Product.findByIdAndUpdate(req.params.productId, update, (err, productUpd) =>{
		if(err) res.status(500).send({mensaje: `Error al actualizar el proucto: ${err}`});

		res.status(200).send({product: productUpd })

	}) 
}

function deleteProduct(req,res) {
	
	Product.findById(req.params.productId, (err, product) => {
		if(err) res.status(500).send({mensaje: `Error al borrar el producto: ${err}`});
		
		product.remove(err =>{
			if(err) res.status(500).send({mensaje: `Error al borrar el producto: ${err}`});
			res.status(200).send({mensjae: 'El producto ha sido eliminado'});
		});
	});
}

module.exports = {
	getProduct,
	getProducts,
	saveProduct,
	updateProduct,
	deleteProduct
}