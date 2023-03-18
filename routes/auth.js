/*
    Rutas de Usuarios / Auth
    host + /api/auth
*/
const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validarCampos');
const {createUser, loginUser, renewToken} = require('../controllers/auth');
const {validarJWT} = require('../middlewares/validarJWT');

const router = Router();


router.post(
    '/new',
    [//mis middlewares
        check('name', 'El Nombre es obligatorio').not().isEmpty(),
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'El password es obligatorio').not().isEmpty() ,
        validarCampos
    ],
    createUser)

router.post(
    '/',
    [//mis didlewares
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'El password es obligatorio').not().isEmpty(),
        validarCampos
    ],
    loginUser)


router.get('/renew', validarJWT ,renewToken)





module.exports= router;