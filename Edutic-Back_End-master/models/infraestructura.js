const db = require('../util/conexion.js');

/**const Sede = function(sede)
{
    this.cod_sede = sede.cod_sede;
    this.nombre = sede.nombre;
    this.direccion = sede.direccion;
    this.telefono = sede.telefono;
    this.codigo_postal = sede.codigo_postal;
}**/

/**const Edificio = function(edificio)
{
    this.cod_edificio = edificio.cod_edificio;
    this.cod_sede = edificio.cod_sede;
    this.nombre = edificio.nombre;
    this.cantidad_pisos = edificio.cantidad_pisos;
}**/

/**const Aula = function(aula)
{
    this.cod_aula = aula.cod_aula;
    this.cod_edificio = aula.cod_edificio;
    this.nombre = aula.nombre;
    this.capacidad = aula.capacidad;
    this.tipo = aula.tipo;
    this.piso = aula.piso;
}**/
//SEDES
exports.obtenerSedes = result=>{
    db.query('SELECT * FROM sede',(err,res)=>{
        if(err)
        {
            console.log("error",err);
            result(null,err);
            return;
        }
        console.log("Sede: ",res);
        result(null,res);
    });
}
exports.obtenerSedeId = (cod_sede,result)=>{
    db.query('SELECT * FROM sede WHERE COD_SEDE=?',[cod_sede],(err,res)=>{
        if(err)
        {
            console.log("error",err);
            result(null,err);
            return;
        }
        if(res.length)
        {
            console.log("La sede se ha encontrado exitosamente: ",res[0]);
            result(null,res[0]);
            return;
        }
        result({kinf: "not_found"},null);
    });
}
exports.agregarSede = (sedeNueva,result)=>{
    db.query("INSERT INTO sede SET ?", sedeNueva,(err,res)=>{
        if(err)
        {
            console.log("error: ",err);
            result(err,null);
            return;
        }
        console.log("Sede añadida correctamente: ",{cod_sede: res.cod_sede, ...sedeNueva});
        result(null,{cod_sede: res.cod_sede, ...sedeNueva});
    });
}
exports.modificarSedeId = (cod_sede,sede,result)=>{
    db.query("UPDATE sede SET COD_SEDE=?,NOMBRE=?,DIRECCION=?,TELEFONO=?,CODIGO_POSTAL=? WHERE COD_SEDE=?",
            [sede.cod_sede,sede.nombre,sede.direccion,sede.telefono,sede.codigo_postal,cod_sede],
            (err,res)=>{
                if(err)
                {
                    console.log("error: ",err);
                    result(null,err);
                    return;
                }
                if(res.affectedRows == 0)
                {
                    result({kind:"not_found"},null);
                    return;
                }
                console.log("Modificar Sede: ",{cod_sede:cod_sede, ...sede});
                result(null,{cod_sede:cod_sede, ...sede});
            }
    );
}
exports.removerSede = (cod_sede,result)=>{
    db.query("DELETE FROM sede WHERE cod_sede=?",cod_sede,(err,res)=>{
        if(err)
        {
            console.log("error",err);
            result(null,err);
            return
        }
        if(res.affectedRows==0)
        {
            result({kind:"not_found"},null);
            return;
        }
        console.log("Sede eliminada con el código: ",cod_sede);
        result(null,res);
    });
}
//EDIFICIOS
exports.obtenerEdificios = result =>{
    db.query('SELECT * FROM edificio',(err,res)=>{
        if(err)
        {
            console.log("error",err);
            result(null,err);
            return;
        }
        console.log("Edificio: ",res);
        result(null,res);
    });
}
exports.obtenerEdificioId = (cod_edificio,result)=>{
    db.query('SELECT * FROM edificio WHERE COD_EDIFICIO=?',[cod_edificio],(err,res)=>{
        if(err)
        {
            console.log("error",err);
            result(null,err);
            return;
        }
        if(res.length)
        {
            console.log("El edificio se ha encontrado exitosamente: ",res[0]);
            result(null,res[0]);
            return;
        }
        result({kinf: "not_found"},null);
    });
}
exports.agregarEdificio = (edificioNuevo,result)=>{
    db.query("INSERT INTO edificio SET ?", edificioNuevo,(err,res)=>{
        if(err)
        {
            console.log("error: ",err);
            result(err,null);
            return;
        }
        console.log("Edificio añadido correctamente: ",{cod_edificio: res.cod_edificio, ...edificioNuevo});
        result(null,{cod_edificio: res.cod_edificio, ...edificioNuevo});
    });
}
exports.modificarEdificioId = (cod_edificio,edificio,result)=>{
    db.query("UPDATE edificio SET COD_EDIFICIO=?,COD_SEDE=?,NOMBRE=?,CANTIDAD_PISOS=? WHERE COD_EDIFICIO=?",
            [edificio.cod_edificio,edificio.cod_sede,edificio.nombre,edificio.cantidad_pisos,cod_edificio],
            (err,res)=>{
                if(err)
                {
                    console.log("error: ",err);
                    result(null,err);
                    return;
                }
                if(res.affectedRows == 0)
                {
                    result({kind:"not_found"},null);
                    return;
                }
                console.log("Modificar Edificio: ",{cod_edificio:cod_edificio, ...edificio});
                result(null,{cod_edificio:cod_edificio, ...edificio});
            }
    );
}
exports.removerEdificio = (cod_edificio,result)=>{
    db.query("DELETE FROM edificio WHERE cod_edificio=?",cod_edificio,(err,res)=>{
        if(err)
        {
            console.log("error",err);
            result(null,err);
            return
        }
        if(res.affectedRows==0)
        {
            result({kind:"not_found"},null);
            return;
        }
        console.log("Edificio eliminado con el código: ",cod_edificio);
        result(null,res);
    });
}
//AULAS
exports.obtenerAulas = result =>{
    db.query('SELECT * FROM aula',(err,res)=>{
        if(err)
        {
            console.log("error",err);
            result(null,err);
            return;
        }
        console.log("Aula: ",res);
        result(null,res);
    });
}
exports.obtenerAulaId = (cod_aula,result)=>{
    db.query('SELECT * FROM aula WHERE COD_AULA=?',[cod_aula],(err,res)=>{
        if(err)
        {
            console.log("error",err);
            result(null,err);
            return;
        }
        if(res.length)
        {
            console.log("El aula se ha encontrado exitosamente: ",res[0]);
            result(null,res[0]);
            return;
        }
        result({kinf: "not_found"},null);
    });
}
exports.agregarAula = (aulaNuevo,result)=>{
    db.query("INSERT INTO aula SET ?", aulaNuevo,(err,res)=>{
        if(err)
        {
            console.log("error: ",err);
            result(err,null);
            return;
        }
        console.log("Aula añadido correctamente: ",{cod_aula: res.cod_aula, ...aulaNuevo});
        result(null,{cod_aula: res.cod_aula, ...aulaNuevo});
    });
}
exports.modificarAulaId = (cod_aula,aula,result)=>{
    db.query("UPDATE aula SET COD_AULA=?,COD_EDIFICIO=?,NOMBRE=?,CAPACIDAD=?,TIPO=?,PISO=? WHERE COD_AULA=?",
            [aula.cod_aula,aula.cod_edificio,aula.nombre,aula.capacidad,aula.tipo,aula.piso,cod_aula],
            (err,res)=>{
                if(err)
                {
                    console.log("error: ",err);
                    result(null,err);
                    return;
                }
                if(res.affectedRows == 0)
                {
                    result({kind:"not_found"},null);
                    return;
                }
                console.log("Modificar Aula: ",{cod_aula:cod_aula, ...aula});
                result(null,{cod_aula:cod_aula, ...aula});
            }
    );
}
exports.removerAula = (cod_aula,result)=>{
    db.query("DELETE FROM aula WHERE cod_aula=?",cod_aula,(err,res)=>{
        if(err)
        {
            console.log("error",err);
            result(null,err);
            return
        }
        if(res.affectedRows==0)
        {
            result({kind:"not_found"},null);
            return;
        }
        console.log("aula eliminado con el código: ",cod_aula);
        result(null,res);
    });
}