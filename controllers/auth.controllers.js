const { response } = require('express');
const Usuario = require ('../models/usuario');
const Proyecto = require('../models/proyecto');
const Calendario = require('../models/calendario');
const Citas = require('../models/citas');
const Documento = require('../models/documentos');
const Entrega = require('../models/entrega');
const Propuesta = require('../models/propuesta');
const Retroalimentacion = require('../models/retroalimentacion');
const bcrypt = require('bcryptjs')
const {generarJWT} = require('../helpers/jwt');
const documentos = require('../models/documentos');


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

            const token = await generarJWT(dbUser.id, user);

            //Generar respuesta exitosa
            return res.status(201).json({
                ok:true,
                uid: dbUser.id,
                user,
                email,
                token
            })

    } catch (error) {
        return res.status(500).json({
            ok:false,
            msg: 'Por favor hable con el administrador registrar'
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
        const token = await generarJWT(dbUser.id, dbUser.user);

        //Respuesta del servicio

        return res.json({
            ok:true,
            uid: dbUser.id,
            user: dbUser.user,
            email: dbUser.email,
            token
        })

    } catch(error) {
        console.log(error);
        return res.status(500).json({
            ok:false,
            msg: 'Hable con el administrador inicio de sesion'
        })
    }
}

const revalidarToken =  async (req, res = response) => {
    
    const{uid, user} = req;

    //leer la base de datos para obtener el email

    const dbUser = await Usuario.findById(uid);


    const token = await generarJWT(uid, user, rol);

    return res.json({
        ok:true,
        uid,
        user,
        email: dbUser.email,
        token
    })
}
const crearProyecto = async(req,res = response) =>{
    const {titulo, alumno} = req.body;

    try{

        // Verificar usuario
        const  proyecto= await Proyecto.findOne({alumno});
        
        if( proyecto) {
           return res.status(400).json({
               ok: false,
               msg: 'El alumno ya esta en un proyecto'
            })
        }

        //Crear usuario con el modelo

        const dbProyecto = new Proyecto(req.body);

        //Crear usuario en la BD

        dbProyecto.save();

        return res.status(201).json({
            ok:true,
            dbProyecto
        })
}        
 catch (error) {
    return res.status(500).json({
        ok:false,
        msg: 'Por favor hable con el administrador proyecto'
    });
}
}

const crearPropuesta = async(req,res = response) =>{
    const {titulo, profesorguia, descripcion} = req.body;

    try{

        //Crear usuario con el modelo

        const dbPropuesta = new Propuesta(req.body);

        //Crear usuario en la BD

        dbPropuesta.save();
        return res.status(201).json({
            ok:true,
            dbPropuesta
        })
}        
 catch (error) {
    return res.status(500).json({
        ok:false,
        msg: 'Por favor hable con el administrador propuesta'
    });
}
}
const crearCalendario = async(req,res = response) =>{
    const {titulo, fecha} = req.body;

    try{

        //Crear usuario con el modelo

        const dbCalendario = new Calendario(req.body);

        //Crear usuario en la BD

        dbCalendario.save();
        return res.status(201).json({
            ok:true,
            dbCalendario
        })
}        
 catch (error) {
    return res.status(500).json({
        ok:false,
        msg: 'Por favor hable con el administrador calendario'
    });
}
}
const crearCitas = async(req,res = response) =>{
    const {titulo, link} = req.body;

    try{

        //Crear usuario con el modelo

        const dbCitas = new Citas(req.body);

        //Crear usuario en la BD

        dbCitas.save();
        return res.status(201).json({
            ok:true,
            dbCitas
        })
}        
 catch (error) {
    return res.status(500).json({
        ok:false,
        msg: 'Por favor hable con el administrador citas'
    });
}
}
const crearDocumentos = async(req,res = response) =>{
    const {titulo, autor, categoria, linkB,linkR} = req.body;

    try{

        //Crear usuario con el modelo

        const dbDocuemento = new Documento(req.body);

        //Crear usuario en la BD

        dbDocuemento.save();
        return res.status(201).json({
            ok:true,
            dbDocuemento
        })
}        
 catch (error) {
    return res.status(500).json({
        ok:false,
        msg: 'Por favor hable con el administrador documento'
    });
}
}
const crearEntrega = async(req,res = response) =>{
    const {titulo, autor, fecha, documento} = req.body;

    try{

        //Crear usuario con el modelo

        const dbEntrega = new Entrega(req.body);

        //Crear usuario en la BD

        dbEntrega.save();
        return res.status(201).json({
            ok:true,
            dbEntrega
        })
}        
 catch (error) {
    return res.status(500).json({
        ok:false,
        msg: 'Por favor hable con el administrador entrega'
    });
}
}
const crearRetroalimentacion = async(req,res = response) =>{
    const {titulo, autor, fecha, documento } = req.body;

    try{

        //Crear usuario con el modelo

        const dbRetro = new Retroalimentacion(req.body);

        //Crear usuario en la BD

        dbRetro.save();
        return res.status(201).json({
            ok:true,
            dbRetro
        })
}        
 catch (error) {
    return res.status(500).json({
        ok:false,
        msg: 'Por favor hable con el administrador retroalimentacion'
    });
}
}

//mostrar usuario
const buscarUsuario =  async (req, res) => {
    
    const uid = req.header('x-id')
try{
    //leer la base de datos para obtener el email
    const dbUser = await Usuario.findOne({user:uid});

    return res.status(201).json({
        ok:true,
        dbUser
    })
}catch(error){
    return res.status(400).json({
        ok:false,
        msg: 'No se encontro'
    });
}
}
// buscar proyecto
const buscarProyecto =  async (req, res) => {
    
    const uid = req.header('x-id')
try{
    //leer la base de datos para obtener el email
    const dbUser = await Proyecto.findOne({user:uid});

    return res.status(201).json({
        ok:true,
        dbUser
    })
}catch(error){
    return res.status(400).json({
        ok:false,
        msg: 'No se encontro'
    });
}
}
// buscar propuesta
const buscarPropuesta =  async (req, res) => {
    
    const uid = req.header('x-id')
try{
    //leer la base de datos para obtener el email
    const dbUser = await Propuesta.findOne({user:uid});

    return res.status(201).json({
        ok:true,
        dbUser
    })
}
catch(error){
    return res.status(400).json({
        ok:false,
        msg: 'No se encontro'
    });
}
}
//buscar fecha de calendario
const buscarFecha =  async (req, res) => {
    
    const uid = req.header('x-id')
try{
    //leer la base de datos para obtener el email
    const dbUser = await Calendario.findOne({user:uid});

    return res.status(201).json({
        ok:true,
        dbUser
    })
}
catch(error){
    return res.status(400).json({
        ok:false,
        msg: 'No se encontro'
    });
}
}
// buscar citas
const buscarCitas =  async (req, res) => {
 try{   
    const uid = req.header('x-id')

    //leer la base de datos para obtener el email
    const dbUser = await Citas.findOne({user:uid});

    return res.status(201).json({
        ok:true,
        dbUser
    })
}catch(error){
    return res.status(400).json({
        ok:false,
        msg: 'No se encontro'
    });
}
}
//buscar entrega
const buscarEntrega =  async (req, res) => {
    
    const uid = req.header('x-id')
try{
    //leer la base de datos para obtener el email
    const dbUser = await Entrega.findOne({user:uid});

    return res.status(201).json({
        ok:true,
        dbUser
    })
}
catch(error){
    return res.status(400).json({
        ok:false,
        msg: 'No se encontro'
    });
}
}
//buscar retroalimentacion
const buscarRetroalimentacion =  async (req, res) => {
    
    const uid = req.header('x-id')
try{
    //leer la base de datos para obtener el email
    const dbUser = await Retroalimentacion.findOne({user:uid});

    return res.status(201).json({
        ok:true,
        dbUser
    })
}catch(error){
    return res.status(400).json({
        ok:false,
        msg: 'No se encontro'
    });
}
}
// buscar documentos
const buscarDocumentos =  async (req, res) => {
    
    const uid = req.header('x-id')
try{
    //leer la base de datos para obtener el email
    const dbUser = await Documento.findOne({user:uid});

    return res.status(201).json({
        ok:true,
        dbUser
    })
}catch(error){
    return res.status(400).json({
        ok:false,
        msg: 'No se encontro'
    });
}
}
//eliminar usuario
const eliminarUsuario =  async (req, res) => {
    
    const uid = req.header('x-id')
try{
    //leer la base de datos para obtener el email
    const dbUser = await Usuario.findOne({user:uid});

    dbUser.remove();

    return res.status(201).json({
        ok:true,
        msg:'eliminado'
    });
}catch(error){
    return res.status(400).json({
        ok:false,
        msg: 'No se encontro'
    });
}
}
//eliminar proyecto
const eliminarProyecto =  async (req, res) => {
    
    const uid = req.header('x-id')
try{
    //leer la base de datos para obtener el email
    const dbUser = await Proyecto.findOne({user:uid});

    dbUser.remove();

    return res.status(201).json({
        ok:true,
        msg:'eliminado'
    });
}catch(error){
    return res.status(400).json({
        ok:false,
        msg: 'No se encontro'
    });
}
}
//eliminar propuesta
const eliminarPropuesta =  async (req, res) => {
    
    const uid = req.header('x-id')
try{
    //leer la base de datos para obtener el email
    const dbUser = await Propuesta.findOne({user:uid});

    dbUser.remove();

    return res.status(201).json({
        ok:true,
        msg:'eliminado'
    })
}catch(error){
    return res.status(400).json({
        ok:false,
        msg: 'No se encontro'
    });
}
}
//eliminar citas
const eliminarCitas =  async (req, res) => {
    
    const uid = req.header('x-id')
try{
    //leer la base de datos para obtener el email
    const dbUser = await Citas.findOne({user:uid});

    dbUser.remove();

    return res.status(201).json({
        ok:true,
        ok:'eliminado'
    });
}
catch(error){
    return res.status(400).json({
        ok:false,
        msg: 'No se encontro'
    });
}
}
//eliminar fecha
const eliminarFecha =  async (req, res) => {
    
    const uid = req.header('x-id')
try{
    //leer la base de datos para obtener el email
    const dbUser = await Calendario.findOne({user:uid});

    dbUser.remove();

    return res.status(201).json({
        ok:true,
        msg:'eliminado'
    });
    
}catch(error){
    return res.status(400).json({
        ok:false,
        msg: 'No se encontro'
    });
}
}
//eliminar entrega
const eliminarEntrega =  async (req, res) => {
    
    const uid = req.header('x-id')
try{
    //leer la base de datos para obtener el email
    const dbUser = await Entrega.findOne({user:uid});

    dbUser.remove();

    return res.status(201).json({
        ok:true,
        msg:'eliminado'
    });
}catch(error){
    return res.status(400).json({
        ok:false,
        msg: 'No se encontro'
    });
}
}
//eliminar retroalimentacion
const eliminarRetroalimentacion =  async (req, res) => {
    
    const uid = req.header('x-id')
try{
    //leer la base de datos para obtener el email
    const dbUser = await Retroalimentacion.findOne({user:uid});

    dbUser.remove();

    return res.status(201).json({
        ok:true,
        msg:'eliminado'
    });
}catch(error){
    return res.status(400).json({
        ok:false,
        msg: 'No se encontro'
    });
}
}
//eliminar documentos
const eliminarDocumentos =  async (req, res) => {
    
    const uid = req.header('x-id')
try{
    //leer la base de datos para obtener el email
    const dbUser = await Documento.findById(uid);

    dbUser.remove();

    return res.status(201).json({
        ok:true,
        msg:'eliminado'
    });
}catch(error){
    return res.status(400).json({
        ok:false,
        msg: 'No se encontro'
    });
}
}
//actualizar usuarios
const actualizarUsuario =  async (req, res) => {
    
    const uid = req.params._id
    const update = req.body


    Usuario.findByIdAndUpdate(uid,update, (err)=>
    {
        if(err) return res.status(500).json({
            ok: false,
            msg: 'no se pudo actualizar'
        })
        return res.status(201).json({
            ok:true,
            msg: 'actualizado'
        })
    })
    



}
//actualizar proyectos
const actualizarProyecto =  async (req, res) => {
    
    const uid = req.params._id
    const update = req.body


    Proyecto.findByIdAndUpdate(uid,update, (err)=>
    {
        if(err) return res.status(500).json({
            ok: false,
            msg: 'no se pudo actualizar'
        })
        return res.status(201).json({
            ok:true,
            msg: 'actualizado'
        })
    })
    



}
//actualizar propuestas
const actualizarPropuestas =  async (req, res) => {
    
    const uid = req.params._id
    const update = req.body


    Propuesta.findByIdAndUpdate(uid,update, (err)=>
    {
        if(err) return res.status(500).json({
            ok: false,
            msg: 'no se pudo actualizar'
        })
        return res.status(201).json({
            ok:true,
            msg: 'actualizado'
        })
    })
    



}
//actualizar fechas
const actualizarFecha =  async (req, res) => {
    
    const uid = req.params._id
    const update = req.body


    Calendario.findByIdAndUpdate(uid,update, (err)=>
    {
        if(err) return res.status(500).json({
            ok: false,
            msg: 'no se pudo actualizar'
        })
        return res.status(201).json({
            ok:true,
            msg: 'actualizado'
        })
    })
    



}
//actualizar citas
const actualizarCitas =  async (req, res) => {
    
    const uid = req.params._id
    const update = req.body


    Citas.findByIdAndUpdate(uid,update, (err)=>
    {
        if(err) return res.status(500).json({
            ok: false,
            msg: 'no se pudo actualizar'
        })
        return res.status(201).json({
            ok:true,
            msg: 'actualizado'
        })
    })
    



}
//actualizar entrega
const actualizarEntrega =  async (req, res) => {
    
    const uid = req.params._id
    const update = req.body


    Entrega.findByIdAndUpdate(uid,update, (err)=>
    {
        if(err) return res.status(500).json({
            ok: false,
            msg: 'no se pudo actualizar'
        })
        return res.status(201).json({
            ok:true,
            msg: 'actualizado'
        })
    })
    



}
//actualizar retro  
const actualizarRetroalimentacion =  async (req, res) => {
    
    const uid = req.params._id
    const update = req.body


    Retroalimentacion.findByIdAndUpdate(uid,update, (err)=>
    {
        if(err) return res.status(500).json({
            ok: false,
            msg: 'no se pudo actualizar'
        })
        return res.status(201).json({
            ok:true,
            msg: 'actualizado'
        })
    })
    



}
//actualizar documentos
const actualizarDocumentos =  async (req, res) => {
    
    const uid = req.params._id
    const update = req.body


    Documento.findByIdAndUpdate(uid,update, (err)=>
    {
        if(err) return res.status(500).json({
            ok: false,
            msg: 'no se pudo actualizar'
        })
        return res.status(201).json({
            ok:true,
            msg: 'actualizado'
        })
    })
    



}
module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarToken,
    crearProyecto,
    crearPropuesta,
    crearCalendario,
    crearCitas,
    crearDocumentos,
    crearEntrega,
    crearRetroalimentacion,
    buscarUsuario,
    buscarCitas,
    buscarDocumentos,
    buscarEntrega,
    buscarFecha,
    buscarPropuesta,
    buscarProyecto,
    buscarRetroalimentacion,
    eliminarUsuario,
    eliminarCitas,
    eliminarEntrega,
    eliminarFecha,
    eliminarPropuesta,
    eliminarProyecto,
    eliminarRetroalimentacion,
    eliminarDocumentos,
    actualizarUsuario,
    actualizarCitas,
    actualizarDocumentos,
    actualizarEntrega,
    actualizarFecha,
    actualizarPropuestas,
    actualizarProyecto,
    actualizarRetroalimentacion
}