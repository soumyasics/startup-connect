const Investor =require('./investorSchema');
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
            investing_category,
            occupation,
            description,
            address,
        }=req.body;

        const newInvestor=new Investor({
            name,
            email,
            contact,
            organization,
            nationality,
            password,
            investing_category,
            occupation,
            description,
            address,
            profile:req.files[0],
            identification_document:req.files[1],
        
        });
        let existingInvestor_email = await Investor.findOne({ email });
        if (existingInvestor_email) {
            return res.status(409).json({
                msg: "Email Already Registered With Us !!",
                data: null
            });
        }
        let existingInvestor_contact = await Investor.findOne({ contact });
        if (existingInvestor_contact){
            return res.status(409).json({
                msg:"Contact Already Exists !!",
                data: null
            })
        }
        await newInvestor.save()
        
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

// View all investors
const viewInvestors = (req, res) => {
    Investor.find()
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

const loginInvestor=(req,res)=>{
    const { email , password }=req.body
    Investor.findOne({email})
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
    loginInvestor,
    viewInvestors,
}