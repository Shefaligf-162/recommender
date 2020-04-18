const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const userSchema = new mongoose.Schema({
    email:{
    	type:String,
    	require:true
    },
    password:{
    	type:String,
    	require:true
    },
    ML:{
    	type:String,
    	require:true
    },
    Net:{
    	type:String,
    	require:true
    },
    CC:{
    	type:String,
    	require:true
    },
    Java:{
    	type:String,
    	require:true
    },
    Db:{
        type:String,
        require:true
    }
})
mongoose.model('User',userSchema);