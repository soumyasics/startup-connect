const express=require("express")
const router = express.Router();
const Event = require("./eventSchema"); 
const EventRegistration = require("./eventRegistrations");

// Add a new event
const addEvent = async (req, res) => {
    try {
        const { title, description, time, date, venue } = req.body;

        const newEvent = new Event({
            title,
            description,
            time,
            date,
            venue,
        });

        newEvent
            .save()
            .then((data) => {
                res.status(200).json({
                    msg: "Inserted successfully",
                    data: data
                });
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json({
                    msg: "Data not Inserted",
                    data: err
                });
            });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// View all events
const viewEvents = (req, res) => {
    Event.find({isActive:true})
        .exec()
        .then((data) => {
            if (data.length > 0) {
                res.status(200).json({
                    msg: "Data obtained successfully",
                    data: data
                });
            } else {
                res.status(200).json({
                    msg: "No Data obtained"
                });
            }
        })
        .catch((err) => {
            res.status(500).json({
                msg: "Data not obtained",
                Error: err
            });
        });
};



// View all events
const viewEventsById = (req, res) => {
    Event.findById({_id:req.params.id})
        .exec()
        .then((data) => {
            if (data) {
                res.status(200).json({
                    msg: "Data obtained successfully",
                    data: data
                });
            } else {
                res.status(200).json({
                    msg: "No Data obtained"
                });
            }
        })
        .catch((err) => {
            res.status(500).json({
                msg: "Data not obtained",
                Error: err
            });
        });
};




// Add a new event registration
const addEventRegistration = async (req, res) => {
    try {
        const { entId, mentorId, investorId, eventId, date, userRole } = req.body;

        const newEventRegistration = new EventRegistration({
            entId,
            mentorId,
            investorId,
            eventId,
            date,
            userRole
        });

        newEventRegistration
            .save()
            .then((data) => {
                res.status(200).json({
                    msg: "Inserted successfully",
                    data: data
                });
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json({
                    msg: "Data not Inserted",
                    data: err
                });
            });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// View all event registrations
const viewEventRegistrations = (req, res) => {
    EventRegistration.find()
        .populate('entId mentorId investorId eventId') // populate referenced fields
        .exec()
        .then((data) => {
            if (data.length > 0) {
                res.status(200).json({
                    msg: "Data obtained successfully",
                    data: data
                });
            } else {
                res.status(200).json({
                    msg: "No Data obtained"
                });
            }
        })
        .catch((err) => {
            res.status(500).json({
                msg: "Data not obtained",
                Error: err
            });
        });
};

// View event registrations by Event ID
const viewEventRegistrationsByEventId = (req, res) => {
    const { eventId } = req.params;
    EventRegistration.find({ eventId })
        .populate('entId mentorId investorId eventId') // populate referenced fields
        .exec()
        .then((data) => {
            if (data.length > 0) {
                res.status(200).json({
                    msg: "Data obtained successfully",
                    data: data
                });
            } else {
                res.status(200).json({
                    msg: "No Data obtained"
                });
            }
        })
        .catch((err) => {
            res.status(500).json({
                msg: "Data not obtained",
                Error: err
            });
        });
};


module.exports = {
    addEvent,
    viewEvents,
    addEventRegistration,
    viewEventRegistrations,
    viewEventRegistrationsByEventId,
    viewEventsById
};
