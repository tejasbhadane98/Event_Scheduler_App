const express = require("express");
const router = express.Router();
const Event = require("../models/Event");


router.post("/v1/events", async(req,res)=>{
    try{
        // console.log("hii");
        let event = await Event.create({...req.body})
        // console.log(event);
        res.status(201).json(event)
    }
    catch(error){
        res.status(400).json(error)
    }
});


router.get("/v1/events", async(req,res)=>{
    try{
        
        let event = await Event.find()
        // console.log(event);
        res.status(200).json(event)
    }
    catch(error){
        res.json({error})
    }
});


router.get("/v1/events/:id", async(req,res)=>{
    try{
        
        let event = await Event.find({_id:req.params.id})
        // console.log(event);
        res.status(200).json(event)
    }
    catch(error){
        res.status(404).json({error:"There is no event with that id"})
    }
});


router.delete("/v1/events/:id", async(req,res)=>{
    try{
        
        let event = await Event.findByIdAndDelete({_id:req.params.id})
        // console.log(event);
        res.status(204).json({message:"Deleted By ID"}, event)
    }
    catch(error){
        res.status(204).json({error:"There is no event with that id"})
    }
});


router.put("/v1/events/:id", async(req,res)=>{
    try{
        
        let event = await Event.updateOne({_id:req.params.id},{$set:{title:req.body.title}})
        // console.log(event);
        res.status(200).json(event)
    }
    catch(error){
        res.json({error:"There is no event with that id"})
    }
});





module.exports = router;