const Planificacion = require("../models/planificacion.js");

//PERIODO
exports.encontrarPeriodos = (req,res)=>{
    Planificacion.obtenerPeriodos((err,data)=>{
        if(err)
        {
            res.status(500).send({
                message: err.message || "Existió un error al recibir los periodos"
            });
        }
        else
        {
            res.send(data);
        }
    });
};

exports.nuevoPeriodo = (req,res)=>{
    if(!req.body)
    {
        res.status(400).send({
            message: "Campos vacíos"
        });
    }
    const periodo = {
        cod_periodo_lectivo: req.body.cod_periodo_lectivo,
        estado: req.body.estado,
        fecha_inicio: req.body.fecha_inicio,
        fecha_fin: req.body.fecha_fin
    }
    Planificacion.agregarPeriodo(periodo,(err,data)=>{
        if(err)
        {
            res.status(500).send({
                message: err.message || "Error al agregar el periodo"
            });
        }
        else
        {
            res.send(data);
        }
    });
};

exports.modificarPeriodo = (req,res)=>{
    if(!req.body)
    {
        res.status(400).send({
            message: "El contenido no puede estar vacío"
        });
    }
    const periodo = {
        cod_periodo_lectivo: req.body.cod_periodo_lectivo,
        estado: req.body.estado,
        fecha_inicio: req.body.fecha_inicio,
        fecha_fin: req.body.fecha_fin
    }
    Planificacion.modificarPeriodo(
        req.params.cod_periodo_lectivo,
        periodo,
        (err,data)=>{
            if(err)
            {
                if(err.kind==="not_found")
                {
                    res.status(404).send({
                        message: `No se encuentra el periodo con el código ${req.params.cod_periodo_lectivo}`
                    });
                }
                else
                {
                    res.status(500).send({
                        message: "Error al modificar el periodo con el código: "+req.params.cod_asignatura
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

exports.eliminarPeriodo = (req,res)=>{
    Planificacion.removerPeriodo(req.params.cod_periodo_lectivo,(err,data)=>{
        if(err)
        {
            if(err.kind=="not_found")
            {
                res.status(404).send({
                    message: `No se ha encontrado el periodo con el código: ${req.params.cod_periodo_lectivo}`
                });
            }
            else
            {
                res.status(500).send({
                    message: "No se puede eliminar el periodo lectivo: "+req.params.cod_periodo_lectivo
                });
            }
        }
        else
        {
            res.send({message:`Periodo eliminado correctamente`});
        }
    });
}

//PARALELOS
exports.encontrarParalelos = (req,res)=>{
    Planificacion.obtenerParalelos((err,data)=>{
        if(err)
        {
            res.status(500).send({
                message: err.message || "Existió un error al recibir los paralelos"
            });
        }
        else
        {
            res.send(data);
        }
    });
};

exports.nuevoParalelo = (req,res)=>{
    if(!req.body)
    {
        res.status(400).send({
            message: "Campos vacíos"
        });
    }
    const paralelo = {
        cod_paralelo: req.body.cod_paralelo,
        cod_nivel_educativo: req.body.cod_nivel_educativo,
        nombre: req.body.nombre
    }
    Planificacion.agregarParalelo(paralelo,(err,data)=>{
        if(err)
        {
            res.status(500).send({
                message: err.message || "Error al agregar el paralelo"
            });
        }
        else
        {
            res.send(data);
        }
    });
};

