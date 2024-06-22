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
router.post('/pitchMyIdeaAddCompany/:id',pitch_my_idea.addCompany)
router.post('/pitchMyIdeaActiveCompany',pitch_my_idea.showActiveCompany)
router.post('/pitchMyIdeaNotActiveCompany',pitch_my_idea.showNotActiveCompany)
router.post('/viewStartupPlan',pitch_my_idea.viewStartupPlan)
router.post('/deleteStartupPlanById/:id',pitch_my_idea.deleteStartupPlanById)
router.post('/editStartupPlanById/:id',pitch_my_idea.editStartUpPlanById)
router.post('/viewStartupPlanById/:id',pitch_my_idea.editStartUpPlanById)






// investor 
router.post('/registerInvestor',investors.upload,investors.registerInvestor)
router.post('/loginInvestor',investors.loginInvestor)
router.post('/viewInvestors',investors.viewInvestors)
router.post('/viewInvestorById/:id',investors.viewInvestorById)
router.post('/editInvestorById/:id',investors.upload,investors.editInvestorById)



// mentor
router.post('/registermentor',mentors.upload,mentors.mentorregister)


module.exports=router