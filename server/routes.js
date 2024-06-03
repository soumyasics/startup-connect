const router=require('express').Router()
const entrepreneurs=require('./Entrepreneurs/entrepreneurController')

//entrepreneurs
router.post('/registerEntrepreneur',entrepreneurs.upload,entrepreneurs.registerEntrepreneur)
router.post('/editEntrepreneurById/:id',entrepreneurs.upload,entrepreneurs.editEntrepreneurById)
router.post('/viewEntrepreneurById/:id',entrepreneurs.viewEntrepreneurById)
router.post('/deleteEntrepreneurById/:id',entrepreneurs.deleteEntrepreneurById)
router.post('/viewEntrepreneurs',entrepreneurs.viewEntrepreneurs)
router.post('/login',entrepreneurs.login)
router.post('/resetPassword',entrepreneurs.resetPassword)
router.post('/forgotPassword',entrepreneurs.forgotPassword)

module.exports=router