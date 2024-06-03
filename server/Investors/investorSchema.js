const mongoose=require('mongoose')

const investorSchema=mongoose.Schema({
    name:{
    type:String,
    required:true
},
    email:{
    type:String,
    required:true
},
    contact:{
        type:Number,
        required:true
},
    organization:{
        type:String,
        required:true
},
    nationality:{
        type:String,
        required:true
},
    password :{
        type:String,
        required:true
},
    industry_sector:{
        type:String,
        required:true
},
    occupation:{
        type:String,
        required:true
},
    description:{
        type:String,
        required:true
},
    address:{
        type:String,
        required:true
},
    profile:{
        type:Object,
        required:true
},
    identification_document:{
        type:Object,
        required:true
}
});
module.exports=mongoose.model('investor',investorSchema)