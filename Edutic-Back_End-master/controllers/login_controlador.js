const Login = require('../servicios/login.js');



exports.obtenerDatosUsuarioPorUsername = (req,res)=>{

    let user = req.body;
    console.log(user)
    Login.obtenerDatosLogin(user.username,(err,data)=>{
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
