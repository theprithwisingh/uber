const express = require("express");
const router  = express.Router();
const {body}  = require("express-validator");
const userController = require('../controllers/user.controller')

router.post('/register',[
    // Validating email
    body('email').isEmail().withMessage('Invalid Email'),

    // Validating fullname.firstname (at least 3 characters)
    body('fullname.firstname').isLength({ min: 3 }).withMessage('First name must be at least 3 characters'),

    // Validating password (at least 6 characters)
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters')
], 
userController.registerUser
)

module.exports = router;