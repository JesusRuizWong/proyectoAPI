const {response} = require('express') ;
const ITMultitable= require('../models/ITMultitable') ;




const getMultitable = async (req, res=response)=>{

    const multitable= await ITMultitable.find()
                                        .populate('user', 'name');

    res.json({
        ok:true,
        msg:'list Multitable',
        multitable
    })

}



const createMultitable = async (req, res=response)=>{
    const multitable = new ITMultitable(req.body)
     
    try {

      multitable.user=req.uuid;
      const multitableSave = await multitable.save();
      res.json({
        ok:true,
        evento: multitableSave
      })

        
    } catch (error) {
     console.log(error)
     res.status(500).json({
         ok:false,
         msg:'Por favor hable con el administrador'
     })
    }
}


const updateMultitable = async (req, res='response')=>{


    const multitableid=req.params.id;
    const uuid = req.uuid;


    try {
        const multitable=  ITMultitable.findById(multitableid);
        if( !multitable ){
            return res.status(404).json({
                ok: false,
                msg:'No existe la multitabla indicada'
            });
        }

        const newmultitable ={
            ... req.body,
            user: uuid
        }

        const multitableUpdate= await ITMultitable.findByIdAndUpdate(multitableid, newmultitable,  { new: true }) ;

        res.json({
            ok:true,
            multitable: multitableUpdate
        });
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok:false,
            msg: 'Hable con el administrador'
        })
    }

}




const deleteMultitable = async (req, res)=>{


    const multitableid=req.params.id;
    const uuid = req.uuid;


    try {
        const multitable=  ITMultitable.findById(multitableid);
        if( !multitable ){
            return res.status(404).json({
                ok: false,
                msg:'No existe la multitabla indicada'
            });
        }

        const newmultitable ={
            ... req.body,
            user: uuid
        }

        const multitableUpdate= await ITMultitable.findByIdAndUpdate(multitableid, newmultitable,  { new: true }) ;

        res.json({
            ok:true,
            multitable: multitableUpdate
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
    getMultitable,
    createMultitable,
    updateMultitable,
    deleteMultitable
}