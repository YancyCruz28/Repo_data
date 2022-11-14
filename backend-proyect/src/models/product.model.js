// importar mongoose

const mongoose = require('mongoose')

//schema - colección
// llamar a la clase schema

const { Schema } = mongoose
//crear el schema de lo que necesite //instanciar

const productSchema = new Schema(
    {
        name: { type: String, required: true},
        price: { type: Number, required: true},
        description: { type: String, default: 'El vendedor no ha añadido una descripción'}, 
        image: { type: String, default: 'Sin imagen adjunta'},
        stock: { type: Number, default: 0},
        keywords: { type: Array, default: []},
    }, // llaves de la colección
    {
        versionKey: false,
        timestamps: true,
    } // que deseamos capturar cada que se inserte un dato 
)
//exportar como un modelo

//module.exports = mongoose.model("Nombre de la colección", el schema de la colección)

module.exports = mongoose.model("product", productSchema)