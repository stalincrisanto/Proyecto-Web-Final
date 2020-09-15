const Asignatura = require("../models/asignatura.js");

exports.encontrarAsignatura = (req,res)=>{
    Asignatura.obtenerAsignatura((err,data)=>{
        if(err)
        {
            res.status(500).send({
                message: err.message || "Existió un error al recibir las asignaturas"
            });
        }
        else
        {
            res.send(data);
        }
    });
};

exports.encontrarAsignaturaPorNivel = (req,res)=>{
    Asignatura.obtenerAsignaturaPorNivel(req.params.cod_nivel_educativo,(err,data)=>{
        if(err)
        {
            if(err.kind == "not_found")
            {
                res.status(404).send({
                    message: `No se encuenta las asignaturas en el nivel: ${req.params.cod_nivel_educativo}`
                });
            }
            else
            {
                res.status(500).send({
                    message: "Error al recuperar las asignaturas con el código: "+ req.params.cod_nivel_educativo
                });
            }
        }
        else
        {
            res.send(data);
        }
    });
};

exports.nuevaAsignatura = (req,res)=>{
    if(!req.body)
    {
        res.status(400).send({
            message: "Campos vacíos"
        });
    }
    const asignatura = {
        cod_nivel_educativo: req.body.cod_nivel_educativo,
        cod_asignatura: req.body.cod_asignatura,
        nombre: req.body.nombre,
        creditos: req.body.creditos,
        tipo: req.body.tipo,
        imagen: req.body.imagen
    }
    Asignatura.agregarAsignatura(asignatura,(err,data)=>{
        if(err)
        {
            res.status(500).send({
                message: err.message || "Error al agregar la asignatura"
            });
        }
        else
        {
            res.send(data);
        }
    });
};

exports.modificarAsignatura = (req,res)=>{
    if(!req.body)
    {
        res.status(400).send({
            message: "El contenido no puede estar vacío"
        });
    }
    const asignatura = {
        cod_nivel_educativo: req.body.cod_nivel_educativo,
        cod_asignatura: req.body.cod_asignatura,
        nombre: req.body.nombre,
        creditos: req.body.creditos,
        tipo: req.body.tipo,
        imagen: req.body.imagen
    }
    Asignatura.modificarAsignatura(
        req.params.cod_asignatura,
        asignatura,
        (err,data)=>{
            if(err)
            {
                if(err.kind==="not_found")
                {
                    res.status(404).send({
                        message: `No se encuentrala asignatura con el codigo ${req.params.cod_asignatura}`
                    });
                }
                else
                {
                    res.status(500).send({
                        message: "Error al modificar la asignatura con el código: "+req.params.cod_asignatura
                    });
                }
            }
            else
            {
                res.send(data);
            }
        }
    );
};

exports.eliminarAsignatura = (req,res)=>{
    Asignatura.removerAsignatura(req.params.cod_asignatura,(err,data)=>{
        if(err)
        {
            if(err.kind=="not_found")
            {
                res.status(404).send({
                    message: `No se ha encontrado la asignatura con el código: ${req.params.cod_asignatura}`
                });
            }
            else
            {
                res.status(500).send({
                    message: "No se puede eliminar la asignatura: "+req.params.cod_asignatura
                });
            }
        }
        else
        {
            res.send({message:`Asignatura eliminado correctamente`});
        }
    });
}


exports.encontrarAsignaturaPorCodigoDocente = (req,res)=>{
    let codigoDocente=req.params.codigoDocente
    Asignatura.obtenerAsignaturaPorCodigoDocente(codigoDocente,(err,data)=>{
        if(err)
        {
            res.status(500).send({
                message: err.message || "Existió un error al recibir las asignaturas"
            });
        }
        else
        {
            res.send(data);
        }
    });
};