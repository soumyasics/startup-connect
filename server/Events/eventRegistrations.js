const mongoose = require("mongoose");

const sSchema = new mongoose.Schema(
    {
        entId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'entrepreneurs'
        },
        mentorId: {
            type: mongoose.Schema.Types.ObjectId,

            ref: "mentors"

        },
        investorId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'investors'
                },
        eventId: {
            type:mongoose.Schema.Types.ObjectId,
            ref:'events'
        },
         date: {
            type: Date,
            required: true,
        },
        userRole:{
            type: String,
            required: true,
        }

    },
    { timestamps: true }
);

const Message = mongoose.model("eventregistrationss", sSchema);

module.exports = Message;
