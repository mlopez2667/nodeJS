'use strict'
/*DEPENDENCIAS*/

const mongoose = require('mongoose');
const app = require('./app');
const config = require('./config')




/*LOCAL
mongoose.connect('mongodb://localhost:27017/prueba_nodejs',(err,res)=>{
*/
mongoose.connect(config.db,(err,res)=>{
	if(err){
		return console.log(`Error al conectar a la base de datos: ${err}`);
	}
		console.log('Conexion a la base de datos establecida correctamente...');

	app.listen(config.port, () => {
		console.log(`Api Rest Corriendo un http://localhost:${config.port}`)
	});


});
