const { check, oneOf, body, validationResult } = require('express-validator');
/* 
Can use a common keyword `check` for all these [param/body.query]
Syntax : check([field, message])
To get all available methods : https://github.com/validatorjs/validator.js#validators
*/

exports.signUp = [
    check('firstName')
        .trim()
        .notEmpty().withMessage('User name can not be empty!').bail()
        .isLength({ min: 3 }).withMessage('Should be at least 3 characters long').bail()
        .isAlpha().withMessage('Must be only alphabetical chars').bail(),
    check('lastName')
        .trim()
        .notEmpty().withMessage('User name can not be empty!').bail()
        .isLength({ min: 3 }).withMessage('Should be at least 3 characters long').bail()
        .isAlpha().withMessage('Must be only alphabetical chars').bail(),
    check('email')
        .trim()
        .notEmpty().withMessage('Email can not be empty!').bail()
        .isLength({ min: 8 }).withMessage('Should be at least 8 characters long').bail()
        .isEmail().withMessage('Should be a correct email!').bail(),
    check('password')
        .trim()
        .notEmpty().withMessage('Password can not be empty!').bail()
        .isLength({ min: 4, max: 16 })
        .withMessage('Password must be between 4 to 16 characters').bail()
        .custom((password, { req }) => {
            return new Promise((resolve, reject) => {
                if (password != req.body.confirmPassword) reject(`Password and Confirm Password should be same.`)
                else resolve()
            });
        }),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty())
            return res.status(422).json({ errors: errors.array() });
        next();
    },
];

exports.signIn = [
    check('email')
        .trim()
        .notEmpty().withMessage('Email can not be empty!').bail()
        .isLength({ min: 8 }).withMessage('Should be at least 8 characters long').bail()
        .isEmail().withMessage('Should be a correct email!').bail(),
    check('password')
        .trim()
        .isLength({ min: 4, max: 16 })
        .withMessage('Password must be between 4 to 16 characters'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty())
            return res.status(422).json({ errors: errors.array() });
        next();
    },
];

exports.getUser = [
    check('_id', 'should be required')
        .trim()
        .isMongoId().withMessage('Should be MongoId'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty())
            return res.status(422).json({ errors: errors.array() });
        next();
    },
];

