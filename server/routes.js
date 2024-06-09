const router=require('express').Router()
const entrepreneurs=require('./Entrepreneurs/entrepreneurController')
const investors=require('./Investors/investorController')
const mentors=require('./Mentors/mentorController')

//entrepreneurs
router.post('/registerEntrepreneur',entrepreneurs.upload,entrepreneurs.registerEntrepreneur)
router.post('/loginEntrepreneur',entrepreneurs.login)
router.post('/forgotPasswordEntrepreneur',entrepreneurs.forgotPassword)

// investor 
router.post('/registerInvestor',investors.upload,investors.registerInvestor)

// mentor
router.post('/registermentor',mentors.upload,mentors.mentorregister)


module.exports=router