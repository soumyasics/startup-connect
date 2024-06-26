const mongoose = require("mongoose");

const entrepreneur_reg_Schema = mongoose.Schema({
  fname: {
    type: String,
    required: true,
  },
  lname: {
    type: String,
    required: true,
  },
  company_name: {
    type: String,
    required: true,
  },
  corporate_id_no: {
    type: String,
    required: true,
  },
  industry_sector: {
    type: String,
    required: true,
  },
  company_description: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  contact: {
    type: Number,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  password: {
    type:String ,
    required: true,
  },
  image: {
    type: Object,
    required: true,
  },
  
});
module.exports = mongoose.model("entrepreneurs", entrepreneur_reg_Schema);
