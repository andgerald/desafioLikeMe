//aqui todo lo que tiene que ver con la base de datos

const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "likeme",
  password: "geraldine19",
  port: 5432,
});

//Funcion para insertar registros en la tabla ejercicios
const agregar = async (titulo, img, descripcion) => {
  console.log("VALORES RECIBIDOS:", titulo, img, descripcion);
  const result = await pool.query({
    text: "insert into posts (id,titulo, img, descripcion,likes) values(DEFAULT,$1,$2,$3,$4) returning *",
    values: [titulo, img, descripcion, 0],
  });
  //respuesta de la funcion
  return result.rows[0];
};

const todos = async () => {
  const result = await pool.query("SELECT * FROM posts");
  console.log(result.rows);
  return result.rows;
};

//Editar un registro
const editar = async (id) => {
  const result = await pool.query(
    "UPDATE posts SET likes = likes + 1 WHERE id =$1 returning *",
    [id]
  );
  return result.rows[0];
};

module.exports = { todos, agregar, editar };
