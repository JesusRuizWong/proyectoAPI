const {response} = require('express') ;
const ITMultirelease= require('../models/ITMultirelease') ;




const getMultirelease = async (req, res=response)=>{

    const multirelease= await ITMultirelease.find()
                                        .populate('user', 'name');

    res.json({
        ok:true,
        msg:'list Multirelease',
        multirelease
    })

}



const createMultirelease = async (req, res=response)=>{
    const multirelease = new ITMultirelease(req.body)
     
    try {

      multirelease.user=req.uuid;
      const multireleaseSave = await multirelease.save();
      res.json({
        ok:true,
        evento: multireleaseSave
      })

        
    } catch (error) {
     console.log(error)
     res.status(500).json({
         ok:false,
         msg:'Por favor hable con el administrador'
     })
    }
}


const updateMultirelease = async (req, res='response')=>{


    const multireleaseid=req.params.id;
    const uuid = req.uuid;


    try {
        const multirelease=  ITMultirelease.findById(multireleaseid);
        if( !multirelease ){
            return res.status(404).json({
                ok: false,
                msg:'No existe la multitabla indicada'
            });
        }

        const newmultirelease ={
            ... req.body,
            user: uuid
        }

        const multireleaseUpdate= await ITMultirelease.findByIdAndUpdate(multireleaseid, newmultirelease,  { new: true }) ;

        res.json({
            ok:true,
            multirelease: multireleaseUpdate
        });
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok:false,
            msg: 'Hable con el administrador'
        })
    }

}




const deleteMultirelease = async (req, res)=>{


    const multireleaseid=req.params.id;
    const uuid = req.uuid;


    try {
        const multirelease=  ITMultirelease.findById(multireleaseid);
        if( !multirelease ){
            return res.status(404).json({
                ok: false,
                msg:'No existe la multitabla indicada'
            });
        }

        const newmultirelease ={
            ... req.body,
            user: uuid
        }

        const multireleaseUpdate= await ITMultirelease.findByIdAndUpdate(multireleaseid, newmultirelease,  { new: true }) ;

        res.json({
            ok:true,
            multirelease: multireleaseUpdate
        });
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok:false,
            msg: 'Hable con el administrador'
        })
    }

}




module.exports={
    getMultirelease,
    createMultirelease,
    updateMultirelease,
    deleteMultirelease
}