var Mentor=require('./mentorSchema')
const multer=require('multer')

const storage = multer.diskStorage({
  destination: function (req, res, cb) {
    cb(null, "./upload");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage }).array("files");

// Register mentors

const registerMentor= async(req,res)=>{
  try{
      const {
          name,
          email,
          contact,
          password,
          expertise_area,
          description,
          subscription_amount,
      }=req.body;
        
      const newMentor=new Mentor({
        name,
        email,
        contact,
        password,
        expertise_area,
        description,
        subscription_amount,
        demo_videolink:req.files[0],
        profile:req.files[1],
        
      
      });
      let existingMentor_email = await Mentor.findOne({ email });
      if (existingMentor_email) {
          return res.status(409).json({
              msg: "Email Already Registered With Us !!",
              data: null
          });
      }
      let existingMentor_contact = await Mentor.findOne({ contact });
      if (existingMentor_contact){
          return res.status(409).json({
              msg:"Contact Already Exists !!",
              data: null
          })
      }
      await newMentor.save()
      
      .then(data => {
          res.status(200).json({
              msg: "Inserted successfully",
              data: data
          });
      })
      .catch(err => {
          console.log(err);
          res.status(500).json({
              msg: "Data not Inserted",
              data: err
          });
      });
  }catch (error) {
      console.log("err",error);
      res.status(500).json({ message: error.message });
  }
}

// View mentorReqs for Admin
const viewMentorReqs = (req, res) => {
  Mentor.find({adminApproved:false})
    .exec()
    .then((data) => {
      res.status(200).json({
        msg: "Data obtained successfully",
        data: data,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        msg: "No Data obtained",
        Error: err,
      });
    });
};

// View Less mentorReqs for Admin
const viewLessMentorReqs = (req, res) => {
  Mentor.find({adminApproved:false}).sort({_id: -1}).limit(5)
    .exec()
    .then((data) => {
      res.status(200).json({
        msg: "Data obtained successfully",
        data: data,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        msg: "No Data obtained",
        Error: err,
      });
    });
};

// View all Mentors

const viewMentors = (req, res) => {
  Mentor.find({adminApproved:true})
      .exec()
      .then(data => {
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
      .catch(err => {
          res.status(500).json({
              msg: "Data not obtained",
              Error: err
          });
      });
};

// View mentor by ID
const viewMentorById = (req, res) => {
  Mentor.findById(req.params.id)
    .exec()
    .then((data) => {
      res.status(200).json({
        msg: "Data obtained successfully",
        data: data,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        msg: "No Data obtained",
        Error: err,
      });
    });
};

// approve mentorReq by  Admin
const approveMentorReqsById = (req, res) => {
  Mentor.findByIdAndUpdate({_id:req.params.id},{adminApproved:true,isActive:true})
    .exec()
    .then((data) => {
      res.status(200).json({
        msg: "Data updated successfully",
        data: data,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        msg: "No Data updated",
        Error: err,
      });
    });
};

// reject mentorReq by  Admin
const removeMentorById = (req, res) => {
  Mentor.findByIdAndDelete({_id:req.params.id})
    .exec()
    .then((data) => {
      res.status(200).json({
        msg: "Data removed successfully",
        data: data,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        msg: "No Data obtained",
        Error: err,
      });
    });
};

module.exports={
  registerMentor,
  upload,
  viewLessMentorReqs,
  viewMentorReqs,
  viewMentors,
  viewMentorById,
  approveMentorReqsById,
  removeMentorById
}