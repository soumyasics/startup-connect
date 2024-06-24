const mongoose = require("mongoose")


const mentorSchema = mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    contact: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    },
   
    expertise_area: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    subscription_amount: {
        type: Number,
        required: true
    },
    demo_videolink: {
        type: String,
        required: true
    },
    profile: {
        type: Object,
        required: true
    },
    adminApproved:{
        default:false,
        type:Boolean
    }







});
module.exports = mongoose.model('mentors', mentorSchema)