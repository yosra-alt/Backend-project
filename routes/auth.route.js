const { authercontroller } = require("../controller/auth.contoller");

const router=express.Router();

router.post("/login",authercontroller.login)

module.exports.authrouter=router;