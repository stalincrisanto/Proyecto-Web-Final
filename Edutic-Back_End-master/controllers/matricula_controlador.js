const Matricula = require('../models/matricula.js');

exports.obtenerListadoDePeriodosElectivos = (req,res)=>{
    Matricula.obtenerPeriodoELectivo((err,data)=>{
        if(err)
        {
            res.status(500).send({
                message: err.message || "Existió un error al recibir la(s) sede(s)"
            });
        }
        else
        {
            res.send(data);
        }
    });
};