const {response} = require('express') ;

const getRelease = async (req, res)=>{

    res.json({
        ok:true,
        msg:'crear release'
    })

}


const createRelease = (req, res=response)=>{

    console.log(req,res)

    res.json({
        ok:true,
        msg:'crear release'
    })

}


const updateRelease = (req, res)=>{

    res.json({
        ok:true,
        msg:'crear release'
    })

}


const deleteRelease = (req, res)=>{

    res.json({
        ok:true,
        msg:'crear release'
    })

}


module.exports={
    getRelease,
    createRelease,
    updateRelease,
    deleteRelease
}