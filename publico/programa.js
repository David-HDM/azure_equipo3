// ARCHIVO DE: Alejandra (frontend)

// ===== NO MODIFICAR: dirección base del servidor =====
const API = "/alumnos";

// Funciones sugeridas: cargar(), guardar(), editar(id), eliminar(id)
//
// Ejemplos de cómo llamar al servidor:
//   const alumnos = await (await fetch(API)).json();                 // listar
//   await fetch(API, { method: "POST", headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ nombre, calificacion }) });             // crear
//   await fetch(API + "/" + id, { method: "PUT", headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ nombre, calificacion }) });             // actualizar
//   await fetch(API + "/" + id, { method: "DELETE" });               // eliminar
//
// Al final del archivo, llamar a cargar() para mostrar la tabla al abrir la página.