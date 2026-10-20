-- ARCHIVO DE: Alexia
-- Ejecutar en el "Query editor" de Azure SQL Database

-- ===== NO MODIFICAR: estructura de la tabla =====
CREATE TABLE alumnos (
    id INT IDENTITY(1,1) PRIMARY KEY,
    nombre NVARCHAR(100) NOT NULL,
    calificacion DECIMAL(5,2) NOT NULL
);

-- Opcional: datos de prueba
-- INSERT INTO alumnos (nombre, calificacion) VALUES ('Ana', 9.5);