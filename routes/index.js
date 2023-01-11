const express = require("express");
const router = express.Router();

const userRouter = require("./userRouter");
const productRouter = require("./productRouter");
const searchRouter = require("./searchRouter");
const cartRouter = require("./cartRouter");

router.use("/users", userRouter.router);
router.use("/carts", cartRouter.router);
router.use("/products", productRouter.router);
router.use("/search", searchRouter.router);

module.exports = router;
