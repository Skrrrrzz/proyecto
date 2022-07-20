const {Router} = require('express');
const { check } = require('express-validator');
const { crearUsuario, loginUsuario, revalidarToken,crearProyecto } = require('../controllers/auth.controllers');
const { validarCampos } = require('../middlewares/validar-campos');
const {validarJWT} = require('../middlewares/validar-JWT')
const router = Router();


// Registrar un usuario

router.post('/new', [
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('email', ' El email es obligatorio ').isEmail(),
    check('password', 'La contraseña es obligatoria').isLength({min: 6}),
    check('user', 'El user debe ser el rut sin digito verificador').isLength({min: 7, max: 8}),
    check('rol', 'El rol es obligatorio').not().isEmpty(),
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

router.post('/nproyect',[
    check('titulo','El titulo es obligatorio').not().isEmpty(),
    check('alumno','El alumno es obligatorio').not().isEmpty(),
    validarCampos
],crearProyecto);

module.exports = router;



