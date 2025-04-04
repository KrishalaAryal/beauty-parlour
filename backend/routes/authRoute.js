const { registerUser, loginUser, logoutUser } = require("../controller/authController")

const router = require("express").Router()

router.post("/register", registerUser)
router.post("/login",loginUser)
router.post("/logout", logoutUser)

module.exports = router;