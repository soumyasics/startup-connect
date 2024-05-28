const Entrepreneur = require('./entrepreneurSchema');
const jwt = require('jsonwebtoken');
const secret = 'entrepreneur'; // Replace this with your own secret key
const multer=require('multer')
const storage = multer.diskStorage({
    destination: function (req, res, cb) {
      cb(null, "./upload");
    },
    filename: function (req, file, cb) {
      const uniquePrefix = 'prefix-'; // Add your desired prefix here
      const originalname = file.originalname;
      const extension = originalname.split('.').pop();
      const filename = uniquePrefix + originalname.substring(0, originalname.lastIndexOf('.')) + '-' + Date.now() + '.' + extension;
      cb(null, filename);
    },
  });
  const upload = multer({ storage: storage }).single("image");

// Register Entrepreneur
const registerEntrepreneur = async (req, res) => {
    try {
        const { fname, lname, email, dob, address, contact,  gender, password } = req.body;

        const newEntrepreneur = new Entrepreneur({
            fname,
            lname,
            email,
            dob,
            address,
            contact,
            image:req.file,
            gender,
            password
        });

        let existingEntrepreneur = await Entrepreneur.findOne({ email });
        if (existingEntrepreneur) {
            return res.status(409).json({
                msg: "Email Already Registered With Us !!",
                data: null
            });
        }

        await newEntrepreneur.save()
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
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// View all entrepreneurs
const viewEntrepreneurs = (req, res) => {
    Entrepreneur.find()
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

// Update entrepreneur by ID
const editEntrepreneurById = async (req, res) => {
    const { fname, lname, email, dob, address, contact, image, gender, password } = req.body;

    try {
        let existingEntrepreneur = await Entrepreneur.findOne({ contact });
        let entrepreneurData = await Entrepreneur.findById(req.params.id);

        if (existingEntrepreneur && existingEntrepreneur.contact !== entrepreneurData.contact) {
            return res.status(409).json({
                msg: "Contact Number Already Registered With Us !!",
                data: null
            });
        }

        await Entrepreneur.findByIdAndUpdate(req.params.id, {
            fname,
            lname,
            email,
            dob,
            address,
            contact,
            image,
            gender,
            password
        })
            .exec()
            .then(data => {
                res.status(200).json({
                    msg: "Updated successfully"
                });
            })
            .catch(err => {
                res.status(500).json({
                    msg: "Data not Updated",
                    Error: err
                });
            });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// View entrepreneur by ID
const viewEntrepreneurById = (req, res) => {
    Entrepreneur.findById(req.params.id)
        .exec()
        .then(data => {
            res.status(200).json({
                msg: "Data obtained successfully",
                data: data
            });
        })
        .catch(err => {
            res.status(500).json({
                msg: "No Data obtained",
                Error: err
            });
        });
};

// Delete entrepreneur by ID
const deleteEntrepreneurById = (req, res) => {
    Entrepreneur.findByIdAndDelete(req.params.id)
        .exec()
        .then(data => {
            res.status(200).json({
                msg: "Data removed successfully",
                data: data
            });
        })
        .catch(err => {
            res.status(500).json({
                msg: "No Data obtained",
                Error: err
            });
        });
};

// Forgot Password for entrepreneur
const forgotPassword = (req, res) => {
    Entrepreneur.findOneAndUpdate({ email: req.body.email }, {
        password: req.body.password
    })
        .exec()
        .then(data => {
            if (data != null)
                res.status(200).json({
                    msg: "Updated successfully"
                });
            else
                res.status(500).json({
                    msg: "User Not Found"
                });
        })
        .catch(err => {
            res.status(500).json({
                msg: "Data not Updated",
                Error: err
            });
        });
};

// Reset Password for entrepreneur
const resetPassword = async (req, res) => {
    let pwdMatch = false;

    await Entrepreneur.findById(req.params.id)
        .exec()
        .then(data => {
            if (data.password === req.body.oldpassword)
                pwdMatch = true;
        })
        .catch(err => {
            res.status(500).json({
                msg: "Data not Updated",
                Error: err
            });
        });

    if (pwdMatch) {
        await Entrepreneur.findByIdAndUpdate(req.params.id, {
            password: req.body.newpassword
        })
            .exec()
            .then(data => {
                if (data != null)
                    res.status(200).json({
                        msg: "Updated successfully"
                    });
                else
                    res.status(500).json({
                        msg: "User Not Found"
                    });
            })
            .catch(err => {
                res.status(500).json({
                    msg: "Data not Updated",
                    Error: err
                });
            });
    } else {
        res.status(405).json({
            msg: "Your Old Password doesn't match"
        });
    }
};

const createToken = (user) => {
    return jwt.sign({ userId: user._id }, secret, { expiresIn: '1h' });
};

// Login
const login = (req, res) => {
    const { email, password } = req.body;

    Entrepreneur.findOne({ email }).then(user => {
        if (!user) {
            return res.status(405).json({ msg: 'User not found' });
        }

        if (user.password !== password) {
            return res.status(405).json({ msg: 'Password Mismatch !!' });
        }

        const token = createToken(user);

        res.status(200).json({
            data: user,
            token: token
        });
    }).catch(err => {
        console.log(err);
        return res.status(500).json({ msg: 'Something went wrong' });
    });
};

// Validate Token
const requireAuth = (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1];

    if (!token) {
        return res.status(401).json({ msg: 'Unauthorized' });
    }

    jwt.verify(token, secret, (err, decodedToken) => {
        if (err) {
            return res.status(401).json({ msg: 'Unauthorized', err: err });
        }

        req.user = decodedToken.userId;
        next();
    });
};

module.exports = {
    registerEntrepreneur,
    viewEntrepreneurs,
    editEntrepreneurById,
    viewEntrepreneurById,
    deleteEntrepreneurById,
    forgotPassword,
    resetPassword,
    login,
    requireAuth,
    upload
};
