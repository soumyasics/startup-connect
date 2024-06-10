var mentorSchema=require('./mentorSchema')
const multer=require('multer')

const storage = multer.diskStorage({
  destination: function (req, res, cb) {
    cb(null, "./upload");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage }).single("image");

// Register mentors


const mentorregister = async (req, res) => {
  // Check if the email is already registered
  let existingMentorEmail = await mentorSchema.findOne({ email: req.body.email });
  if (existingMentorEmail) {
      return res.status(409).json({
          msg: "Email Already Registered With Us !!",
          data: null
      });
  }

  // Check if the contact number already exists
  let existingMentorContact = await mentorSchema.findOne({ contactnumber: req.body.contactnumber });
  if (existingMentorContact) {
      return res.status(409).json({
          msg: "Contact Already Exists !!",
          data: null
      });
  }

  // Create a new mentor instance
  var mentor = new mentorSchema({
      name: req.body.name,
      email: req.body.email,
      contactnumber: req.body.contactnumber,
      username: req.body.username,
      password: req.body.password,
      expertise_area: req.body.expertise_area,
      description: req.body.description,
      subscription_amount: req.body.subscription_amount,
      demo_videolink: req.body.demo_videolink,
      image: req.file
  });

  // Save the mentor data
  mentor.save()
      .then((data) => {
          res.json({
              status: 200,
              msg: "mentor data registered successfully",
              data: data
          });
      })
      .catch((err) => {
          res.json({
              status: 500,
              msg: "data not registered",
              data: err
          });
      });
}

module.exports={mentorregister,upload}