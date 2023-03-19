const {Schema, model} = require('mongoose');

const ITMultireleaseSchema = Schema({

    code:{
        type: String,
        unique: true,
    },

    title:{
        type: String,
        required:true
    },

    description:{
        type: String
    },

    price:{
        type: String
    },

    imgUrl:{
        type: String
    },


    active:{
        type: Boolean,
        default: true,
        required: true,

    },

    user:{
        type: Schema.Types.ObjectId,
        ref: 'userModel',
        required:true,
    }
}) ;

// ITMultireleaseSchema.method('toJSON', function (){
//     const { __V, _id, ...object} = this.toObject();
//     object.id=_id ;
//     return object;
// })


module.exports=model('ITMultirelease', ITMultireleaseSchema) ;