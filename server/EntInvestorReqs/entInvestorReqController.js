const InvestorReqs = require('./entInvestorReqs');

const mongoose = require('mongoose');

// Register a new Investor Request
const reqInvestorById = async (req, res) => {
    const { investorId, entId } = req.body;

  await InvestorReqs.find({investorId:investorId,entId:entId}).exec()
  .then(data=>{
    if(data.length>0)
        {
            return res.json({
                status: 409,
                msg: "You have already requested for this Investor",
               
            }); 
        }
  }).catch(err => {
    return res.json({
        status: 500,
        msg: "data not obtained",
        
    });
})
    try {

        const newInvestorReq = new InvestorReqs({
            date:new Date(),
            investorId,
            entId
        });

        await newInvestorReq.save()
            .then(data => {
                return res.json({
                    status: 200,
                    msg: "Request created successfully",
                    data: data
                });
            })
            .catch(err => {
                return res.json({
                    status: 500,
                    msg: "Request not created",
                    data: err
                });
            });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// View Investor Request by ID
const viewInvestorReqById = (req, res) => {
    InvestorReqs.findById(req.params.id)
        .populate('investorId')
        .populate('entId')
        .exec()
        .then(data => {
            if (data) {
                res.json({
                    status: 200,
                    msg: "Data obtained successfully",
                    data: data
                });
            } else {
                res.json({
                    status: 404,
                    msg: "Request not found"
                });
            }
        })
        .catch(err => {
            res.status(500).json({
                status: 500,
                msg: "Data not obtained",
                Error: err
            });
        });
};

// View Investor Request by ID
const viewInvestorReqByInvId = (req, res) => {
    InvestorReqs.find({investorId:req.params.id})
      
        .populate('entId')
        .exec()
        .then(data => {
            if (data) {
                res.json({
                    status: 200,
                    msg: "Data obtained successfully",
                    data: data
                });
            } else {
                res.json({
                    status: 404,
                    msg: "Request not found"
                });
            }
        })
        .catch(err => {
            res.status(500).json({
                status: 500,
                msg: "Data not obtained",
                Error: err
            });
        });
};



// View Investor Request by ID
const viewInvestorReqByEntId = (req, res) => {
    InvestorReqs.find({entId:req.params.id})
      
        .populate('entId')
        .exec()
        .then(data => {
            if (data) {
                res.json({
                    status: 200,
                    msg: "Data obtained successfully",
                    data: data
                });
            } else {
                res.json({
                    status: 404,
                    msg: "Request not found"
                });
            }
        })
        .catch(err => {
            res.status(500).json({
                status: 500,
                msg: "Data not obtained",
                Error: err
            });
        });
};

// Delete Investor Request by ID
const deleteInvestorReqById = (req, res) => {
    InvestorReqs.findByIdAndDelete(req.params.id)
        .exec()
        .then(data => {
            if (data) {
                res.json({
                    status: 200,
                    msg: "Deleted successfully",
                    data: data
                });
            } else {
                res.json({
                    status: 404,
                    msg: "Request not found"
                });
            }
        })
        .catch(err => {
            res.status(500).json({
                status: 500,
                msg: "Data not deleted",
                Error: err
            });
        });
};


// View Investor Request by ID
const acceptInvestorReqByInvId = (req, res) => {
    InvestorReqs.findByIdAndUpdate({_id:req.params.id},{status:'accepted'})
      
        .exec()
        .then(data => {
            if (data) {
                res.json({
                    status: 200,
                    msg: "Data obtained successfully",
                    data: data
                });
            } else {
                res.json({
                    status: 404,
                    msg: "Request not found"
                });
            }
        })
        .catch(err => {
            res.status(500).json({
                status: 500,
                msg: "Data not obtained",
                Error: err
            });
        });
};

// View Investor Request by ID
const rejectInvestorReqById = (req, res) => {
    InvestorReqs.findByIdAndUpdate({_id:req.params.id},{status:'rejected'})
      
        .exec()
        .then(data => {
            if (data) {
                res.json({
                    status: 200,
                    msg: "Data obtained successfully",
                    data: data
                });
            } else {
                res.json({
                    status: 404,
                    msg: "Request not found"
                });
            }
        })
        .catch(err => {
            res.status(500).json({
                status: 500,
                msg: "Data not obtained",
                Error: err
            });
        });
};

// View Investor Request by ID
const viewAcceptedReqsByInvId = (req, res) => {
    InvestorReqs.find({investorId:req.params.id},{status:'accepted'}).populate('entId')
      
        .exec()
        .then(data => {
            if (data) {
                res.json({
                    status: 200,
                    msg: "Data obtained successfully",
                    data: data
                });
            } else {
                res.json({
                    status: 404,
                    msg: "Request not found"
                });
            }
        })
        .catch(err => {
            res.status(500).json({
                status: 500,
                msg: "Data not obtained",
                Error: err
            });
        });
};
// View Investor Request by ID
const viewAcceptedReqsByEntId = (req, res) => {
    InvestorReqs.find({entId:req.params.id},{status:'accepted'}).populate('investorId')
      
        .exec()
        .then(data => {
            if (data) {
                res.json({
                    status: 200,
                    msg: "Data obtained successfully",
                    data: data
                });
            } else {
                res.json({
                    status: 404,
                    msg: "Request not found"
                });
            }
        })
        .catch(err => {
            res.status(500).json({
                status: 500,
                msg: "Data not obtained",
                Error: err
            });
        });
};
module.exports = {
    reqInvestorById,
    viewInvestorReqById,
    deleteInvestorReqById,
    viewInvestorReqByEntId,
    viewInvestorReqByInvId,
    viewAcceptedReqsByEntId,
    viewAcceptedReqsByInvId,
    acceptInvestorReqByInvId,
    rejectInvestorReqById,
    

};
