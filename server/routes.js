const router=require('express').Router()
const entrepreneurs=require('./Entrepreneurs/entrepreneurController')
const investers=require('./Investors/investorController')

//entrepreneurs
router.post('/registerEntrepreneur',entrepreneurs.upload,entrepreneurs.registerEntrepreneur)
router.post('/loginEntrepreneur',entrepreneurs.login)
router.post('/forgotPasswordEntrepreneur',entrepreneurs.forgotPassword)

// investor 
router.post('/registerInvestor',investors.upload,investors.registerInvestor)


module.exports=router