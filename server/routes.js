const router=require('express').Router()
const entrepreneurs=require('./Entrepreneurs/entrepreneurController')

//entrepreneurs
router.post('/registerEntrepreneur',entrepreneurs.upload,entrepreneurs.registerEntrepreneur)

module.exports=router