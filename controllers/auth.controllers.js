const { response } = require('express');
const Usuario = require ('../models/usuario');
const Categoria = require('../models/categoria');
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
const { db } = require('../models/usuario');


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
            if ({semestre} === null){
               const  {semestre} = null;
            }
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
                rol,
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
                msg: 'El usuario no existe'
            })
        }
        if(dbUser.enable === false){
            return res.status(400).json({
                ok:false,
                msg: 'El usuario no esta habilitado, contacte al administrador'
            })
        }

        //Confirmar si el password hace match

        const validPassword = bcrypt.compareSync(password, dbUser.password);

        if(!validPassword){

            return res.status(400).json({
                ok:false,
                msg: 'La contraseña no es valida'
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
            rol: dbUser.rol,
            semestre:dbUser.semestre,
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
    
    const{uid, user} = req;

    //leer la base de datos para obtener el email

    const dbUser = await Usuario.findById(uid);


    const token = await generarJWT(uid, user);

    return res.json({
        ok:true,
        uid,
        user,
        email: dbUser.email,
        token
    })
}
const crearProyecto = async(req,res = response) =>{
    const {titulo, alumno,alumno2} = req.body;

    try{

        // Verificar usuario
        const  proyecto= await Proyecto.findOne({alumno});
        
        if( proyecto) {
           return res.status(400).json({
               ok: false,
               msg: 'El alumno ya esta en un proyecto'
            })
        }
        if(alumno2 !== null){
            const proyecto2 = await Proyecto.findOne({alumno2});
            if(proyecto2){
                return res.status(400).json({
                    ok: false,
                    msg: 'El alumno2 ya esta en un proyecto'
                 })
            }
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
        msg: 'Por favor hable con el administrador proyecto',
        error: error
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
const crearCategoria = async(req,res) =>{
    const{categoria} = req.body;
    try{
        const categorias = await Categoria.findOne({categoria})
        if(categorias){
            return res.status(400).json({
                ok: false,
                msg: 'La categoria ya existe'
            })
        }
        //Crear usuario con el modelo
        const dbCategoria = new Categoria(req.body);
        //Crear usuario en la BD
        dbCategoria.save();
        return res.status(201).json({
            ok:true,
            dbCategoria
        })
}        
 catch (error) {
    return res.status(500).json({
        ok:false,
        msg: 'Por favor hable con el administrador categoria'
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
    const {titulo, autor, fecha, documento,tipo,proyecto} = req.body;
    
    const entrega = await Entrega.findOne({tipo:tipo,proyecto:proyecto})
    console.log(entrega)
    if(entrega){
        Entrega.findByIdAndUpdate(entrega._id,req.body, (err)=>
        {
            if(err){ return res.status(500).json({
                ok: false,
                msg: 'no se pudo actualizar'
            })}else{
                return res.status(201).json({
                    ok:true,
                    msg: 'actualizado'
                })
            }
        })
    }else{
        const dbEntrega = new Entrega(req.body);

        //Crear usuario en la BD

        dbEntrega.save();
        return res.status(201).json({
            ok:true,
            dbEntrega
        })
    }

        //Crear usuario con el modelo

       

}
const veryactualizar = async(req,res)=>{
    const {autor,tipo,evalu} = req.body;
    const retro = await Retroalimentacion.findOne({autor:autor,tipo:tipo,evalu:evalu})
    console.log(retro)
}
const crearRetroalimentacion = async(req,res = response) =>{
    const {titulo, autor, fecha, documento,tipo,evalu } = req.body;

    
        const retro = await Retroalimentacion.findOne({autor:autor,tipo:tipo,evalu:evalu})
        console.log(retro)
        if(retro){
            Retroalimentacion.findByIdAndUpdate(retro._id,req.body, (err)=>
            {
                if(err){ return res.status(500).json({
                    ok: false,
                    msg: 'no se pudo actualizar'
                })}else{
                    return res.status(201).json({
                        ok:true,
                        msg: 'actualizado'
                    })
                }
            })
        }else{
            const dbRetro = new Retroalimentacion(req.body);

            //Crear usuario en la BD
    
            dbRetro.save();
            return res.status(201).json({
                ok:true,
                dbRetro
            })
        }
        //Crear usuario con el modelo

       

}

//mostrar usuario
const buscarUsuario =  async (req, res) => {
    
    const uid = req.params._id
try{
    //leer la base de datos para obtener el email
 Usuario.find({_id:uid}, function(err,usuario){
        return res.status(201).send(usuario)
    });
}catch(error){
    return res.status(400).json({
        ok:false,
        msg: 'No se encontro'
    });
}
}
//buscar entregas
const buscarEntregas = async(req,res) =>{
    const uid = req.params._id
 try{   
    const dbUser = await Proyecto.find({$or:[{alumno:uid},{alumno2:uid}]})
    console.log(dbUser[0]._id);
    Entrega.find({proyecto:dbUser[0]._id}, function (err,entregas){
        return res.status(200).send(entregas)
    }).populate('autor')
}catch(error){
    return res.status(400).json({
        ok:false,
        msg:'No se encontro'
    })
}
}

const buscarRetro = async(req,res)=>{
    const uid = req.params._id
    try{
        const dbUser = await Proyecto.find({$or:[{alumno:uid},{alumno2:uid}]})
        Retroalimentacion.find({proyecto:dbUser[0]._id},function (err,datos){
            return res.status(200).send(datos)
        }).populate('autor')
    }catch(error){
        return res.status(400).json({
            ok:false,
            msg:'No se encontro'
        })
    }
}
//buscar todos los usuarios
const buscartodosUsuario =  async (req, res) => {
    
try{
    //leer la base de datos para obtener el email
 Usuario.find( function(err,usuario){
        return res.status(201).send(usuario)
    });
}catch(error){
    return res.status(400).json({
        ok:false,
        msg: 'No se encontro'
    });
}
}
//buscar todos los documentos
const buscartodosDocumentos =  async (req, res) => {
    
    try{
        //leer la base de datos para obtener el email
     Documento.find( function(err,usuario){
            return res.status(201).send(usuario)
        }).populate('categoria');
    }catch(error){
        return res.status(400).json({
            ok:false,
            msg: 'No se encontro'
        });
    }
    }
//buscar todos los proyectos
const buscartodosProyectos =  async (req, res) => {
    
    try{
        //leer la base de datos para obtener el email
     Proyecto.find( function(err,proyecto){
            return res.status(201).send(proyecto)
        });
    }catch(error){
        return res.status(400).json({
            ok:false,
            msg: 'No se encontro'
        });
    }
    }
 const buscartodosproyectopop =  async (req, res) => {
    
    try{
        //leer la base de datos para obtener el email
        Proyecto.find(function(err,proyecto){
            return res.status(200).send(proyecto)
        }).populate('alumno').populate('alumno2').populate('profeguia').populate('profeinformante').populate('profeinformante2').populate('profeinformante3').populate('coordinador')
    }catch(error){
        return res.status(400).json({
            ok:false,
            msg: 'No se encontro'
        });
    }
    }

// buscar proyecto
const buscarProyecto =  async (req, res) => {
    
    const uid = req.params._id
try{
    //leer la base de datos para obtener el email
    const dbUser = await Proyecto.findById(uid).populate('alumno').populate('alumno2').populate('profeguia').populate('profeinformante').populate('profeinformante2').populate('profeinformante3').populate('coordinador')

    console.log(dbUser)
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
//buscar proyecto por id de usuario
const proyectoxusuario = async(req,res) =>{
    uid = req.params._id
    try{
        Proyecto.find({$or:[{alumno:uid},{alumno2:uid},{profeguia:uid},{profeinformante:uid},{profeinformante2:uid},{profeinformante3:uid},{coordinador:uid},{profesorPt1:uid}]},function(err,proy){
            return res.status(200).send(proy);
        }).populate('alumno').populate('alumno2').populate('profeguia').populate('profeinformante').populate('profeinformante2').populate('profeinformante3').populate('coordinador')
    }catch(error){
        return res.status(400).json({
            ok:false,
            msg:'No se encontraron'
        })
    }
}
//buscar entrega por proyecto
const entregaxproyecto = async(req,res) =>{
    uid = req.params._id
    try{
        Entrega.find({proyecto:uid},function(err,entre){
            return res.status(200).send(entre)
        }).populate('autor')
    }catch(error){
        return res.status(400).json({
            ok:false,
            msg:'No se encontraron'
        })
    }
}
//buscar retro por proyecto
const retroxproyecto = async(req,res) =>{
    uid = req.params._id
    try{
        Retroalimentacion.find({proyecto:uid},function(err,entre){
            return res.status(200).send(entre)
        }).populate('autor')
    }catch(error){
        return res.status(400).json({
            ok:false,
            msg:'No se encontraron'
        })
    }
}
// buscar propuesta
const buscarPropuesta =  async (req, res) => {
    
    
try{
    //leer la base de datos para obtener el email
    Propuesta.find({}, function(err,propuesta){
        return res.status(201).send(propuesta)

    }).populate('autor')

   
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
    
  
try{
    //leer la base de datos para obtener el email
   Calendario.find({},function(err,fecha){
    return res.status(201).send(fecha)
   });

    
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
    

    //leer la base de datos para obtener el email
    Citas.find({},function(err,citas){
        return res.status(201).send(citas);
    });

 
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
    
    const titulo = req.params.titulo
//try{
    //leer la base de datos para obtener el email
    busqueda = {$regex: titulo, $options: 'i'}
    Documento.find({titulo:busqueda},function(err,doc ){
        if(doc === ''){
            return res.status(404).json({
                ok:false
            })
        }else{
        return res.status(200).send(doc);
        }
    }).populate('categoria');


};
//por categoria
const buscarxCategoria =  async (req, res) => {
    
    const cat = req.params._id
//try{
    //leer la base de datos para obtener el email
    Documento.find({categoria:cat},function(err,doc ){
        if(doc === ''){
            return res.status(404).json({
                ok:false
            })
        }else{
        return res.status(200).send(doc);
        }
    }).populate('categoria');


};
/*}catch(error){
    return res.status(404).json({
        ok:false,
        msg: 'No se encontro'
    });
}
}*/
//eliminar usuario
const eliminarUsuario =  async (req, res) => {
    const uid = req.params._id
    const update = req.body

    Usuario.findByIdAndUpdate(uid,update, (err)=> {
        if(err) return res.status(500).json({
            ok: false,
            msg: 'no se pudo actualizar'
        })
        return res.status(201).json({
            ok:true,
            msg:'usuario actualizado'
        })
    });
}

//eliminar proyecto
const cambiarProyecto =  async (req, res) => {
    
    const uid = req.params._id
    const update = req.body

    //leer la base de datos para obtener el email
    Proyecto.findByIdAndUpdate(uid,update,(err)=> {
        if(err) return res.status(500).json({
            ok: false,
            msg: 'no se pudo actualizar'
        })
        return res.status(201).json({
            ok:true,
            msg:'usuario actualizado'
        })
    });
}
//eliminar propuesta
const eliminarPropuesta =  async (req, res) => {
    
    const uid = req.params._id
try{
    //leer la base de datos para obtener el email
    const dbUser = await Propuesta.findOne({_id:uid});

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
const traerTodasCategorias = async(req,res)=>{
    

    try{
        Categoria.find({},function(err,fecha){
            return res.status(201).send(fecha)
           });
    }
    catch(error){
        return res.status(400).json({
            ok:false,
            msg: 'No se encontro'
        });
    }
}
const eliminarCategoria =  async (req, res) => {
    
    const uid = req.params._id
try{
    //leer la base de datos para obtener el email
    const dbUser = await Categoria.findOne({_id:uid});

    dbUser.remove();

    return res.status(201).json({
        ok:true,
        msg:'eliminado'
    });
}
catch(error){
    return res.status(400).json({
        ok:false,
        msg: 'No se encontro'
    });
}
}
//eliminar citas
const eliminarCitas =  async (req, res) => {
    
    const uid = req.params._id
try{
    //leer la base de datos para obtener el email
    const dbUser = await Citas.findOne({_id:uid});

    dbUser.remove();

    return res.status(201).json({
        ok:true,
        msg:'eliminado'
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
    
    const uid = req.params._id
try{
    //leer la base de datos para obtener el email
    const dbUser = await Calendario.findOne({_id:uid});

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
    
    const uid = req.params._id
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
    const {password} = req.body
try{
    Usuario.findByIdAndUpdate(uid,update,(err) =>{
        if(err) return res.status(400).json({
            ok:false,
            msg:'no'
        })
    });
    const dbUser =  await Usuario.findById(uid);
    console.log(dbUser.password)
    if(dbUser.password !== password){
        const salt = bcrypt.genSaltSync();
        dbUser.password = bcrypt.hashSync(password, salt);
        Usuario.findByIdAndUpdate(uid,{"password": dbUser.password},(err)=>{
            if(err) return res.status(404).json({
                ok:false,
                msg:'no xd'
            })
        })
    
    }
    return res.status(201).json({
    ok:true,
    msg:'usuario actualizado'
    
})
}
catch(error){
    return res.status(400).json({
        ok:false,
        msg: 'No se encontro'
    });
}
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
    const body = req.body


    Calendario.findByIdAndUpdate(uid,body, (err)=>
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

//Si entrega ya esta creada, actualizar 



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
    //eliminarProyecto,
    eliminarRetroalimentacion,
    eliminarDocumentos,
    actualizarUsuario,
    actualizarCitas,
    actualizarDocumentos,
    actualizarEntrega,
    actualizarFecha,
    actualizarPropuestas,
    actualizarProyecto,
    actualizarRetroalimentacion,
    buscarxCategoria,
    buscartodosUsuario,
    buscartodosProyectos,
    cambiarProyecto,
    buscartodosproyectopop,
    buscarEntregas,
    buscarRetro,
    proyectoxusuario,
    entregaxproyecto,
    retroxproyecto,
    buscartodosDocumentos,
    veryactualizar,
    crearCategoria,
    eliminarCategoria,
    traerTodasCategorias
}