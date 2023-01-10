const express = require('express')
const dotenv = require('dotenv')
dotenv.config() //acceder a las variablesde entorno get, post, put...
const albumRouter = require("./routes/music.routes")
const userRouter = require("./routes/user.routes")
const { json } = require('body-parser') //express entiend al a madnera en la ke le has envado los arcjivos

const app = express();
app.use(json()) //para que pueda entender los jaosn de las peiciones
//peticiones fuera enviarlas a rutas
// app.get('/', (req, res) => {
//     res.send('hello World')
// })

app.use("/album", albumRouter) //cuanda haga la peticion a album por ejemplo, entonces ejecutará todos los metdos de las rutas
app.use("/user", userRouter) //ya no van todas las peticiones a album ahora tb van a user

app.listen(process.env.PORT, () => {
console.log(`Server is running in port ${process.env.PORT}`);
});

//entra por el index, mira el endpoint se va al router, mirando tb el get, post...
//ejecuta una funcion u otra , k son las del coontrlador