const db = require("../util/conexion.js");
/*Listar estudiantes segun  nivel y periodo*/
exports.obtenerListadoDeEstudiantesPorNivelYPeriodo = (cod_nivel_educativo, cod_periodo_lectivo, result) => {

    let sql = 'SELECT persona.COD_PERSONA, persona.APELLIDO, persona.NOMBRE FROM persona INNER JOIN matricula_periodo ON persona.COD_PERSONA = matricula_periodo.COD_ALUMNO'
        + ' WHERE matricula_periodo.COD_NIVEL_EDUCATIVO = ? AND COD_PERIODO_LECTIVO = ? ORDER BY persona.APELLIDO'
    console.log(sql)

    db.query(sql, [cod_nivel_educativo, cod_periodo_lectivo], (err, res) => {
        if (err) {
            console.log("error", err);
            return
        }
        result(null, res);
    });
}


exports.obtenerCalificacionesEstudiante = (cod_alumno, cod_periodo, result) => {

    let sql = 'SELECT alumno_asignatura_periodo.NOTA1, alumno_asignatura_periodo.NOTA2, alumno_asignatura_periodo.NOTA3,asignatura.NOMBRE'
        + ' FROM alumno_asignatura_periodo'
        + ' INNER JOIN asignatura ON asignatura.COD_ASIGNATURA = alumno_asignatura_periodo.COD_ASIGNATURA'
        + ' WHERE alumno_asignatura_periodo.COD_ALUMNO = ? AND alumno_asignatura_periodo.COD_PERIODO_LECTIVO = ?'

    console.log(sql)

    db.query(sql, [cod_alumno, cod_periodo], (err, res) => {
        if (err) {
            console.log("error", err);
            return
        }
        result(null, res);
    });
}

exports.obtenerTareaEstudiante = (cod_alumno, result) => {

    let estado = 'ACT'
    let sql = 'SELECT tarea_asignatura.TITULO_TAREA,tarea_asignatura.DETALLE_TAREA,'
        + ' tarea_asignatura.FECHA_ENTREGA,asignatura.IMAGEN,asignatura.NOMBRE,tarea_asignatura.COD_TAREA,tarea_asignatura.ARCHIVO'
        + ' FROM tarea_asignatura'
        + ' INNER JOIN matricula_periodo ON tarea_asignatura.COD_NIVEL_EDUCATIVO = matricula_periodo.COD_NIVEL_EDUCATIVO'
        + ' INNER JOIN asignatura ON tarea_asignatura.COD_ASIGNATURA = asignatura.COD_ASIGNATURA'
        + ' WHERE matricula_periodo.COD_ALUMNO=?AND tarea_asignatura.ESTADO=?'

    console.log(sql)

    db.query(sql, [cod_alumno, estado], (err, res) => {
        if (err) {
            console.log("error", err);
            return
        }
        result(null, res);
    });
}

exports.obtenerMateriaEstudiante = (cod_alumno, cod_periodo_lectivo, result) => {

    let sql = 'SELECT asignatura_periodo.COD_ASIGNATURA,asignatura.NOMBRE FROM asignatura_periodo'
        + ' INNER JOIN matricula_periodo ON matricula_periodo.COD_NIVEL_EDUCATIVO = asignatura_periodo.COD_NIVEL_EDUCATIVO'
        + ' INNER JOIN asignatura ON asignatura.COD_ASIGNATURA = asignatura_periodo.COD_ASIGNATURA'
        + ' WHERE matricula_periodo.COD_ALUMNO= ? AND matricula_periodo.COD_PERIODO_LECTIVO = ?'
    console.log(sql)

    db.query(sql, [cod_alumno, cod_periodo_lectivo], (err, res) => {
        if (err) {
            console.log("error", err);
            return
        }
        result(null, res);
    });
}
exports.obtenerNotas1Quimestre = (cod_alumno, cod_asignatura, result) => {

    console.log(cod_alumno)
    console.log(cod_asignatura)

    let sql = 'SELECT NOTA1,NOTA2,NOTA3 FROM alumno_asignatura_periodo WHERE COD_ALUMNO = ?'
        + ' AND COD_ASIGNATURA = ?'

    console.log(sql)

    db.query(sql, [cod_alumno, cod_asignatura], (err, res) => {
        if (err) {
            console.log("error", err);
            return
        }
        result(null, res);
    });
}
exports.obtenerNotas2Quimestre = (cod_alumno, cod_asignatura, result) => {

    let sql = 'SELECT NOTA4,NOTA5,NOTA6 FROM alumno_asignatura_periodo WHERE COD_ALUMNO = ?'
        + ' AND COD_ASIGNATURA = ?'

    console.log(sql)

    db.query(sql, [cod_alumno, cod_asignatura], (err, res) => {
        if (err) {
            console.log("error", err);
            return
        }
        result(null, res);
    });

}