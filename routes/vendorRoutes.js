const vendorController = require("../Controller/vendorController");
const express = require("express");

const router = express.Router();


router.post('/register',vendorController.VendorRegister);
router.post('/login',vendorController.vendorLogin);


module.exports = router;
