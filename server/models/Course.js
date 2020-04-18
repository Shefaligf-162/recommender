const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const courseSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    CourseName:{
    	type:String,
    	require:true
    },
    Website:{
    	type:String,
    	require:true
    },
    Class:{
    	type:String,
    	require:true
    },
    Skills:{
    	type:String,
    	require:true
    }})

module.export = mongoose.model('Course',courseSchema);