const db = require("../util/conexion.js");

exports.obtenerAsignatura = result => {
    db.query('SELECT * FROM asignatura', (err, res) => {
        if (err) {
            console.log("error", err);
            result(null, err);
            return;
        }
        console.log("Asignatura: ", res);
        result(null, res);
    });
}
exports.obtenerAsignaturaPorNivel = (cod_nivel_educativo, result) => {
    db.query('SELECT * FROM asignatura WHERE COD_NIVEL_EDUCATIVO=?', [cod_nivel_educativo], (err, res) => {
        if (err) {
            console.log("error", err);
            result(null, err);
            return;
        }
        if (res.length) {
            console.log("Se ha encontrado las siguientes asignaturas: ", res);
            result(null, res);
            return;
        }
        result({ kinf: "not_found" }, null);
    });
}
exports.agregarAsignatura = (asignaturaNueva, result) => {
    db.query("INSERT INTO asignatura SET ?", asignaturaNueva, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        console.log("Asignatura añadida correctamente: ", { cod_asignatura: res.cod_asignatura, ...asignaturaNueva });
        result(null, { cod_asignatura: res.cod_asignatura, ...asignaturaNueva });
    });
}
exports.modificarAsignatura = (cod_asignatura, asignatura, result) => {
    db.query("UPDATE asignatura SET COD_NIVEL_EDUCATIVO=?,COD_ASIGNATURA=?,NOMBRE=?,CREDITOS=?,TIPO=?,IMAGEN=? WHERE COD_ASIGNATURA=?",
        [asignatura.cod_nivel_educativo, asignatura.cod_asignatura, asignatura.nombre, asignatura.creditos, asignatura.tipo, asignatura.imagen, cod_asignatura],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }
            if (res.affectedRows == 0) {
                result({ kind: "not_found" }, null);
                return;
            }
            console.log("Modificar Asignatura: ", { cod_asignatura: cod_asignatura, ...asignatura });
            result(null, { cod_asignatura: cod_asignatura, ...asignatura });
        }
    );
}
exports.removerAsignatura = (cod_asignatura, result) => {
    db.query("DELETE FROM asignatura WHERE cod_asignatura=?", cod_asignatura, (err, res) => {
        if (err) {
            console.log("error", err);
            result(null, err);
            return
        }
        if (res.affectedRows == 0) {
            result({ kind: "not_found" }, null);
            return;
        }
        console.log("Asignatura eliminada con el código: ", cod_asignatura);
        result(null, res);
    });
}

exports.obtenerAsignaturaPorCodigoDocente = (codigoDocente, result) => {

    let sql = 'SELECT asignatura.NOMBRE, asignatura.COD_NIVEL_EDUCATIVO,'
        + 'asignatura.COD_ASIGNATURA,asignatura_periodo.COD_DOCENTE,asignatura_periodo.COD_PARALELO, paralelo.NOMBRE as NOMPARALELO '
        + 'FROM asignatura '
        + 'INNER JOIN asignatura_periodo ON asignatura.COD_ASIGNATURA = asignatura_periodo.COD_ASIGNATURA '
        + 'INNER JOIN paralelo ON paralelo.COD_PARALELO = asignatura_periodo.COD_PARALELO '
        + 'WHERE asignatura_periodo.COD_DOCENTE = ?'

    db.query(sql,[codigoDocente], (err, res) => {
        if (err) {
            console.log("error", err);
            return
        }
        result(null, res);
    });
}










