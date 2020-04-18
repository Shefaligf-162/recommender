const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const TempCourseSchema = new mongoose.Schema({
    name:{
    	type:String,
    	require:true
    }})

module.export = mongoose.model('TempCourse',TempCourseSchema);