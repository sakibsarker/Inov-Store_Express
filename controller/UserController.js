const asycHandler =require('../middleware/asyncHandler')
const usersdata=require('../model/userModel');

//post and public access
exports.authUser=asycHandler(async (req, res) => {
  res.send('auth user')
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
    res.send('get user profile')
  });

//prive and get userby id
exports.getUsersById=asycHandler(async (req, res) => {
    res.send('get user by id')
  });

//private and delete and admin delete user/:id
exports.deleteUsers=asycHandler(async (req, res) => {
    res.send('delete user profile')
  });

//private and put and admin update user/:id
exports.updateUsers=asycHandler(async (req, res) => {
    res.send('update users')
  });