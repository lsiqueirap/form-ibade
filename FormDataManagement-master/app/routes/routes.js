'use strict';

var express = require('express');
var router = express.Router();
var connectMultiparty = require('connect-multiparty');
var multipartMiddleware = connectMultiparty();


var controller = {
    home: require('../controllers/home'),
    userCtrl: require('../controllers/user'),
    image: require('../controllers/image'),
};

// define the home page route
router.get('/', controller.home.index);
router.post('/api/common/file/upload', multipartMiddleware, controller.image.uploadFile);
router.all('/api/v1/submit/form', controller.userCtrl.submitForm);
router.post('/api/v1/getdata',controller.userCtrl.getdata);

module.exports = router;
