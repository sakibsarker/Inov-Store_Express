const asycHandler =require('../middleware/asyncHandler')
const Userdata=require('../model/userModel');
const jwt=require('jsonwebtoken');

//post and public access
exports.authUser=asycHandler(async (req, res) => {
  const{email,password}=req.body;

  const user=await Userdata.findOne({email})
  if(user && (await user.matchPassword(password))){
    const token=jwt.sign({userId:user._id},process.env.JWT_SECRET,{expiresIn:'30d'});

    //set jwt as HTTP only cookie
    res.cookie('jwt',token,{
      httpOnly:true,
      secure:process.env.NODE_ENV!=='development',
      sameSite:'strict',
      maxAge:30*24*60*60*1000 //30 days
    });

    res.json({
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
    res.send('register user')
  });
//post and private access and logout and clear cookie
exports.logoutUser=asycHandler(async (req, res) => {
    res.send('logout user')
  });

//get user profile and privete accesss
exports.getUserProfile=asycHandler(async (req, res) => {
    res.send('get user profile')
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