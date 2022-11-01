const mongoose = require("mongoose");

//Informacion que va dentro de coleccion
const EsquemaProducto = new mongoose.Schema({
    nombre: String,
    precio: Number,
    descripcion: String
}, {timestamps: true, versionKey: false});

//timestamps crea los campos de createAt y updateAt
//versionKey: false elimina el atributo _v

//coleccion
const Producto = mongoose.model("productos", EsquemaProducto);

module.exports = Producto;