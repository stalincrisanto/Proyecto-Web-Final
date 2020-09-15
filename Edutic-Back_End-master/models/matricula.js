const db = require('../util/conexion.js');

exports.obtenerPeriodoELectivo = result=>{

    var sql='SELECT * FROM periodo_lectivo'
    console.log(sql)
    db.query(sql,(err,res)=>{
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

