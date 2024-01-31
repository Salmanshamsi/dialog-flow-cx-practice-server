import express from 'express';

const router = express.Router()

// router.get("/",(reqs,resp)=>{
//     resp.send("hello world")
//     console.log(reqs.body.sessionInfo.parameter)
// })
router.post("/",(reqs,resp)=>{})
router.delete("/:id",(reqs,resp)=>{})
router.put("/:id",(reqs,resp)=>{})

export default router;