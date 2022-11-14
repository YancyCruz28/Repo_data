// importar libreria de express
const express = require('express')
const cors = require('cors')

// llamar metodo de express par ejecutar las fucniones de express
const app = express()

// definir el puerto que se va a escuchar
const port = 5000

// ejecutar conexion de base de datos 
require("./database")

app.use(cors())

//express entienda que va a recibir los datos en formato.json
app.use(express.json())

// especificar las rutas y que funciones va a ejecutar
// get ver info
app.get('/api', (req, res) => {
    res.status(200).json({msg: "Bienvenido al api versión 1.0.0"})
})
//post crear info
// put actualizar info
//delete eliminar info

// app.use(activador de rutas, importación de las rutas que se pueden usar con esta ruta)

app.use("/product", require("./routes/product.routes"))
app.use("/user", require("./routes/user.routes"))


//escucha a traves del puerto
app.listen(port, () => {
    console.log(`Escuchando por el puerto`, port)
})
