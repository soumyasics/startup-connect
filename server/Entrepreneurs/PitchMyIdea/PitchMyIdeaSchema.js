const mongoose = require('mongoose')

const pitch_my_ideaSchema = mongoose.Schema({
    My_Company_Name: {
      type: String,
      required: true,
    },
    To_help: {
      type: String,
      required: true,
    },
    With: {
      type: String,
      required: true,
    },
    Which_last_year_was_a: {
      type: String,
      required: true,
    },
    Competitor_2: {
      type: String,
      required: true,
    },
    Currently_we_have: {
      type: String,
      required: true,
    },
    To_help_us: {
      type: String,
      required: true,
    },
    Is_developing: {
      type: String,
      required: true,
    },
    To_solve: {
        type: String,
        required: true,
    },
    We_compete_in_the_growing:{
        type: String,
        required: true,
    },
    We_are_similar_to_competitor_1: {
        type: String,
        required: true,
    },
    But_we:{
        type: String,
        required: true,
    },
    We_are_looking_for: {
        type: String,
        required: true,
    },
    In_exchange_of: {
        type: String,
        required: true,
    }
  });
  module.exports = mongoose.model("pitch_my_idea", pitch_my_ideaSchema);
  