const express = require('express')
const router = express.Router()

// importar modelo

const User = require('../models/user.model')

// router.get(ruta y funcion) listar los productos
router.get("/get-user", async (req, res) => {
    const users = await User.find()
    return res.status(200).json({data: users})
})


// crear productos 
router.post('/create-user', async (req, res) => {

    let{ email } = req.body
    //let email = req.body.email
    //para que todos los email queden en minuscula
    email = email.toLowerCase()
    req.body.email = email

    // obtener usuarios que tienen ese email
    let userExists = await User.find({email: email})
    console.log(userExists)
    // validar si el email existe
    if(userExists.length != 0){
    return res.status(400).json({msg: "El usuario existe"})
    }
    //guardar o mandar error

    const newUser = new User(req.body)
    await newUser.save()
    return res.status(201).json({msg: "Usuario guardado exitosamente"})
})

//eliminar producto

router.delete('/delete-user', async (req, res) => {
    await User.findByIdAndDelete(req.query.id)
    return res.status(200).json({msg: "Usuario eliminado", id: req.query.id})
})

//actualizar

router.put('/update-user', async (req, res) => {
    await User.findByIdAndUpdate(req.query.id, {$set: req.body})
    return res.status(200).json({msg: "Usuario actualizado"})
})


// exportar las rutas

module.exports = router