const User = require("../model/UserModel");
const { createSecretToken } = require("../utils/SearchToken");
const bcrypt = require("bcryptjs");

module.exports.Signup = async (req, res, next) => {
  try {
    const { email, password, username, createdAt } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ message: "User already exists" });
    }
    const check = await User.findOne({email:email})
    if(check){
     return res.json("exist");
    }
    const user = await User.create({ email, password, username, createdAt });
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });
    res
      .status(201)
      .json({ message: "User signed in successfully", success: true, user });
    next();
  } catch (error) {
    console.error(error);
  }
};

// module.exports.Login = async (req, res, next) => {
//   try {
//     const { email, password } = req.body;
//     if(!email || !password ){
//       return res.json({message:'All fields are required'})
//     }
//     const user = await User.findOne({ email });
//     if(!user){
//       return res.json({message:'Incorrect password or email' }) 
//     }
//     const auth = await bcrypt.compare(password,user.password)
//     if (!auth) {
//       return res.json({message:'Incorrect password or email' }) 
//     }

//     const check = await User.findOne({email:email})
//     if(check){
//       res.json("exist");
//     }
//     else{
//       res.json("notexist")
//     }
//      const token = createSecretToken(user._id);
//      res.cookie("token", token, {
//        withCredentials: true,
//        httpOnly: false,
//      });
//      res.status(201).json({ message: "User logged in successfully", success: true });
//      next()
//   } catch (error) {
//     console.error(error);
//   }
// }

module.exports.Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Incorrect password or email' });
    }

    const auth = await bcrypt.compare(password, user.password);
    if (!auth) {
      return res.status(401).json({ message: 'Incorrect password or email' });
    }

    // Set a cookie with user information
    res.cookie('user', JSON.stringify({ email }), { httpOnly: true, secure: true, sameSite: 'Strict' });

    return res.status(200).json({ message: 'Login successful', success: true });
  } catch (error) {
    console.error('Error during login:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};