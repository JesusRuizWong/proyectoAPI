/*
    Rutas de  Multivalue
    host + /api/Multivalue
*/
const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validarCampos');
const {getMultivalue,createMultivalue, updateMultivalue, deleteMultivalue} = require('../controllers/multivalue');
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
    getMultivalue) ;

    router.get(
        '/tipoanuncio',
        [//mis middlewares
            // check('name', 'El Nombre es obligatorio').not().isEmpty(),
            // check('email', 'El email es obligatorio').isEmail(),
            // check('password', 'El password es obligatorio').not().isEmpty() ,
            // validarCampos,
            validarJWT
        ],
        getMultivalue) ;

router.post(
    '/new',
    [//mis didlewares
        check('code', 'El codigo es obligatorio').not().isEmpty(),
        check('title', 'El titulo es obligatorio').not().isEmpty(),
        validarCampos , validarJWT
    ],
    createMultivalue) ;


router.put('/:id' , validarJWT,updateMultivalue) ;


router.delete('/:id' ,validarJWT ,deleteMultivalue) ;







module.exports= router;