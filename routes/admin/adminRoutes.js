const express = require('express')

const adminController = require('../../controllers/admin/adminController');

const router = express.Router();

router.get('/products', adminController.getAdminPage);
router.get('/add-product', adminController.getAddProductPage);
router.get('/', adminController.getAdminPage);

module.exports = router;
