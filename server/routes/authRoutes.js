var express = require("express");
var router = express.Router();
const mongoose = require('mongoose');
const User=mongoose.model('User');
const Course=mongoose.model('Course');
const TempCourse=mongoose.model('TempCourse');
const {jwtkey}=require('../keys');
const jwt=require('jsonwebtoken');

router.post("/signup", async (req, res)=>{
	console.log(req.body)
	const {email,password,ML,Net,CC,Java,Db}=req.body;
	try{
		const user = new User({email,password,ML,Net,CC,Java,Db});
        console.log("chgh "+user.Db);
        await user.save();
        const token=jwt.sign({userId:user._id},jwtkey)
        res.send({token});
	}
    catch(err){
         res.status(422).send(err.message);
    }	
});

router.post("/Course", async (req, res)=>{
    console.log(req.body)
    const {name}=req.body;
    try{
        const course = new Course({name});
        console.log("Course "+course.name);
        await course.save();
        const token=jwt.sign({courseId:course._id},jwtkey)
        res.send({token});
    }
    catch(err){
         res.status(422).send(err.message);
    }   
});

router.get('/home',(req,res,next)=>{
    Course.find({})
    .exec()
    .then(doc => {
        if(doc){
          console.log(doc[0].CourseName);  
          res.status(200).json(doc);
        }
        else{
            res.status(500)
        }
       
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({error: err})
    })


});

router.post('/login',async (req,res)=>{
    const {email,password} = req.body
    if(!email){
        return res.status(422).send({error :"must provide email  1"})
    }
    if(!password){
        return res.status(422).send({error :"must provide password 1"})
    }
    const user = await User.findOne({email})
    if(!user){
        return res.status(422).send({error :"must provide email or password 2"})
    }
    try{
      console.log(user.password);
      if(user.password===password){
      	const token = jwt.sign({userId:user._id},jwtkey)
        res.send({token})
      }
       
      
    }catch(err){
        return res.status(422).send(err.message);
        //return res.status(422).send({error :"must provide email or password 3"})
    }
    


})
module.exports = router;