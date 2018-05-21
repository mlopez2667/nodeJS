'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = Schema({
	name: String,
	picture: String,
    category: { type : Array , "default" : [] },
	description: String,
	office: { type : Array , "default" : [] }
});

module.exports = mongoose.model('Product',ProductSchema)