const asycHandler =require('../middleware/asyncHandler');
const Userdata=require('../model/userModel');
const jwt=require('jsonwebtoken');
const{generateToken}=require('../utils/generateToken');

//post and public access
exports.authUser=asycHandler(async (req, res) => {
  const{email,password}=req.body;

  const user=await Userdata.findOne({email})
  if(user && (await user.matchPassword(password))){

    generateToken(res,user._id);
    res.status(200).json({
      _id:user._id,
      name:user.name,
      email:user.email,
      isAdmin:user.isAdmin,
    })
  }
  else{
    res.status(401);
    throw new Error('Invalid email or password');
  }

});

//post and public access
exports.registerUser=asycHandler(async (req, res) => {

    const {name,email,password}=req.body;

    const userExists=await Userdata.findOne({email});
    if(userExists){
      res.status(400);
      throw new Error('User already exists');
    }
    const user=await Userdata.create({
      name,
      email,
      password,
    });
    if(user){
      generateToken(res,user._id);

      res.status(200).json({
        _id:user._id,
        name:user.name,
        email:user.email,
        isAdmin:user.isAdmin,
      });
    }
    else{
      res.status(400);
      throw new Error('Invalid User Data');
    }

  });
//post and private access and logout and clear cookie
exports.logoutUser=asycHandler(async (req, res) => {
    res.status(200).cookie('jwt','',{
      httpOnly:true,
      expiresIn:new Date(0),
      // exprires:new Date(0),
    })
    res.status(200).json({message:'Logged out successfully'})
  });

//get user profile and privete accesss
exports.getUserProfile=asycHandler(async (req, res) => {
    const user=await Userdata.findById(req.user._id);

    if(user){
      res.status(200).json({
        _id:user._id,
        name:user.name,
        email:user.email,
        isAdmin:user.isAdmin,
      });
    }
    else{
      res.status(404);
      throw new Error('User not found');
    }
  });

//put and access privete
exports.updateUserProfile=asycHandler(async (req, res) => {
    res.send('update user profile')
  });

//prive and get and admin
exports.getAllUsers=asycHandler(async (req, res) => {
    res.send('get all user')
  });

//prive and get userby id
exports.getUsersById=asycHandler(async (req, res) => {
    res.send('get user by id')
  });

//private and delete and admin delete user/:id
exports.deleteUsers=asycHandler(async (req, res) => {
    res.send('delete users')
  });

//private and put and admin update user/:id
exports.updateUsers=asycHandler(async (req, res) => {
    res.send('update users')
  });