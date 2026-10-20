// ARCHIVO DE: David

// ===== NO MODIFICAR: configuración inicial =====
const express = require("express");
const { crear, consultar, actualizar, eliminar } = require("./base_datos");
const app = express();
app.use(express.json());              // permite leer JSON enviado por el navegador
app.use(express.static("publico"));   // entrega index.html, estilos.css y programa.js

// ===== Aquí empieza el código de David =====

// Rutas que debe tener (todas responden y reciben JSON):
//   GET    /alumnos        -> consulta todos
//   POST   /alumnos        -> crea (recibe nombre y calificacion en req.body)
//   PUT    /alumnos/:id    -> modifica (id en req.params.id, datos en req.body)
//   DELETE /alumnos/:id    -> elimina (id en req.params.id)
//
// Ejemplo de la primera ruta:
// app.get("/alumnos", async (req, res) => {
//   res.json(await consultar());
// });

// ===== Aquí termina el código de David =====

// ===== NO MODIFICAR: arranque del servidor =====
app.listen(3000, () => console.log("Servidor en http://localhost:3000"));