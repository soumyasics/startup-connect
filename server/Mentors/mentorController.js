var Mentor=require('./mentorSchema')
const multer=require('multer')
const jwt = require('jsonwebtoken');
const secret = 'mentor';

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

// Update mentor by ID
const editMentorById = (req, res) => {
  const { 
    name,
    email,
    contact,
    password,
    expertise_area,
    description,
    subscription_amount,
  } = req.body;

Mentor.findByIdAndUpdate(req.params.id,{
  name,
  email,
  contact,
  password,
  expertise_area,
  description,
  subscription_amount,
  demo_videolink:req.files[0],
  profile:req.files[1],
      })
      .exec()
      .then((data) => {
        res.json({
          status:200,
          msg: "Updated successfully",
          data:data
        });
      })
      .catch((err) => {
          console.log(err);
        res.json({
          status:502,
          msg: "Data not Updated",
          Error: err,
        });
      });
  
};

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

const createToken = (user) =>{
  return jwt.sign({ userId: user.id }, secret, { expiresIn:'1hr' });
}

// Login Mentor 

const loginMentor=(req,res)=>{
  const { email , password }=req.body
  Mentor.findOne({email})
  .exec()
  .then(user=>{
      if(!user){
          return res.json({status:409,msg:'user not found'})
      }else if(user.password!==password){
          return res.json({status:409,msg:'Password Missmatch !!'})
      }

      const token = createToken(user)

      res.json({
          data:user,
          status:200,
          token:token
      });
  })
  .catch(err=>{
      console.log(err);
      return res.status(500).json({msg:'Something went wrong'})
  });

};

// Validate Token
const requireAuth = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];

  if (!token) {
    return res.status(401).json({ msg: "Unauthorized" });
  }

  jwt.verify(token, secret, (err, decodedToken) => {
    if (err) {
      return res.status(401).json({ msg: "Unauthorized", err: err });
    }

    req.user = decodedToken.userId;
    next();
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
  removeMentorById,
  loginMentor,
  requireAuth,
  editMentorById
}