const {response} = require('express') ;
const releaseModel= require('../models/releaseModel') ;




const getRelease= async (req, res=response)=>{

    const release= await releaseModel.find()
                                     .populate('user', 'name');

    res.json({
        ok:true,
        msg:'list Release',
        release
    })

}



const createRelease = async (req, res=response)=>{
    const release = new releaseModel(req.body)
     
    try {

      release.user=req.uuid;
      const releaseSave = await release.save();
      res.json({
        ok:true,
        evento: releaseSave
      })

        
    } catch (error) {
     console.log(error)
     res.status(500).json({
         ok:false,
         msg:'Por favor hable con el administrador'
     })
    }
}


const updateRelease = async (req, res='response')=>{


    const releaseid=req.params.id;
    const uuid = req.uuid;


    try {
        const multitable=  releaseModel.findById(releaseid);
        if( !release ){
            return res.status(404).json({
                ok: false,
                msg:'No existe la multitabla indicada'
            });
        }

        const newrelease ={
            ... req.body,
            user: uuid
        }

        const releaseUpdate= await releaseModel.findByIdAndUpdate(releaseid, newrelease,  { new: true }) ;

        res.json({
            ok:true,
            release: releaseUpdate
        });
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok:false,
            msg: 'Hable con el administrador'
        })
    }

}




const deleteRelease = async (req, res)=>{


    const releaseid=req.params.id;
    const uuid = req.uuid;


    try {
        const release=  releaseModel.findById(releaseid);
        if( !release ){
            return res.status(404).json({
                ok: false,
                msg:'No existe la multitabla indicada'
            });
        }

        const newrelease ={
            ... req.body,
            user: uuid
        }

        const releaseUpdate= await ITMultitable.findByIdAndUpdate(releaseid, newrelease,  { new: true }) ;

        res.json({
            ok:true,
            release: releaseUpdate
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
    getRelease,
    createRelease,
    updateRelease,
    deleteRelease
}