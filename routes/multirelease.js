/*
    Rutas de  Multirelease
    host + /api/Multirelease
*/
const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validarCampos');
const {getMultirelease,createMultirelease, updateMultirelease, deleteMultirelease} = require('../controllers/multirelease');
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
    getMultirelease) ;

router.post(
    '/new',
    [//mis didlewares
        check('code', 'El codigo es obligatorio').not().isEmpty(),
        check('title', 'El titulo es obligatorio').not().isEmpty(),
        validarCampos , validarJWT
    ],
    createMultirelease) ;


router.put('/:id' , validarJWT,updateMultirelease) ;


router.delete('/:id' ,validarJWT ,deleteMultirelease) ;







module.exports= router;