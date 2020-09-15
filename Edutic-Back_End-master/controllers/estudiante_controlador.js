const Estudiante = require('../models/estudiantes.js');
const Docente = require('../models/docente.js');
var fs = require('fs')

exports.encontrarEstudiantesPorPeriodoYNivelEducativo = (req, res) => {


    let codNivelEducativo = req.params.codNivelEducativo
    let codPeriodoElectivo = req.params.codPeriodoElectivo

    Estudiante.obtenerListadoDeEstudiantesPorNivelYPeriodo(codNivelEducativo, codPeriodoElectivo, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Existió un error al recibir la(s) sede(s)"
            });
        }
        else {
            res.send(data);
        }
    });
};


exports.insertarNotasEstudiantePorDocente = (req, res) => {

    var jsonDatos = req.body;
    console.log(jsonDatos)
    var lista = [];
    for (var i = 0; i < jsonDatos.length; i++) {
        lista.push([jsonDatos[i].cod_periodo_lectivo, jsonDatos[i].cod_alumno,
        jsonDatos[i].cod_nivel_educativo, jsonDatos[i].cod_asignatura,
        jsonDatos[i].cod_paralelo, jsonDatos[i].cod_docente, jsonDatos[i].nota1,
        jsonDatos[i].nota2, jsonDatos[i].nota3]);
    }
    console.log(lista)
    Docente.insertarNotasAlumnoAsignaturaPeriodo(lista, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Existió un error al insertar la lista de notas"
            });
        }
        else {
            res.send(data);
        }
    });
};

exports.insertarAsistenciasEstudiantePorDocente = (req, res) => {

    var jsonDatos = req.body;
    var lista = [];
    for (var i = 0; i < jsonDatos.length; i++) {
        lista.push([jsonDatos[i].cod_periodo_lectivo, jsonDatos[i].cod_alumno,
        jsonDatos[i].cod_nivel_educativo, jsonDatos[i].fecha,
        jsonDatos[i].estado]);
    }
    Docente.insertarAsistenciaAlumnosAsignaturaPeriodo(lista, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Existió un error al insertar la lista de asistencias"
            });
        }
        else {
            res.send(data);
        }
    });
};

function base64_encode(file) {
    var bitmap = fs.readFileSync(file);
    return new Buffer(bitmap).toString('base64');
}


exports.insertarTareasParaAlumnos = (req, res) => {


    console.log(req.body)
    objetoUsuario=req.body
    let tarea = {}

    // var archivoBinario= base64_encode(req.files.archivo.File) 
    // console.log( archivoBinario)
    tarea.cod_nivel_educativo = objetoUsuario.cod_nivel_educativo
    tarea.cod_asignatura = objetoUsuario.cod_asignatura
    tarea.cod_periodo_lectivo = objetoUsuario.cod_periodo_lectivo
    tarea.cod_paralelo = objetoUsuario.cod_paralelo
    tarea.cod_docente = objetoUsuario.cod_docente
    tarea.detalle_tarea =objetoUsuario.detalle_tarea
    tarea.titulo_tarea = objetoUsuario.titulo_tarea
    tarea.fecha_entrega = objetoUsuario.fecha_entrega
    tarea.estado = 'ACT'
    tarea.archivo = 'tarea1'

    console.log(tarea)

    Docente.insertarTareaParaAlumnos(tarea, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Existió un error al insertar tarea para estudiantes"
            });
        }
        else {
            res.send(data);
        }
    });
};

exports.encontrarCalificacionesEstudiante = (req, res) => {

    Estudiante.obtenerCalificacionesEstudiante(req.params.cod_alumno, req.params.cod_periodo, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Existió un error al recibir la(s) sede(s)"
            });
        }
        else {
            res.send(data);
        }
    });
};

exports.encontrarTareasEstudiante = (req, res) => {

    Estudiante.obtenerTareaEstudiante(req.params.cod_alumno, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Existió un error al recibir la(s) sede(s)"
            });
        }
        else {
            res.send(data);
        }
    });
};


exports.encontrarMateriaEstudiante = (req, res) => {

    Estudiante.obtenerMateriaEstudiante(req.params.cod_alumno,req.params.cod_alumno, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Existió un error al recibir la(s) sede(s)"
            });
        }
        else {
            res.send(data);
        }
    });
};

exports.actualizarCalificacionesEstudiante = (req, res) => {

    var jsonDatos = req.body;
    var lista = [];
    for (var i = 0; i < jsonDatos.length; i++) {
        lista.push([jsonDatos[i].NOTA4, jsonDatos[i].NOTA5,
        jsonDatos[i].NOTA6, jsonDatos[i].COD_ALUMNO,
        jsonDatos[i].COD_ASIGNATURA]);
    }
    Docente.actualizarNotasEstudiante(lista, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Existió un error al insertar la lista de asistencias"
            });
        }
        else {
            res.send(data);
        }
    });
};


exports.encontrarCalificaciones1 = (req, res) => {

    Estudiante.obtenerNotas1Quimestre(req.params.cod_alumno, req.params.cod_asignatura, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Existió un error notas1"
            });
        }
        else {
            res.send(data);
        }
    });
};

exports.encontrarCalificaciones2 = (req, res) => {

    Estudiante.obtenerNotas2Quimestre(req.params.cod_alumno, req.params.cod_asignatura, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Existió un error notas2"
            });
        }
        else {
            res.send(data);
        }
    });
};