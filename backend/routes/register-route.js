const express = require("express");
const router = express.Router();

const { registerUser, getUser } = require("../contrallers/register-contraller");

router.post("/", registerUser);
router.get("/", getUser);

module.exports = router;
