const router=require('express').Router()
const entrepreneurs=require('./Entrepreneurs/entrepreneurController')
const investors=require('./Investors/investorController')

const mentors=require('./Mentors/mentorController')
const admin=require('./Admin/adminController')


const pitch_my_idea=require('./Entrepreneurs/PitchMyIdea/PitchMyIdeaController')

//entrepreneurs
router.post('/registerEntrepreneur',entrepreneurs.upload,entrepreneurs.registerEntrepreneur)
router.post('/loginEntrepreneur',entrepreneurs.login)
router.post('/viewEntrepreneurs',entrepreneurs.viewEntrepreneurs)
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
router.post('/viewInvestorReqs',investors.viewInvestorReqs)
router.post('/approveInvestorReqsById/:id',investors.approveInvestorReqsById)
router.post('/activateInvestorById/:id',investors.activateInvestorById)
router.post('/removeInvestorById/:id',investors.removeInvestorById)
router.post('/deActivateInvestorById/:id',investors.deActivateInvestorById)
router.post('/viewlessinvestors',investors.viewLessInvestorReqs)




// mentor
router.post('/registerMentor',mentors.upload,mentors.registerMentor)
router.post('/loginMentor',mentors.loginMentor)
router.post('/viewlessmentors',mentors.viewLessMentorReqs)
router.post('/viewMentorsReqs',mentors.viewMentorReqs)
router.post('/viewMentors',mentors.viewMentors)
router.post('/viewMentorById/:id',mentors.viewMentorById)
router.post('/approveMentorReqsById/:id',mentors.approveMentorReqsById)
router.post('/removeMentorById/:id',mentors.removeMentorById)
router.post('/editMentorById/:id',mentors.upload,mentors.editMentorById)
router.post('/mentorAddBlog',mentors.uploadblog,mentors.mentorAddBlog)
router.post('/mentorViewBlog',mentors.mentorViewBlog)
router.post('/mentorViewBlogById/:id',mentors.mentorViewBlogById)
router.post('/mentorUpdateBlog/:id',mentors.uploadblog,mentors.mentorUpdateBlog)
router.post('/mentorRemoveBlog/:id',mentors.mentorRemoveBlog)
router.post('/mentorAddTutorial',mentors.uploadtutorial,mentors.mentorAddTutorial)
router.post('/mentorViewTutorial',mentors.mentorViewTutorial)
router.post('/mentorViewTutorialById/:id',mentors.mentorViewTutorialById)
router.post('/mentorUpdateTutorial/:id',mentors.uploadtutorial,mentors.mentorUpdateTutorial)
router.post('/mentorRemoveTutorial/:id',mentors.mentorRemoveTutorial)














//Admin routes
router.post('/loginAdmin',admin.loginAdmin)
router.post('/forgotPassword',admin.forgotPassword)

module.exports=router