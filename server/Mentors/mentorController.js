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

const upload = multer({ storage: storage }).single("profile");

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
          demo_videolink,
      }=req.body;
        
      const newMentor=new Mentor({
        name,
        email,
        contact,
        password,
        expertise_area,
        description,
        subscription_amount,
        demo_videolink,
        profile:req.file,
          
      
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

module.exports={registerMentor,upload}