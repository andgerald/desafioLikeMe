//carga del servidos y las rutas

const express = require("express");
const app = express();
const PORT = 3000;

//importando funcion desde el modulo consultas.js
const { todos, agregar, editar } = require("./consultas/consultas.js");

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});

//middleware para recibir desde el front como json
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

//ruta para agregar  un ejercicio a la tabla ejercicios
app.post("/post", async (req, res) => {
  const { titulo, img, descripcion } = req.body;
  const result = await agregar(titulo, img, descripcion);
  console.log(
    "valor devuelvuelto por la funcion de la base de datos: ",
    result
  );
  res.json(result);
});

// Ruta para consultar todos los registros de la tabla ejercicios
app.get("/posts", async (req, res) => {
  const result = await todos();
  res.json(result);
});

//Ruta para editar un registro de la tabla ejercicios
app.put("/post", async (req, res) => {
  const { id } = req.query;
  const result = await editar(id);
  res.json(result);
});
