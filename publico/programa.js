// ARCHIVO DE: Alejandra (frontend)

// ===== NO MODIFICAR: dirección base del servidor =====
const API = "/alumnos";

// ===== Aquí empieza el código de Alejandra =====
const formulario=document.getElementById("formulario");
const tabla=document.getElementById("tabla");
async function cargar(){
    try{
    const respuesta = await fetch(API);
    if (!respuesta.ok) throw new Error("El servidor respondió " + respuesta.status);
    const alumnos = await respuesta.json();

    tabla.innerHTML = "";
    alumnos.forEach(alumno => {
      const fila = document.createElement("tr");
      fila.innerHTML = `
        <td>${alumno.nombre}</td>
        <td>${alumno.calificacion}</td>
        <td>
          <button onclick="editar(${alumno.id})">Editar</button>
          <button onclick="eliminar(${alumno.id})">Eliminar</button>
        </td>
      `;
      tabla.appendChild(fila);
    });
  } catch (error) {
    console.error("No se pudo cargar la tabla:", error);
    tabla.innerHTML = "<tr><td colspan='3'>Error al cargar los alumnos</td></tr>";
  }
}
async function guardar(evento){
    evento.preventDefault();
    const id=document.getElementById("id").value;
    const nombre=document.getElementById("nombre").value;
    const calificacion=Number(document.getElementById("calificacion").value);
    const datos={nombre, calificacion};
    const opciones={
        method:id ? "PUT" : "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(datos)
    };
    const url=id ? API + "/" + id :API;
    await fetch(url,opciones);
    formulario.reset();
    document.getElementById("id").value="";
    cargar();

}  
async function editar(id){
    const alumnos=await(await fetch(API)).json();
    const alumno=alumnos.find(a=> a.id ===id);
    document.getElementById("id").value=alumno.id;
    document.getElementById("nombre").value=alumno.nombre;
    document.getElementById("calificacion").value=alumno.calificacion;

}
async function eliminar(id){
    if(!confirm("¿Seguro que quieres eliminar a este alumno?")) return;
    await fetch(API+ "/" + id, {method: "DELETE"});
    cargar();
}
formulario.addEventListener("submit", guardar)
cargar();
// Funciones sugeridas: cargar(), guardar(), editar(id), eliminar(id)
//
// Ejemplos de cómo llamar al servidor:
//   const alumnos = await (await fetch(API)).json();                 // consultar todos
//   await fetch(API, { method: "POST", headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ nombre, calificacion }) });             // crear
//   await fetch(API + "/" + id, { method: "PUT", headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ nombre, calificacion }) });             // actualizar
//   await fetch(API + "/" + id, { method: "DELETE" });               // eliminar
//
// Al final del archivo, llamar a cargar() para mostrar la tabla al abrir la página.