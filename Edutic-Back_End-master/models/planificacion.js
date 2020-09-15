const db = require("../util/conexion.js");

//PERIODOS
exports.obtenerPeriodos = result=>{
    db.query('SELECT * FROM periodo_lectivo',(err,res)=>{
        if(err)
        {
            console.log("error",err);
            result(null,err);
            return;
        }
        console.log("Periodo: ",res);
        result(null,res);
    });
}
exports.agregarPeriodo = (periodoNuevo,result)=>{
    db.query("INSERT INTO periodo_lectivo SET ?", periodoNuevo,(err,res)=>{
        if(err)
        {
            console.log("error: ",err);
            result(err,null);
            return;
        }
        console.log("Periodo añadido correctamente: ",{cod_periodo: res.cod_periodo, ...periodoNuevo});
        result(null,{cod_periodo: res.cod_periodo, ...periodoNuevo});
    });
}
exports.modificarPeriodo = (cod_periodo_lectivo,periodo,result)=>{
    db.query("UPDATE periodo_lectivo SET COD_PERIODO_LECTIVO=?,ESTADO=?,FECHA_INICIO=?,FECHA_FIN=? WHERE COD_PERIODO_LECTIVO=?",
            [periodo.cod_periodo_lectivo,periodo.estado,periodo.fecha_inicio,periodo.fecha_fin,cod_periodo_lectivo],
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
                console.log("Modificar Periodo: ",{cod_periodo_lectivo:cod_periodo_lectivo, ...periodo});
                result(null,{cod_periodo_lectivo:cod_periodo_lectivo, ...periodo});
            }
    );
}
exports.removerPeriodo = (cod_periodo_lectivo,result)=>{
    db.query("DELETE FROM periodo_lectivo WHERE COD_PERIODO_LECTIVO=?",cod_periodo_lectivo,(err,res)=>{
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
        console.log("Periodo eliminado con el código: ",cod_periodo_lectivo);
        result(null,res);
    });
}

//PARALELOS
exports.obtenerParalelos = result=>{
    db.query('SELECT * FROM paralelo',(err,res)=>{
        if(err)
        {
            console.log("error",err);
            result(null,err);
            return;
        }
        console.log("Paralelo: ",res);
        result(null,res);
    });
}
exports.agregarParalelo = (paraleloNuevo,result)=>{
    db.query("INSERT INTO paralelo SET ?", paraleloNuevo,(err,res)=>{
        if(err)
        {
            console.log("error: ",err);
            result(err,null);
            return;
        }
        console.log("paralelo añadido correctamente: ",{cod_paralelo: res.cod_paralelo, ...paraleloNuevo});
        result(null,{cod_paralelo: res.cod_paralelo, ...paraleloNuevo});
    });
}