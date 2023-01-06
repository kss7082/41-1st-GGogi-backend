const express = require("express");
const userController = require("../controllers/userController");
const loginRequired = require("../utils/auth");

const router = express.Router();

router.post("/signup", userController.signUp);
router.post("/login", userController.signIn);
router.post("/emailcheck", userController.emailCheck);
router.get("/info", loginRequired, userController.getUserInfo);
router.get("/address", loginRequired, userController.getUserAddress);
router.patch("/address", loginRequired, userController.addressUpdate);
router.get("/profile", loginRequired, userController.getProfile);
router.patch("/password", loginRequired, userController.passwordUpdate);

module.exports = { router };
