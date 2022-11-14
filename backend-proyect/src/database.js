const mongoose = require('mongoose')

const dbName = "Proyect-1"
const uri = `mongodb+srv://Yancy-Cruz:Yancy123@myfirstcluster.ggw0awl.mongodb.net/${dbName}?retryWrites=true&w=majority`

mongoose.connect(uri)
    .then((db) => console.log("Conexion con BD exitosa"))
    .catch((err) => console.log(err));

module.exports = mongoose;