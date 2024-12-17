const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../../models/User'); // Adjust path as needed

//register
const registerUser = async (req, res) => {
  const { Username, Email, Password } = req.body;

  try {
    const checkUser = await User.findOne({ Email });
    if (checkUser)
      return res.json({
        success: false,
        message: "User Already exists with the same email! Please try again",
      });

    const hashPassword = await bcrypt.hash(Password, 12);
    const newUser = new User({
      Username,
      Email,
      Password: hashPassword,
    });

    await newUser.save();
    res.status(200).json({
      success: true,
      message: "Registration successful",
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Some error occured",
    });
  }
};

const loginUser = async(req,res)=>{
  const {Email,Password}=req.body;
  try{
    const checkUser=await User.findOne({Email});
    console.log(checkUser)
    if(!checkUser){
      return res.json({
        success:false,
        message:"User not found"
        });
    }
    const isMatch=await bcrypt.compare(Password,checkUser.Password);
    if(!isMatch){
      return res.json({
        success:false,
        message:"Invalid Password"
        });
    }
    const token = jwt.sign(
      { _id: checkUser._id, Username: checkUser.Username, Email: checkUser.Email, Role:checkUser.Role },
      "secret_key",
      {expiresIn:"60m"}
    )
    res.cookie("token", token, { httpOnly: true, secure: false }).json({
      success: true,
      message: "Logged in successfully",
      user: {
        Email: checkUser.Email,
        Role: checkUser.Role,
        id: checkUser._id,
        UserName: checkUser.UserName,
      },
    });

  }catch(e){
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Some error occured",
    });
  }
}
const logoutUser = (req, res) => {
  res.clearCookie("token").json({
    success: true,
    message: "Logged out successfully!",
  });
};

const authMiddleware = async (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    console.log("No token provided");
    return res.status(401).json({
      success: false,
      message: "Unauthorized user!",
    });
  }

  try {
    const decoded = jwt.verify(token, "secret_key");
    req.user = decoded;
    next();
  } catch (error) {
    console.error("Token verification failed:", error.message);
    res.status(401).json({
      success: false,
      message: "Unauthorized user!",
    });
  }
};

module.exports = { registerUser, loginUser ,logoutUser,authMiddleware};
