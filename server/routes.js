const router=require('express').Router()
const entrepreneurs=require('./Entrepreneurs/entrepreneurController')
const investers=require('./Investors/investorController')

//entrepreneurs
router.post('/registerEntrepreneur',entrepreneurs.upload,entrepreneurs.registerEntrepreneur)
router.post('/loginEntrepreneur',entrepreneurs.login)
router.post('/re',entrepreneurs.requireAuth)


//investors
router.post('/registerInvester',investers.upload,investers.registerInvester)
router.post('/loginInvester',investers.loginInvester)
router.post('/viewInvesters',investers.viewInvesters)



module.exports=router