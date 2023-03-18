const {response} = require('express') ;
const ITMultivalue= require('../models/ITMultivalue') ;




const getMultivalue = async (req, res=response)=>{

    const multivalue= await ITMultivalue.find()
                                        .populate('user', 'name')
                                        .populate('multitable', 'title')

    res.json({
        ok:true,
        msg:'list Multivalue',
        multivalue
    })

}



const createMultivalue = async (req, res=response)=>{
    const multivalue = new ITMultivalue(req.body)
     
    try {

      multivalue.user=req.uuid;
      const multivalueSave = await multivalue.save();
      res.json({
        ok:true,
        evento: multivalueSave
      })

        
    } catch (error) {
     console.log(error)
     res.status(500).json({
         ok:false,
         msg:'Por favor hable con el administrador'
     })
    }
}


const updateMultivalue = async (req, res='response')=>{


    const multivalueid=req.params.id;
    const uuid = req.uuid;


    try {
        const multivalue=  ITMultivalue.findById(multivalueid);
        if( !multivalue ){
            return res.status(404).json({
                ok: false,
                msg:'No existe la multitabla indicada'
            });
        }

        const newmultivalue ={
            ... req.body,
            user: uuid
        }

        const multivalueUpdate= await ITMultivalue.findByIdAndUpdate(multivalueid, newmultivalue,  { new: true }) ;

        res.json({
            ok:true,
            multivalue: multivalueUpdate
        });
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok:false,
            msg: 'Hable con el administrador'
        })
    }

}




const deleteMultivalue = async (req, res)=>{


    const multivalueid=req.params.id;
    const uuid = req.uuid;


    try {
        const multivalue=  ITMultivalue.findById(multivalueid);
        if( !multivalue ){
            return res.status(404).json({
                ok: false,
                msg:'No existe la multitabla indicada'
            });
        }

        const newmultivalue ={
            ... req.body,
            user: uuid
        }

        const multivalueUpdate= await ITMultivalue.findByIdAndUpdate(multivalueid, newmultivalue,  { new: true }) ;

        res.json({
            ok:true,
            multivalue: multivalueUpdate
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
    getMultivalue,
    createMultivalue,
    updateMultivalue,
    deleteMultivalue
}