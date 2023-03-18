const {Schema, model} = require('mongoose');

const ITMultivalueSchema = Schema({

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

    active:{
        type: Boolean,
        default: true,
        required: true,

    },

    user:{
        type: Schema.Types.ObjectId,
        ref: 'userModel',
        required:true,
    },

    multitable:{
        type: Schema.Types.ObjectId,
        ref: 'ITMultitable',
        required:true,
    }


}) ;

// ITMultivalueSchema.method('toJSON', function (){
//     const { __V, _id, ...object} = this.toObject();
//     object.id=_id ;
//     return object;
// })


module.exports=model('ITMultivalue', ITMultivalueSchema) ;