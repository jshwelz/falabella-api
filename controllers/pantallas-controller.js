
var pantallas  = [
				{id_pantalla: 1, id_sucursal: 1, id_zona: 1, ip: '200.27.62.1', modulo: 'Equipo A', duid: 'MTCPH5RIKNW21', version: '12.1', estado: true},
				{id_pantalla: 2, id_sucursal: 1,  id_zona: 1, ip: '200.27.62.2', modulo: 'Equipo B', duid: 'MTCPH5RIKNW22', version: '12.1', estado: true},
				{id_pantalla: 3, id_sucursal: 2,  id_zona: 1, ip: '200.27.62.3', modulo: 'Equipo A', duid: 'MTCPH5RIKNW23', version: '12.1', estado: true},
				{id_pantalla: 4, id_sucursal: 2,  id_zona: 1, ip: '200.27.62.4', modulo: 'Equipo B', duid: 'MTCPH5RIKNW24', version: '12.1', estado: true},
				{id_pantalla: 5, id_sucursal: 2,  id_zona: 1, ip: '200.27.62.5', modulo: 'Equipo C', duid: 'MTCPH5RIKNW25', version: '12.1', estado: true},
				{id_pantalla: 6, id_sucursal: 3,  id_zona: 1, ip: '200.27.62.6', modulo: 'Equipo A', duid: 'MTCPH5RIKNW26', version: '12.1', estado: true},
				{id_pantalla: 7, id_sucursal: 3,  id_zona: 1, ip: '200.27.62.7', modulo: 'Equipo B', duid: 'MTCPH5RIKNW27', version: '12.1', estado: true},
				{id_pantalla: 8, id_sucursal: 4,  id_zona: 2, ip: '200.27.62.8', modulo: 'Equipo A', duid: 'MTCPH5RIKNW28', version: '12.1', estado: true},
				{id_pantalla: 9, id_sucursal: 4,  id_zona: 2, ip: '200.27.62.9', modulo: 'Equipo B', duid: 'MTCPH5RIKNW29', version: '12.1', estado: true},
				{id_pantalla: 10, id_sucursal: 5, id_zona: 2,  ip: '200.27.62.10', modulo: 'Equipo A', duid: 'MTCPH5RIKNW30', version: '12.1', estado: true},
				{id_pantalla: 11, id_sucursal: 5, id_zona: 2,  ip: '200.27.62.11', modulo: 'Equipo B', duid: 'MTCPH5RIKNW31', version: '12.1', estado: true},
				{id_pantalla: 12, id_sucursal: 5, id_zona: 2,  ip: '200.27.62.12', modulo: 'Equipo C', duid: 'MTCPH5RIKNW32', version: '12.1', estado: true},
				{id_pantalla: 13, id_sucursal: 6, id_zona: 2,  ip: '200.27.62.13', modulo: 'Equipo A', duid: 'MTCPH5RIKNW33', version: '12.1', estado: true},
				{id_pantalla: 14, id_sucursal: 6, id_zona: 2,  ip: '200.27.62.14', modulo: 'Equipo B', duid: 'MTCPH5RIKNW34', version: '12.1', estado: true},
				{id_pantalla: 15, id_sucursal: 6, id_zona: 2,  ip: '200.27.62.15', modulo: 'Equipo C', duid: 'MTCPH5RIKNW35', version: '12.1', estado: true},
				{id_pantalla: 16, id_sucursal: 6, id_zona: 2,  ip: '200.27.62.16', modulo: 'Equipo D', duid: 'MTCPH5RIKNW36', version: '12.1', estado: false},
				{id_pantalla: 17, id_sucursal: 7, id_zona: 3,  ip: '200.27.62.17', modulo: 'Equipo A', duid: 'MTCPH5RIKNW37', version: '12.1', estado: true},
				{id_pantalla: 18, id_sucursal: 7, id_zona: 3,  ip: '200.27.62.18', modulo: 'Equipo B', duid: 'MTCPH5RIKNW38', version: '12.1', estado: true},
				{id_pantalla: 19, id_sucursal: 8, id_zona: 3,  ip: '200.27.62.19', modulo: 'Equipo A', duid: 'MTCPH5RIKNW39', version: '12.1', estado: true},
				{id_pantalla: 20, id_sucursal: 8, id_zona: 3,  ip: '200.27.62.20', modulo: 'Equipo B', duid: 'MTCPH5RIKNW40', version: '12.1', estado: false},
				{id_pantalla: 21, id_sucursal: 9, id_zona: 3,  ip: '200.27.62.21', modulo: 'Equipo A', duid: 'MTCPH5RIKNW41', version: '12.1', estado: true},
				{id_pantalla: 22, id_sucursal: 9, id_zona: 3,  ip: '200.27.62.22', modulo: 'Equipo B', duid: 'MTCPH5RIKNW42', version: '12.1', estado: true},
				{id_pantalla: 23, id_sucursal: 9, id_zona: 3,  ip: '200.27.62.23', modulo: 'Equipo C', duid: 'MTCPH5RIKNW43', version: '12.1', estado: true},
			];



module.exports.pantallas = function (req, res) {
  //res.json(ex);  
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With");
   res.header("Access-Control-Allow-Methods", "GET, PUT, POST");  
   res.json(pantallas);


};