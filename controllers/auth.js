const {response} = require('express');
const bcrypt = require('bcryptjs');
const userModel= require('../models/userModel') ;
const {genJWT} = require('../helpers/jwt');

//crea usuario
const createUser= async (req,res= response) => {

   const {email,password} = req.body ;
   try {
    let user = await userModel.findOne({email});

    if (user) {
        return res.status(400).json({
            ok:false,
            msg:'Un usuario existe con ese correo'
        })
    }
    
    user= new userModel(req.body);

    //encriptar contraseña
    const salt=bcrypt.genSaltSync();
    user.password=bcrypt.hashSync(password,salt);
 
    //guardar usuario
    await  user.save();


    //Generar  jwt 
    const token =await genJWT(user.id, user.name);



    res.status(201).json({
        ok:true,
        msg:'registro',
        uuid:user.id,
        name: user.name,
        token
    })

   } catch (error) {
    console.log(error)
    res.status(500).json({
        ok:false,
        msg:'Por favor hable con el administrador'
    })
   }
   
}



//Login de Usuario
const loginUser=async (req,res= response) => {

    const {email,password} = req.body
   
    try {
        let user = await userModel.findOne({email});
    
        if (!user) {
            return res.status(400).json({
                ok:false,
                msg:'Un usuario existe con ese correo'
            })
        }


        //confirmar password
        const validPassword = bcrypt.compareSync(password,user.password);

        if(!validPassword){
            return res.status(400).json({
                ok:false,
                msg:'Password Incorrecto'

            }) ;
        }


        //generar JWT
        const token = await genJWT(user.id, user.name);

        res.json({
            ok:true,
            uuid: user.id,
            name: user.name,
            token
        })
        
       
    
       } catch (error) {
        console.log(error)
        res.status(500).json({
            ok:false,
            msg:'Por favor hable con el administrador'
        })
       }
       

}





//renew token
const renewToken=async (req,res= response) => {

    const {uuid,name}= req;

    //generar nuevo JWT
    const token = await genJWT(uuid,name);

    res.json({
        ok:true,
        uuid,
        name,
        token
        
    })
}






module.exports = { 
    createUser, 
    loginUser,
    renewToken
}