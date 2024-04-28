const express = require("express");
const { contactus } = require("../controller/contactus");

const router = express.Router();

router.post("/submit", contactus);

module.exports = router;
