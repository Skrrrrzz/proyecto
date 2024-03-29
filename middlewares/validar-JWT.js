const { response } = require('express');
const jwt = require('jsonwebtoken');


const validarJWT = (req, res = response, next) => {

    const token = req.header('x-token');

    if(!token){
        return res.status(401).json({
            ok:false,
            msg: 'error en el token'
        })
    }


    try{

        const {uid,user} = jwt.verify(token, process.env.SECRET_JWT_SEED);
        req.uid = uid;
        req.user = user;
 
    } catch(error){
        return res.status(401).json({
            ok:false,
            msg: 'Token no valido'
        })
    }
    //Todo OK
    next();
}


module.exports = {
    validarJWT
}