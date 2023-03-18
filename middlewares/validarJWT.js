const {response} = require('express');
const jwt = require('jsonwebtoken')

const validarJWT = (req=request, res=response, next) => {

    //x-token headers
    const token=req.header('x-token');

    if(!token){
        return res.status(401).json( {
            ok:false,
            msg: 'No hay token en la petición'
        });

    }

    try {
        jwt.verify(token, process.env.SECRET_JWT_SEED, (err, data) => {
          if (err) {
            throw err;
          }
          const { uuid, name } = data;
          req.uuid = uuid;
          req.name = name;
        });
      } catch (err) {
        return res.status(500).json({
          ok: false,
          msg: "Token not valid",
          err,
        });

        
    }
   // console.log(token)

    next();
}


module.exports={
    validarJWT
}