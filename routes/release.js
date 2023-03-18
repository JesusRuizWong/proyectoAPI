/*
    Rutas de  release
    host + /api/release
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
    ],
    getRelease) ;

router.post(
    '/new',
    [//mis didlewares
        check('title', 'El título es obligatorio').not().isEmpty(),
        check('notes', 'El detalle es obligatorio').not().isEmpty(),
        check('price', 'El precio es obligatorio').not().isEmpty(),
        validarCampos , validarJWT
    ],
    createRelease) ;


router.put('/:id' ,updateRelease) ;


router.put('/:id' ,deleteRelease) ;





module.exports= router;