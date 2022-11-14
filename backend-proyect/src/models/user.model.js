// importar mongoose

const mongoose = require('mongoose')

//schema - colección
// llamar a la clase schema

const { Schema } = mongoose
//crear el schema de lo que necesite //instanciar

const userSchema = new Schema(
    {
        firstName: { type: String, required: true},
        lastName: { type: String, required: true},
        email: { type: String, required: true}, 
        password: { type: String, required: true},
        isAdmin: { type: Boolean, default: false},
    }, // llaves de la colección
    {
        versionKey: false,
        timestamps: true,
    } // que deseamos capturar cada que se inserte un dato 
)
//exportar como un modelo

//module.exports = mongoose.model("Nombre de la colección", el schema de la colección)

module.exports = mongoose.model("user", userSchema)