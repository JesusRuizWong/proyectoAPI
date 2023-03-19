const {Schema, model} = require('mongoose');

const ReleaseSchema = Schema({

    title:{
        type: String,
        require:true
    },

    subtitle:{
        type: String
    },


    description:{
        type: String
    },

    price:{
        type: String
    },

    urlImg:{
        type: String
    },

    category:{
        type: String
    },

    user:{
        type: Schema.Types.ObjectId,
        ref: 'UserModel'

    }
}) ;

module.exports=model('releaseModel', ReleaseSchema) ;