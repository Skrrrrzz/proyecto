const {Router} = require('express');
const { check } = require('express-validator');
const { crearUsuario, loginUsuario, revalidarToken,crearProyecto,crearCalendario,crearCitas,crearDocumentos,crearEntrega,crearPropuesta,crearRetroalimentacion, buscarUsuario, buscarPropuesta, buscarProyecto, buscarFecha, buscarDocumentos, buscarEntrega, buscarRetroalimentacion, buscarCitas, eliminarUsuario, eliminarProyecto, eliminarPropuesta, eliminarCitas, eliminarFecha, eliminarEntrega, eliminarDocumentos, eliminarRetroalimentacion, actualizarUsuario, actualizarProyecto, actualizarPropuestas, actualizarCitas, actualizarFecha, actualizarEntrega, actualizarRetroalimentacion, actualizarDocumentos, buscarxCategoria, buscartodosUsuario, buscartodosProyectos, cambiarProyecto, buscartodosproyectopop, buscarEntregas, buscarRetro, proyectoxusuario, entregaxproyecto, retroxproyecto, buscartodosDocumentos, veryactualizar, crearCategoria, traerTodasCategorias, eliminarCategoria } = require('../controllers/auth.controllers');
const { validarCampos } = require('../middlewares/validar-campos');
const {validarJWT, validarUSER} = require('../middlewares/validar-JWT')
const router = Router();


// Registrar un usuario

router.post('/new', [
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('email', ' El email es obligatorio ').isEmail(),
    check('password', 'La contraseña es obligatoria').isLength({min: 6}),
    check('user', 'El user debe ser el rut sin digito verificador').isLength({min: 7, max: 8}),
    check('rol', 'El rol es obligatorio').not().isEmpty(),
    check('enable','Enable debe ser ingresado').not().isEmpty(),
    validarCampos
],crearUsuario);


//Login de usuario

router.post('/', [
    check('user', ' El user es obligatorio ').not().isEmpty(),
    check('password', 'La contraseña es obligatoria').isLength({min: 6}),
    validarCampos
],loginUsuario);

// Validar y revalidar token

router.get('/renew', validarJWT, revalidarToken);

// Registrar proyecto
router.post('/nproyecto',[
    check('titulo','El titulo es obligatorio').not().isEmpty(),
    check('alumno','El alumno es obligatorio').not().isEmpty(),
    check('profesorPt1','El profesor de proyecto de titulo 1 es obligatorio').not().isEmpty(),
    validarCampos
],crearProyecto);

//Registrar fecha
router.post('/ncalendario',[
    check('titulo','El titulo es obligatorio').not().isEmpty(),
    check('fecha','La fecha es obligatoria').not().isEmpty(),
    check('semestre','El ramo es obligatorio').not().isEmpty(),
    validarCampos
],crearCalendario);

//registrar propuesta
router.post('/npropuesta',[
    check('titulo','El titulo es obligatorio').not().isEmpty(),
    check('descripcion','La descripcion es obligatoria').not().isEmpty(),
    validarCampos
],crearPropuesta);

//registrar citas
router.post('/ncitas',[
    check('titulo','El titulo es obligatorio').not().isEmpty(),
    check('link','El link es obligatorio').not().isEmpty(),
    validarCampos
],crearCitas);

//Registrar documentos
router.post('/ndocumento',[
    check('titulo','El titulo es obligatorio').not().isEmpty(),
    check('autor','El autor es obligatorio').not().isEmpty(),
    check('categoria','La categoria es obligatoria').not().isEmpty(),
    validarCampos
],crearDocumentos);

//Registrar entrega
router.post('/nentrega',[
    check('titulo','El titulo es obligatorio').not().isEmpty(),
    check('autor','El autor es obligatorio').not().isEmpty(),
    check('fecha','La fecha es obligatoria').not().isEmpty(),
    validarCampos
],crearEntrega);

//Registrar retroalimentacion
router.post('/nretroalimentacion',[
   // check('titulo','El titulo es obligatorio').not().isEmpty(),
    check('autor','El autor es obligatorio').not().isEmpty(),
    check('fecha','La fecha es obligatoria').not().isEmpty(),
    validarCampos
],crearRetroalimentacion);
//Registrar categoria
router.post('/ncategoria',[
    check('categoria','categoria es obligatoria').not().isEmpty(),
    validarCampos],crearCategoria);


//Buscar usuarios
router.get('/busuario/:_id', buscarUsuario);
//Buscar todos los usuarios
router.get('/ballusuario',buscartodosUsuario);
//Buscar proyectos
router.get('/bproyecto/:_id', buscarProyecto);
//buscar todos los proyectos
router.get('/ballproyectos',buscartodosProyectos);
//buscar todos los proyectos populate
router.get('/ballproyectospop',buscartodosproyectopop);
//buscar proyecto por usuario
router.get('/bproyxu/:_id',proyectoxusuario);
//Buscar propuesta
router.get('/bpropuesta', buscarPropuesta);
//Buscar fechas
router.get('/bfecha', buscarFecha);
//Buscar documentos
router.get('/bdocumento/:titulo', buscarDocumentos);
//Buscar documento por categoria
router.get('/bcategoria/:_id', buscarxCategoria);
//buscar todos los documentos
router.get('/balldocumento', buscartodosDocumentos);
//Buscar entrega
router.get('/bentrega/:_id', buscarEntregas);
//entrega por proyecto
router.get('/bentregaxp/:_id',entregaxproyecto)
//Buscar retroalimentacion
router.get('/bretro/:_id', buscarRetro);
//retro por proyecto
router.get('/bretroxp/:_id',retroxproyecto)
//Buscar citas
router.get('/bcita', buscarCitas);
//buscar para actualizar xd
router.get('/bya',veryactualizar)
//buscar todas las categorias
router.get('/ballcategorias',traerTodasCategorias);
//--------------------------------------
//Eliminar usuario
router.put('/eusuario/:_id', eliminarUsuario);
//Eliminar proyecto
//router.delete('/eproyecto', eliminarProyecto);
//Eliminar propuesta
router.delete('/epropuesta/:_id', eliminarPropuesta);
//Eliminar citas
router.delete('/ecita/:_id', eliminarCitas);
//Eliminar fechas
router.delete('/efecha/:_id', eliminarFecha);
//Eliminar entrega
router.delete('/eentrega', eliminarEntrega);
//Eliminar documentos
router.delete('/edocumentos/:_id', eliminarDocumentos);
//Eliminar retroalimentacion
router.delete('/eretroalimentacion', eliminarRetroalimentacion);
//Eliminar categorias
router.delete('/ecategoria/:_id', eliminarCategoria);
//----------------------------------------------
//actualizar usuario
router.put('/ausuario/:_id',actualizarUsuario);
//actualizar proyecto
router.put('/aproyecto/:_id',cambiarProyecto);
//actualizar propuesta
router.put('/apropuesta/:_id',actualizarPropuestas);
//actualizar citas
router.put('/acita/:_id',actualizarCitas);
//actualizar fecha
router.put('/afecha/:_id',actualizarFecha);
//actualizar entrega
router.put('/aentrega/:_id',actualizarEntrega);
//actualizar retro
router.put('/aretro/:_id',actualizarRetroalimentacion);
//actualizar documento
router.put('/adocumento/:_id',actualizarDocumentos);


module.exports = router;



