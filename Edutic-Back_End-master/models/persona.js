const db = require("../util/conexion.js");
//Personal
exports.agregarPersonal = (personaNueva,result)=>{
    db.query("INSERT INTO persona SET ?", personaNueva,(err,res)=>{
        if(err)
        {
            console.log("error: ",err);
            result(err,null);
            return;
        }
        console.log("Persona añadida correctamente: ",{cod_persona: res.cod_persona, ...personaNueva});
        result(null,{cod_persona: res.cod_persona, ...personaNueva});
    });
}

//Estudiante - Representante
exports.agregarEstudiante = (representanteNuevo,result)=>{
    db.query("INSERT INTO persona SET?", representanteNuevo,(err,res)=>{
        if(err)
        {
            console.log("error",err);
            result(err,null);
            return;
        }
        console.log("Estudiante añadido de forma correcta:",{cod_persona:res.cod_persona, ...representanteNuevo});
        result(null,{cod_persona:res.cod_persona, ...representanteNuevo});
    });
    db.query("SELECT cod_persona * FROM persona WHERE CEDULA=?",[representanteNuevo.cedula],(err,res)=>{
        if(res.length)
        {
            console.log("El representante se ha encontrado exitosamente: ",representanteNuevo.cedula[0]);
            var cod_persona_representante = representanteNuevo.cedula;
            result(null,representanteNuevo.cedula[0]);
            return;
            db.query("INSERT INTO PERSONA SET?",estudianteNuevo,(err,res)=>{
                result(null,{cod_persona:res.cod_persona, cod_persona_representante, ...representanteNuevo});
            })
        }
    });

    /**db.query("INSERT INTO persona SET?", estudianteNuevo,(err,res)=>{
        if(err)
        {
            console.log("error",err);
            result(err,null);
            return;
        }
        console.log("Estudiante añadido de forma correcta:",{cod_persona:res.cod_persona, cod_persona:res.cod_persona_representante, ...representanteNuevo});
    });**/
}