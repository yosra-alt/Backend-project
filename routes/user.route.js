const { usercontroller } = require("../controller/user.controller");

const Router= express.Router();



Router.post("/Adduser", usercontroller.Register);
module.exports.userRouter=router;