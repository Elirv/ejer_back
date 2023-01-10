const express = require('express')
//traernos el router de express
const router = express.Router()
const musicController = require('../controllers/music.controllers')
// o destructuring = const { checkParam, doubleCheckParam } = require('../controllers/music.controllers')
const chechMiddleware = require("../middlewares/check.middleware") //importamos elmiddleware

router
    //Obtener los detalles de una cuenta
    .get("/", musicController.allAlbums) //y deveria funcionar igual
    //Crear una cuenta
    .post("/", chechMiddleware.chechParam, musicController.createAlbum) //kiero k aki le haga el chekeo
    //como segundo parametro se pasa el middleware k se ejecuta primero luego el siguiente
    //Actualizar una cuenta, el put mas o menos es el patch
    .patch('/:id', checkParam, doubleCheckParam, musicController.updateAlbum)
    //Eliminar una cuenta
    .delete('/:id', checkParam, doubleCheckParam, musicController.deleteAlbum)

//esto se va al controller
// .get('/', (req, res) => {
//     console.log('all albums');
//     try {
//         res.status(200).send("All Albums") //par amanejar la base de datos, data
//     } catch (error) {
//         req.status(500).send({ status: 'FALSE' }) //no me sale con: {status:OK ,msg:"All albums"}
//     }
// })

// .post("/album", (req, res) => {
//     const body = req.body
//     console.log(body);
//     try {
//         res.status(201).send("Albums created")    
//     } catch (error) {
//         req.status(500).send('FALSE')
//     }
//  }) //crear un nuevoalbum de ahi /album

// .delete("/:id", (req, res) => {
//     const {id} = req.params
//     try {
//         res.status(201).send({status:"OK", msg:`Delete ${id}`})    
//     } catch (error) {
//         req.status(500).send({ status: 'FALSE'})
//     }
// })

module.exports = router