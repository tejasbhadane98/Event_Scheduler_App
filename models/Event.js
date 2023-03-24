const express = require("express");
const mongoose = require("mongoose");

const EventSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:String,
    location:String,
    startTime:String,
    endTime:String
});

let Event = mongoose.model("event", EventSchema);
module.exports=Event;