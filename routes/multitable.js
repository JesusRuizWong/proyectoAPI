/*
    Rutas de  Multitable
    host + /api/Multitable
*/
const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validarCampos');
const {getMultitable,createMultitable, updateMultitable, deleteMultitable} = require('../controllers/multitable');
const {validarJWT} = require('../middlewares/validarJWT');

const router = Router();

router.use(validarJWT) ;

router.get(
    '/',
    [//mis middlewares
        // check('name', 'El Nombre es obligatorio').not().isEmpty(),
        // check('email', 'El email es obligatorio').isEmail(),
        // check('password', 'El password es obligatorio').not().isEmpty() ,
        // validarCampos,
        validarJWT
    ],
    getMultitable) ;

router.post(
    '/new',
    [//mis didlewares
        check('code', 'El codigo es obligatorio').not().isEmpty(),
        check('title', 'El titulo es obligatorio').not().isEmpty(),
        validarCampos , validarJWT
    ],
    createMultitable) ;


router.put('/:id' , validarJWT,updateMultitable) ;


router.delete('/:id' ,validarJWT ,deleteMultitable) ;







module.exports= router;