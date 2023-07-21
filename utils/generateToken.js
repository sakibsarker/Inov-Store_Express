const jwt=require('jsonwebtoken');

const generateToken=(res,userId)=>{
    const token=jwt.sign({userId},process.env.JWT_SECRET,{
      expiresIn:'30m'});

    //set jwt as HTTP only cookie
    res.cookie('jwt',token,{
      httpOnly:false,
      secure:process.env.NODE_ENV!=='development',
      sameSite:'strict',
      maxAge:30*60* 1000,
     
    });
    return token;

}

module.exports={generateToken}