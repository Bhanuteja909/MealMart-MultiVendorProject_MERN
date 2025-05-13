const vendorController = require("../Controller/vendorController");
const express = require("express");

const router = express.Router();


router.post('/register',vendorController.VendorRegister);
router.post('/login',vendorController.vendorLogin);


router.get('/all-vendors',vendorController.getAllVendors);
router.get('/single-vendor/:person',vendorController.getVendorById);


module.exports = router;
