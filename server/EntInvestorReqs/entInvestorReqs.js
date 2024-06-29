const mongoose=require('mongoose')

const reqSchema=mongoose.Schema({
    date:{
    type:Date,
    required:true
    },
    investorId:{
type:mongoose.Schema.Types.ObjectId,
required:true,
ref:'investors'
    },
    entId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'entrepreneurs'
    },
    status:{
        default:'pending',
        type:String
    }
});
module.exports=mongoose.model('investorreqs',reqSchema)
