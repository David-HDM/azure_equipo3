// ARCHIVO DE: Alexia

// ===== NO MODIFICAR: importación de la librería =====
const sql = require("mssql");

// ===== Aquí empieza el codigo de Alexia =====

// Datos de conexión a Azure SQL
const configuracion = {
  user: "admin_equipo3",
  password: "Azure2026!",
  server: "admin-equipo-3.database.windows.net",
  database: "base-equipo3",
  options: { 
    encrypt: true, 
    trustServerCertificate: false // Recomendado para Azure
  }
};

// FUNCIÓN: Consultar todos los alumnos (SELECT)
async function consultar() {
  try {
    const pool = await sql.connect(configuracion);
    const resultado = await pool.request().query("SELECT * FROM alumnos");
    return resultado.recordset;
  } catch (error) {
    console.error("Error al consultar:", error);
    throw error;
  }
}

// FUNCIÓN: Crear un nuevo alumno (INSERT)
async function crear(nombre, calificacion) {
  try {
    const pool = await sql.connect(configuracion);
    // Usamos parámetros para evitar inyección SQL y problemas de formato
    await pool.request()
      .input("nombre", sql.NVarChar, nombre)
      .input("calificacion", sql.Float, calificacion)
      .query("INSERT INTO alumnos (nombre, calificacion) VALUES (@nombre, @calificacion)");
  } catch (error) {
    console.error("Error al crear:", error);
    throw error;
  }
}

// FUNCIÓN: Actualizar un alumno existente (UPDATE)
async function actualizar(id, nombre, calificacion) {
  try {
    const pool = await sql.connect(configuracion);
    await pool.request()
      .input("id", sql.Int, id)
      .input("nombre", sql.NVarChar, nombre)
      .input("calificacion", sql.Float, calificacion)
      .query("UPDATE alumnos SET nombre = @nombre, calificacion = @calificacion WHERE id = @id");
  } catch (error) {
    console.error("Error al actualizar:", error);
    throw error;
  }
}

// FUNCIÓN: Eliminar un alumno (DELETE)
async function eliminar(id) {
  try {
    const pool = await sql.connect(configuracion);
    await pool.request()
      .input("id", sql.Int, id)
      .query("DELETE FROM alumnos WHERE id = @id");
  } catch (error) {
    console.error("Error al eliminar:", error);
    throw error;
  }
}

// ===== Aquí termina el código de Alexia =====

// ===== NO MODIFICAR: funciones que usa servidor.js =====
module.exports = { crear, consultar, actualizar, eliminar };