const {Schema, model} = require('mongoose');

const ITMultitableSchema = Schema({

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
    }
}) ;

// ITMultitableSchema.method('toJSON', function (){
//     const { __V, _id, ...object} = this.toObject();
//     object.id=_id ;
//     return object;
// })


module.exports=model('ITMultitable', ITMultitableSchema) ;