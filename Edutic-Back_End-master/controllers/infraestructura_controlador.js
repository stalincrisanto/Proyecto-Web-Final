const Sede = require('../models/infraestructura.js');
const Edificio = require('../models/infraestructura.js');
const Aula = require('../models/infraestructura.js');
//SEDES
exports.encontrarSedes = (req,res)=>{
    Sede.obtenerSedes((err,data)=>{
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

exports.encontrarSedeId = (req,res)=>{
    Sede.obtenerSedeId(req.params.cod_sede,(err,data)=>{
        if(err)
        {
            if(err.kind == "not_found")
            {
                res.status(404).send({
                    message: `No se encuenta la sede con el Código: ${req.params.cod_sede}`
                });
            }
            else
            {
                res.status(500).send({
                    message: "Error al recuperar la sede con el código: "+ req.params.cod_sede
                });
            }
        }
        else
        {
            res.send(data);
        }
    });
};

exports.nuevaSede = (req,res)=>{
    if(!req.body)
    {
        res.status(400).send({
            message: "Campos vacíos"
        });
    }
    const sede = {
        cod_sede: req.body.cod_sede,
        nombre: req.body.nombre,
        direccion: req.body.direccion,
        telefono: req.body.telefono,
        codigo_postal: req.body.codigo_postal
    }
    Sede.agregarSede(sede,(err,data)=>{
        if(err)
        {
            res.status(500).send({
                message: err.message || "Error al agregar nueva Sede"
            });
        }
        else
        {
            res.send(data);
        }
    });
};

exports.modificarSede = (req,res)=>{
    if(!req.body)
    {
        res.status(400).send({
            message: "El contenido no puede estar vacío"
        });
    }
    const sede = {
        cod_sede: req.body.cod_sede,
        nombre: req.body.nombre,
        direccion: req.body.direccion,
        telefono: req.body.telefono,
        codigo_postal: req.body.codigo_postal
    }
    Sede.modificarSedeId(
        req.params.cod_sede,
        sede,
        (err,data)=>{
            if(err)
            {
                if(err.kind==="not_found")
                {
                    res.status(404).send({
                        message: `No se encuentra el producto con el codigo ${req.params.cod_sede}`
                    });
                }
                else
                {
                    res.status(500).send({
                        message: "Error al modificar la sede con el código: "+req.params.cod_sede
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

exports.eliminarSede = (req,res)=>{
    Sede.removerSede(req.params.cod_sede,(err,data)=>{
        if(err)
        {
            if(err.kind=="not_found")
            {
                res.status(404).send({
                    message: `No se ha encontrado la sede con el código: ${req.params.cod_sede}`
                });
            }
            else
            {
                res.status(500).send({
                    message: "No se puede eliminar la sede: "+req.params.cod_sede
                });
            }
        }
        else
        {
            res.send({message:`Sede eliminado correctamente`});
        }
    });
}
//EDIFICIOS
exports.encontrarEdificios = (req,res)=>{
    Edificio.obtenerEdificios((err,data)=>{
        if(err)
        {
            res.status(500).send({
                message: err.message || "Existió un error al recibir el/los edificio(s)"
            });
        }
        else
        {
            res.send(data);
        }
    });
};

exports.encontrarEdificioId = (req,res)=>{
    Edificio.obtenerEdificioId(req.params.cod_edificio,(err,data)=>{
        if(err)
        {
            if(err.kind == "not_found")
            {
                res.status(404).send({
                    message: `No se encuenta el edificio con el Código: ${req.params.cod_edificio}`
                });
            }
            else
            {
                res.status(500).send({
                    message: "Error al recuperar el edificio con el código: "+ req.params.cod_edificio
                });
            }
        }
        else
        {
            res.send(data);
        }
    });
};

exports.nuevoEdificio = (req,res)=>{
    if(!req.body)
    {
        res.status(400).send({
            message: "Campos vacíos"
        });
    }
    const edificio = {
        cod_edificio: req.body.cod_edificio,
        cod_sede: req.body.cod_sede,
        nombre: req.body.nombre,
        cantidad_pisos: req.body.cantidad_pisos
    }
    Edificio.agregarEdificio(edificio,(err,data)=>{
        if(err)
        {
            res.status(500).send({
                message: err.message || "Error al agregar nueva Sede"
            });
        }
        else
        {
            res.send(data);
        }
    });
};

exports.modificarEdificio = (req,res)=>{
    if(!req.body)
    {
        res.status(400).send({
            message: "El contenido no puede estar vacío"
        });
    }
    const edificio = {
        cod_edificio: req.body.cod_edificio,
        cod_sede: req.body.cod_sede,
        nombre: req.body.nombre,
        cantidad_pisos: req.body.cantidad_pisos
    }
    Edificio.modificarEdificioId(
        req.params.cod_edificio,
        edificio,
        (err,data)=>{
            if(err)
            {
                if(err.kind==="not_found")
                {
                    res.status(404).send({
                        message: `No se encuentra el edificio con el codigo ${req.params.cod_edificio}`
                    });
                }
                else
                {
                    res.status(500).send({
                        message: "Error al modificar el edificio con el código: "+req.params.cod_edificio
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

exports.eliminarEdificio = (req,res)=>{
    Edificio.removerEdificio(req.params.cod_edificio,(err,data)=>{
        if(err)
        {
            if(err.kind=="not_found")
            {
                res.status(404).send({
                    message: `No se ha encontrado el edificio con el código: ${req.params.cod_edificio}`
                });
            }
            else
            {
                res.status(500).send({
                    message: "No se puede eliminar el edificio: "+req.params.cod_edificio
                });
            }
        }
        else
        {
            res.send({message:`Edificio eliminado correctamente`});
        }
    });
}
//AULAS
exports.encontrarAulas = (req,res)=>{
    Aula.obtenerAulas((err,data)=>{
        if(err)
        {
            res.status(500).send({
                message: err.message || "Existió un error al recibir el/los edificio(s)"
            });
        }
        else
        {
            res.send(data);
        }
    });
};

exports.encontrarAulaId = (req,res)=>{
    Aula.obtenerAulaId(req.params.cod_aula,(err,data)=>{
        if(err)
        {
            if(err.kind == "not_found")
            {
                res.status(404).send({
                    message: `No se encuenta el aula con el Código: ${req.params.cod_aula}`
                });
            }
            else
            {
                res.status(500).send({
                    message: "Error al recuperar el aula con el código: "+ req.params.cod_aula
                });
            }
        }
        else
        {
            res.send(data);
        }
    });
};

exports.nuevaAula = (req,res)=>{
    if(!req.body)
    {
        res.status(400).send({
            message: "Campos vacíos"
        });
    }
    const aula = {
        cod_aula: req.body.cod_aula,
        cod_edificio: req.body.cod_edificio,
        nombre: req.body.nombre,
        capacidad: req.body.capacidad,
        tipo: req.body.tipo,
        piso:req.body.piso
    }
    Aula.agregarAula(aula,(err,data)=>{
        if(err)
        {
            res.status(500).send({
                message: err.message || "Error al agregar nueva Aula"
            });
        }
        else
        {
            res.send(data);
        }
    });
};

exports.modificarAula = (req,res)=>{
    if(!req.body)
    {
        res.status(400).send({
            message: "El contenido no puede estar vacío"
        });
    }
    const aula = {
        cod_aula: req.body.cod_aula,
        cod_edificio: req.body.cod_edificio,
        nombre: req.body.nombre,
        capacidad: req.body.capacidad,
        tipo: req.body.tipo,
        piso: req.body.piso
    }
    Aula.modificarAulaId(
        req.params.cod_aula,
        aula,
        (err,data)=>{
            if(err)
            {
                if(err.kind==="not_found")
                {
                    res.status(404).send({
                        message: `No se encuentra el aula con el codigo ${req.params.cod_aula}`
                    });
                }
                else
                {
                    res.status(500).send({
                        message: "Error al modificar el aula con el código: "+req.params.cod_aula
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

exports.eliminarAula = (req,res)=>{
    Edificio.removerAula(req.params.cod_aula,(err,data)=>{
        if(err)
        {
            if(err.kind=="not_found")
            {
                res.status(404).send({
                    message: `No se ha encontrado el aula con el código: ${req.params.cod_aula}`
                });
            }
            else
            {
                res.status(500).send({
                    message: "No se puede eliminar el aula: "+req.params.cod_aula
                });
            }
        }
        else
        {
            res.send({message:`Aula eliminada correctamente`});
        }
    });
}