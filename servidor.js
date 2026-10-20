// ARCHIVO DE: David

// ===== NO MODIFICAR: configuración inicial =====
const express = require("express");
const { crear, consultar, actualizar, eliminar } = require("./base_datos");
const app = express();
app.use(express.json());              // permite leer JSON enviado por el navegador
app.use(express.static("publico"));   // entrega index.html, estilos.css y programa.js

// ===== Aquí empieza el código de David =====

app.get("/alumnos", async (req, res) => {
   res.json(await consultar());
});

app.post("/alumnos", async (req, res) => {
   const { nombre, calificacion } = req.body;
   const nuevoAlumno = await crear(nombre, calificacion);
   res.json(nuevoAlumno);
});

app.put("/alumnos/:id", async (req, res) => {
   const { id } = req.params;
   const { nombre, calificacion } = req.body;
   const alumnoActualizado = await actualizar(id, nombre, calificacion);
   res.json(alumnoActualizado);
});

app.delete("/alumnos/:id", async (req, res) => {
   const { id } = req.params;
   const alumnoEliminado = await eliminar(id);
   res.json(alumnoEliminado);
});

// ===== Aquí termina el código de David =====

// ===== NO MODIFICAR: arranque del servidor =====
app.listen(3000, () => console.log("Servidor en http://localhost:3000"));