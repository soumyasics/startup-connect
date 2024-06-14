const router=require('express').Router()
const entrepreneurs=require('./Entrepreneurs/entrepreneurController')
const investors=require('./Investors/investorController')

const mentors=require('./Mentors/mentorController')


const pitch_my_idea=require('./Entrepreneurs/PitchMyIdea/PitchMyIdeaController')

//entrepreneurs
router.post('/registerEntrepreneur',entrepreneurs.upload,entrepreneurs.registerEntrepreneur)
router.post('/loginEntrepreneur',entrepreneurs.login)
router.post('/viewEntrepreneurById/:id',entrepreneurs.viewEntrepreneurById)
router.post('/editEntrepreneurById/:id',entrepreneurs.upload,entrepreneurs.editEntrepreneurById)
router.post('/forgotPasswordEntrepreneur',entrepreneurs.forgotPassword)
router.post('/addCompany',pitch_my_idea.addCompany)
router.post('/showActiveCompany',pitch_my_idea.showActiveCompany)
router.post('/showNotActiveCompany',pitch_my_idea.showNotActiveCompany)

// investor 
router.post('/registerInvestor',investors.upload,investors.registerInvestor)

// mentor
router.post('/registermentor',mentors.upload,mentors.mentorregister)


module.exports=router