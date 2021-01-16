const { body, validationResult } = require('express-validator');
const User = require("../../models/userModel");
const bcrypt = require("bcryptjs");

exports.validateRegister =
    [
        body('email')
            .exists()
            .withMessage("Email does not exist").bail()
            .trim()
            .normalizeEmail()
            .isEmail()
            .withMessage('Invalid Email').bail()
            .custom(emailNotInUse),

        body('password')
            .custom((value, { req }) => value === req.body.passwordCheck)
            .withMessage('Passwords must match').bail()
            .trim()
            .isLength({ min: 5 })
            .withMessage('Password Must Be at Least 8 Characters')
            .matches('[0-9]')
            .withMessage('Password Must Contain a Number')
            .matches('[A-Z]')
            .withMessage('Password Must Contain an Uppercase Letter').bail()
            .customSanitizer(async (value) => {
                const salt = await bcrypt.genSalt();
                return passwordHash = await bcrypt.hash(value, salt);
            }),

        body('displayName')
            .exists()
            .withMessage("you need a dsiaply name").bail()
            .custom(userNameNotInUse)
            .trim()

    ];

exports.createUser = async (req, res, next) => {
    try {
        const errors = validationResult(req); // Finds the validation errors in this request and wraps them in an object with handy functions

        if (!errors.isEmpty()) {
            res.status(422).json({ errors: errors.array() });
            return;
        }
        // const user = await User.create({
        //     req.body.email,
        //     password: passwordHash,
        //     req.body.displayName
        // })
        const user = {
            "test": "pass",
            "email": email,
            "pass": password,
            "name": displayName
        }

        res.json(user)
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

