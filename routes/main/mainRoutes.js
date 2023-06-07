const express = require('express');

const mainController = require('../../controllers/main/mainController');

const router = express.Router();

router.get('/', mainController.getMainPage); // Main page
router.use(mainController.get404); // Page not found

module.exports = router;