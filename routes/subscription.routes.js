import { Router } from "express";
import authorize from "../middleware/auth.middleware.js";
import { createSubscription } from "../controllers/subscription.controller.js";
import { getUserSubscriptions } from "../controllers/subscription.controller.js";
const subscriptionRouter = Router();

subscriptionRouter.get('/',(req,res)=>{
    res.send({title:"get all subscriptions"})
})

subscriptionRouter.get('/:id',(req,res)=>{
    res.send({title:"get subscription"})
})

subscriptionRouter.post('/',authorize,createSubscription)

subscriptionRouter.put('/:id',(req,res)=>{
    res.send({title:"update subscription"})
})

subscriptionRouter.delete('/:id',(req,res)=>{
    res.send({title:"delete subscription"})
})

subscriptionRouter.get('/user/:id',authorize,getUserSubscriptions)

subscriptionRouter.put('/:id/cancel',(req,res)=>{
    res.send({title:"cancel a subscription"})
})

subscriptionRouter.get('/upcoming-renewals',(req,res)=>{
    res.send({title:"get all subscriptions with upcoming renewals"})
})

export default subscriptionRouter;