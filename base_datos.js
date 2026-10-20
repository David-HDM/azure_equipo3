// ARCHIVO DE: Alexia

// ===== NO MODIFICAR: importación de la librería =====
const sql = require("mssql");

// ===== Aquí empieza el codigo de Alexia =====

// Datos de conexión a Azure SQL (no subir la contraseña real al repositorio)
const configuracion = {
  user: "",
  password: "",
  server: "",      // ejemplo: miservidor.database.windows.net
  database: "",
  options: { encrypt: true }
};

// PROVISIONAL: datos falsos para que el equipo pueda trabajar mientras tanto.
// Reemplazar cada función por consultas reales a Azure SQL.
let alumnosFalsos = [{ id: 1, nombre: "Ana", calificacion: 9.5 }];
let siguienteId = 2;

async function consultar() {
  // Ejemplo real:
  // const pool = await sql.connect(configuracion);
  // const resultado = await pool.request().query("SELECT * FROM alumnos");
  // return resultado.recordset;
  return alumnosFalsos;
}

async function crear(nombre, calificacion) {
  alumnosFalsos.push({ id: siguienteId++, nombre, calificacion });
}

async function actualizar(id, nombre, calificacion) {
  const alumno = alumnosFalsos.find(a => a.id == id);
  if (alumno) {
    alumno.nombre = nombre;
    alumno.calificacion = calificacion;
  }
}

async function eliminar(id) {
  alumnosFalsos = alumnosFalsos.filter(a => a.id != id);
}

// ===== Aquí termina el código de Alexia =====

// ===== NO MODIFICAR: funciones que usa servidor.js =====
module.exports = { crear, consultar, actualizar, eliminar };