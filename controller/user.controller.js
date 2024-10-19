
const Register = async (req, res) => {
    try {
      const { email, password, FullName } = req.body;
  
      // Check if the user already exists
      const exist = await checkuser(email);
      if (exist) {
        return res.status(409).send("User already exists");
      }
  
      // Hash the password
      const hash = await bcryptjs.hash(password, 10);
      req.body.password = hash;
  
      // Create the new user
      const user = await userModel.create({ ...req.body, FullName });
  
      // Respond with the created user
     res.status(201).send(user);
    } catch (error) {
      console.error(error); // Log error for debugging
      res.status(500).send("Server error");
    }
  };



  module.exports.usercontroller= {
    findAll, Register,deleteuser, getAlluser, getuserbyid, uploadProfileImage
}