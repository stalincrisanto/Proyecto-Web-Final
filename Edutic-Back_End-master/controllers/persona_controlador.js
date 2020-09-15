const Persona = require("../models/persona.js");

//Personal
exports.nuevoPersonal = (req,res)=>{
    if(!req.body)
    {
        res.status(400).send({
            message: "Campos vacíos"
        });
    }
    const personal = {
        cod_persona: req.body.cod_persona,
        cedula: req.body.cedula,
        apellido: req.body.apellido,
        nombre: req.body.nombre,
        direccion: req.body.direccion,
        telefono: req.body.telefono,
        fecha_nacimiento: req.body.fecha_nacimiento,
        genero: req.body.genero,
        correo: req.body.correo,
        correo_personal: req.body.correo_personal
    }
    Persona.agregarPersonal(personal,(err,data)=>{
        if(err)
        {
            res.status(500).send({
                message: err.message || "Error al agregar la persona"
            });
        }
        else
        {
            res.send(data);
        }
    });
};

//Estudiantes - Representantes
exports.nuevoEstudiante = (req,res)=>{
    if(!req.body)
    {
        res.status(400).send({
            message: "Campos vacíos"
        });
    }
    const representante = {
        cod_persona: req.body.cod_persona,
        cedula: req.body.cedula,
        apellido: req.body.apellido,
        nombre: req.body.nombre,
        direccion: req.body.direccion,
        telefono: req.body.telefono,
        fecha_nacimiento: req.body.fecha_nacimiento,
        genero: req.body.genero,
        correo: req.body.correo,
        correo_personal: req.body.correo_personal
    }
    const estudiante = {
        cod_persona: req.body.cod_persona,
        cod_persona_representante: representante.cod_persona,
        cedula: req.body.cedula,
        apellido: req.body.apellido,
        nombre: req.body.nombre,
        direccion: req.body.direccion,
        telefono: req.body.telefono,
        fecha_nacimiento: req.body.fecha_nacimiento,
        genero: req.body.genero,
        correo: req.body.correo,
        correo_personal: req.body.correo_personal
    }
    Persona.agregarPersonal(personal,estudiante,(err,data)=>{
        if(err)
        {
            res.status(500).send({
                message: err.message || "Error al agregar la persona"
            });
        }
        else
        {
            res.send(data);
        }
    });
};