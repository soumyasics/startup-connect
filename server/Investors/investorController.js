const Invester =require('./investorSchema');
const multer=require('multer');
const jwt = require('jsonwebtoken');
const secret = 'invester';

const storage=multer.diskStorage({
    destination:function(req,res,cb){
        cb(null,"./upload");
    },
    filename:function(req,file,cb){
        const uniquePrefix='prefix-';
        const originalname=file.originalname;
        const extension=originalname.split('.').pop();
        const filename=uniquePrefix + originalname.substring(0, originalname.lastIndexOf('.'))+ '-' + Date.now() + '.' + extension;
        cb(null,filename);
    },
});
const upload = multer({storage:storage}).array("files");

// Register Investor

const registerInvestor= async(req,res)=>{
    try{
        const {
            name,
            email,
            contact,
            organization,
            nationality,
            password,
            industry_sector,
            occupation,
            description,
            address,
        }=req.body;

        const newInvester=new Invester({
            name,
            email,
            contact,
            organization,
            nationality,
            password,
            industry_sector,
            occupation,
            description,
            address,
            profile:req.files[0],
            identification_document:req.files[1],
        
        });
        let existingInvester_email = await Invester.findOne({ email });
        if (existingInvester_email) {
            return res.status(409).json({
                msg: "Email Already Registered With Us !!",
                data: null
            });
        }
        let existingInvester_contact = await Invester.findOne({ contact });
        if (existingInvester_contact){
            return res.status(409).json({
                msg:"Contact Already Exists !!",
                data: null
            })
        }
        await newInvester.save()
        
        .then(data => {
            res.status(200).json({
                msg: "Inserted successfully",
                data: data
            });
        })
        .catch(err => {
            res.status(500).json({
                msg: "Data not Inserted",
                data: err
            });
        });
    }catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// View all investers
const viewInvesters = (req, res) => {
    Invester.find()
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



const createToken = (user) =>{
    return jwt.sign({ userId: user.id }, secret, { expiresIn:'1hr' });
}

// Login Investor 

const loginInvester=(req,res)=>{
    const { email , password }=req.body
    Invester.findOne({email})
    .exec()
    .then(user=>{
        if(!user){
            return res.status(409).json({msg:'user not found'})
        }else if(user.password!==password){
            return res.status(409).json({msg:'Password Missmatch !!'})
        }

        const token = createToken(user)

        res.status(200).json({
            data:user,
            token:token
        });
    })
    .catch(err=>{
        console.log(err);
        return res.status(500).json({msg:'Something went wrong'})
    });

};

module.exports={
    registerInvestor,
    upload,
    loginInvester,
    viewInvesters,
}