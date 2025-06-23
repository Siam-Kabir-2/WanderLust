const express = require("express");
const router = express.Router({ mergeParams: true });

const passport = require("passport");
const userController = require("../controllers/users.js");

router.route("/signup")
.get( userController.renderSignUpForm)
.post(userController.signUp)

router.route("/login")
.get(userController.renderLoginForm)
.post(
  passport.authenticate("local", {
    failureRedirect: "/login",
    failureFlash: true,
  }),
  userController.login
);

router.get("/logout", userController.logout);

module.exports = router;
