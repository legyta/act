const { body, validationResult } = require('express-validator');
const User = require("../models/userModel");
const bcrypt = require("bcryptjs");

exports.validateRegister =
    [
        body('email')
            .exists()
            .withMessage("Email was not in form").bail()
            .notEmpty()
            .withMessage("Email does not exist").bail()
            .trim()
            .isEmail()
            .withMessage('Invalid Email').bail()
            .custom(emailNotInUse),

        body('password')
            .custom((value, { req }) => value === req.body.passwordCheck)
            .withMessage('Passwords must match').bail()
            .trim()
            .isLength({ min: 5 })
            .withMessage('Password Must Be at Least 5 Characters')
            .matches('[0-9]')
            .withMessage('Password Must Contain a Number')
            .matches('[A-Z]')
            .withMessage('Password Must Contain an Uppercase Letter')
            .matches('[a-z]')
            .withMessage('Password Must Contain a Lowercase Letter').bail()
            .customSanitizer(async (value) => {
                const salt = await bcrypt.genSalt();
                return passwordHash = await bcrypt.hash(value, salt);
            }),

        body('displayName')
            .notEmpty()
            .withMessage("Display Name does not exist").bail()
            .custom(userNameNotInUse)
            .trim()

    ];

exports.register = async (req, res, next) => {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            res.status(422).json({ errors: errors.array() });
            return;
        }
        let { email, password, _, displayName } = req.body;
        
        const newUser = await User.create({
            email,
            password,
            displayName
        })

        const savedUser = await newUser.save();
        res.json(savedUser);

    } catch (err) {
        return next(err)
    }
}

function emailNotInUse(value) {
    return new Promise((resolve, reject) => {
        User.findOne({ email: value }, function (err, user) {
            if (err) {
                reject(new Error('Server Error'))
            }
            if (Boolean(user)) {
                reject(new Error('E-mail already in use'))
            }
            resolve(true)
        });
    });
}

function userNameNotInUse(value) {
    return new Promise((resolve, reject) => {
        User.findOne({ displayName: value }, function (err, user) {
            if (err) {
                reject(new Error('Server Error'))
            }
            if (Boolean(user)) {
                reject(new Error('Username already in use'))
            }
            resolve(true)
        });
    });
}

