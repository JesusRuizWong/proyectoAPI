/*
    Rutas de  Release
    host + /api/Release
*/
const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validarCampos');
const {getRelease,createRelease, updateRelease, deleteRelease} = require('../controllers/release');
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
    getRelease) ;

router.post(
    '/new',
    [//mis didlewares
        check('code', 'El codigo es obligatorio').not().isEmpty(),
        check('title', 'El titulo es obligatorio').not().isEmpty(),
        validarCampos , validarJWT
    ],
    createRelease) ;


router.put('/:id' , validarJWT,updateRelease) ;


router.delete('/:id' ,validarJWT ,deleteRelease) ;







module.exports= router;