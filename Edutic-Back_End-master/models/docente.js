const db = require("../util/conexion.js");


exports.insertarNotasAlumnoAsignaturaPeriodo = (lista, result) => {


    let sql = 'INSERT INTO alumno_asignatura_periodo (COD_PERIODO_LECTIVO,COD_ALUMNO,COD_NIVEL_EDUCATIVO,'
        + 'COD_ASIGNATURA,COD_PARALELO,COD_DOCENTE,NOTA1,NOTA2,NOTA3) VALUES ?'

    console.log(sql)

    db.query(sql, [lista], (err, res) => {
        if (err) {
            console.log("error", err);
            return
        }
        result(null, res);
    });
}
exports.actualizarNotasEstudiante = (lista, result) => {

    var queries='' ;
    console.log(lista)
    lista.forEach(function (item) {
      queries += db.format("UPDATE alumno_asignatura_periodo SET NOTA4 = ?, NOTA5 = ?, NOTA6 = ? WHERE  COD_ALUMNO = ? AND COD_ASIGNATURA = ?; ", item);
    });

    console.log(queries)
    console.log('____________________________')

  db.query(queries, (err, res) => {
      if (err) {
          console.log("error", err);
          return
      }
      result(null, res);
  });
}

exports.insertarAsistenciaAlumnosAsignaturaPeriodo = (lista, result) => {


    let sql = 'INSERT INTO asistencia_periodo (COD_PERIODO_LECTIVO,COD_ALUMNO,COD_NIVEL_EDUCATIVO, FECHA,ESTADO)  VALUES ?'

    console.log(sql)

    db.query(sql, [lista], (err, res) => {
        if (err) {
            console.log("error", err);
            return
        }
        result(null, res);
    });
}

exports.insertarTareaParaAlumnos = (tarea, result) => {


    let sql = 'INSERT INTO tarea_asignatura SET ?'

    console.log(sql)

    db.query(sql,tarea,(err, res) => {
        if (err) {
            console.log("error", err);
            return
        }
        result(null, res);
    });
}