const db = require('../util/conexion.js');

exports.obtenerDatosLogin = (username,result) =>{

    var sql='SELECT * FROM USUARIO U, ROL_USUARIO R, PERSONA P, ROL S WHERE U.COD_USUARIO=R.COD_USUARIO AND S.COD_ROL=R.COD_ROL AND U.COD_PERSONA=P.COD_PERSONA AND U.NOMBRE_USUARIO=?'
    console.log(sql)
    db.query(sql,username,(err,res)=>{
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
