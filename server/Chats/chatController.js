const chat = require("./chatSchema");

const chatting = async (req, res) => {

  // Create a new message
  const message = new chat({
    msg: req.body.msg,
    from:req.body.from,
    to: req.body.to,
    entId: req.body.entId,
    mentorId: req.body.mentorId,
       date:new Date()
  });
  await message
    .save()

    .then((data) => {
      res.json({
        status: 200,
        msg: "Inserted successfully",
        data: data,
      });
    })
    .catch((err) => {
      res.json({
        status: 500,
        msg: "Data not Inserted",
        Error: err,
      });
    });
};

// const viewChatRecipientsforAdvocateById = (req, res) => {
//   let uniqueUsers=[],uniqueJuniors=[],uniqueInterns=[]
//   chat
//     .find({ advId: req.params.id })
//     .populate("userId")
//     .populate("jrId")
//     .populate("internId")

//     .exec()
//     .then((data) => {
//       // console.log(data);
//       if (data.length > 0) {
//         let users = [],juniors=[],interns=[],us=[]
//         data.map((x) => {
//           if(x.userId){
//           users.push(x.userId);
//           }
//           if(x.internId){
//           interns.push(x.internId);
//           console.log("interns",x.internId);

//           }
//           if(x.jrId)
//           juniors.push(x.jrId);

//         });
//         console.log(interns.length);
//         if(users.length>0)
//          users = [...new Set(users)]
//         if(juniors.length>0)
//          juniors = [...new Set(juniors)];
//         if(interns.length>0)
//          interns = [...new Set(interns)];

//         res.json({
//           status: 200,
//           msg: "Data obtained successfully",
//           users: users,
//           juniors:juniors,
//           interns:interns
//         });
//       } else {
//         res.json({
//           status: 200,
//           msg: "No Data obtained ",
//         });
//       }
//     })
//     .catch((err) => {
//       res.json({
//         status: 500,
//         msg: "Data not Inserted",
//         Error: err,
//       });
//     });
// };
// const viewChatRecipientsforUserId = (req, res) => {
//   chat
//     .find({ userId: req.params.id })
//     .populate("advId")
//     .exec()
//     .then((data) => {
//       if (data.length > 0) {
//         adv = [];
//         data.map((x) => {
//           adv.push(x.advId);
//         });
//         const uniqueAdvs = [...new Set(adv)];
//         res.json({
//           status: 200,
//           msg: "Data obtained successfully",
//           data: uniqueAdvs,
//         });
//       } else {
//         res.json({
//           status: 200,
//           msg: "No Data obtained ",
//         });
//       }
//     })
//     .catch((err) => {
//       res.json({
//         status: 500,
//         msg: "Data not Inserted",
//         Error: err,
//       });
//     });
// };
const viewChatMsgs = (req, res) => {
  let entId = req.body.entId;
  let mentorId = req.body.mentorId;
  chat
    .find({
      // $or: [{
        mentorId: mentorId, entId: entId },
        // { rpid: parentid, parentid: rpid },
      // ],}
    )
    .sort({ date: 1 })
    .populate('mentorId')
    .populate('entId')
    .exec()
    
    .then((data) => {
      res.json({
        status: 200,
        msg: "got it successfully",
        data: data,
      });
    })
    .catch((err) => {
      res.json({
        status: 500,
        msg: "Data not obtained",
        Error: err,
      });
    });
};

// const viewChatBetweenAdvAndJr = (req, res) => {
//   let advId = req.body.advId;
//   let jrId = req.body.jrId;
//   console.log("jid",jrId);
//   chat
//     .find({
//       // $or: [{
//        advId: advId, jrId: jrId },
//         // { rpid: parentid, parentid: rpid },
//       // ],}
//     )
//     .sort({ date: 1 })
//     .populate('jrId')
//     .populate('advId')
//     .exec()
//     .then((data) => {
//       res.json({
//         status: 200,
//         msg: "got it successfully",
//         data: data,
//       });
//     })
//     .catch((err) => {
//       res.json({
//         status: 500,
//         msg: "Data not obtained",
//         Error: err,
//       });
//     });
// };

// const viewChatBetweenInternAndAdv = (req, res) => {
//   let advId = req.body.advId;
//   let internId = req.body.internId;
//   chat
//     .find({
//       // $or: [{
//        advId: advId, internId: internId },
//         // { rpid: parentid, parentid: rpid },
//       // ],}
//     )
//     .sort({ date: 1 })
//     .populate('internId')
//     .populate('advId')
//     .exec()
//     .then((data) => {
//       res.json({
//         status: 200,
//         msg: "got it successfully",
//         data: data,
//       });
//     })
//     .catch((err) => {
//       res.json({
//         status: 500,
//         msg: "Data not obtained",
//         Error: err,
//       });
//     });
// };
// const viewChatBetweenUserAndJunior = (req, res) => {
//   let jrId = req.body.jrId;
//   let userId = req.body.userId;
//   chat
//     .find({
//       // $or: [{
//        advId: advId, jrId: jrId },
//         // { rpid: parentid, parentid: rpid },
//       // ],}
//     )
//     .sort({ date: 1 })
//     .populate('jrId')
//     .populate('userId')
//     .exec()
    
//     .then((data) => {
//       res.json({
//         status: 200,
//         msg: "got it successfully",
//         data: data,
//       });
//     })
//     .catch((err) => {
//       res.json({
//         status: 500,
//         msg: "Data not obtained",
//         Error: err,
//       });
//     });
// };
module.exports = {
  chatting,
 viewChatMsgs
  
};

