const jwt = require('jsonwebtoken');

const generarJWT = (uid, user) =>{

    const payload = {uid, user};
    

    return new Promise( (resolve, reject) =>{

        jwt.sign( payload, process.env.SECRET_JWT_SEED, {
            expiresIn: '24h'
        }, (err,token) =>{
    
            if(err){
                console.log(err);
            }else{
                resolve(token)
            }
        
    })
    });

}

module.exports = {
    generarJWT
}