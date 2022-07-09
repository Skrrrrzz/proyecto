const { response } = require('express');
const Usuario = require ('../models/usuario');
const bcrypt = require('bcryptjs')
const {generarJWT} = require('../helpers/jwt')


const crearUsuario = async(req, res = response) =>{

    const{name,email,password,user,semestre,rol} = req.body;


    try{
            //Verificar email

            const usuario = await Usuario.findOne({email});
            
            if( usuario) {
                return res.status(400).json({
                    ok: false,
                    msg: 'El usuario ya existe con ese email'
                })
            }
            // Verificar usuario
            const usuario2 = await Usuario.findOne({user});
            
            if( usuario2) {
               return res.status(400).json({
                   ok: false,
                   msg: 'El user ya existe'
                })
            }

            //Crear usuario con el modelo

            const dbUser = new Usuario(req.body);

            //Crear usuario en la BD

            dbUser.save();

            //Encryptar la contraseña

            const salt = bcrypt.genSaltSync();
            dbUser.password  = bcrypt.hashSync(password, salt);

            //Generar JWT

            const token = await generarJWT(dbUser.id, user, rol);

            //Generar respuesta exitosa
            return res.status(201).json({
                ok:true,
                uid: dbUser.id,
                user,
                email,
                rol,
                token
            })

    } catch (error) {
        return res.status(500).json({
            ok:false,
            msg: 'Por favor hable con el administrador'
        });
    }
  

}

const loginUsuario = async(req, res) => {
    


    const{user, password} = req.body;

    try{

        const dbUser = await Usuario.findOne({ user });

        if(!dbUser){
            return res.status(400).json({
                ok:false,
                msg: 'El user no existe'
            })
        }

        //Confirmar si el password hace match

        const validPassword = bcrypt.compareSync(password, dbUser.password);

        if(!validPassword){

            return res.status(400).json({
                ok:false,
                msg: 'El password no es valido'
            })

        }
        
        //Generar el JWT
        const token = await generarJWT(dbUser.id, dbUser.user,dbUser.rol);

        //Respuesta del servicio

        return res.json({
            ok:true,
            uid: dbUser.id,
            user: dbUser.user,
            email: dbUser.email,
            rol: dbUser.rol,
            token
        })

    } catch(error) {
        console.log(error);
        return res.status(500).json({
            ok:false,
            msg: 'Hable con el administrador'
        })
    }
}

const revalidarToken =  async (req, res = response) => {
    
    const{uid, user,rol} = req;

    //leer la base de datos para obtener el email

    const dbUser = await Usuario.findById(uid);


    const token = await generarJWT(uid, user,rol);

    return res.json({
        ok:true,
        uid,
        user,
        email: dbUser.email,
        rol: dbUser.rol,
        token
    })
}

module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarToken
}