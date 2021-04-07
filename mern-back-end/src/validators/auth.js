const { check, validationResult } = require('express-validator');

exports.validateSignupRequest = [ 
    check('firstName').notEmpty()
    .withMessage('bắt buộc phải có Họ'),
    check('lastName').notEmpty()
    .withMessage('bắt buộc phải có Tên'),
    check('email').isEmail()
    .withMessage('email hợp lệ là bắt buộc'),
    check('password').isLength({ min: 6 })
    .withMessage('Mật khẩu phải có độ dài hơn 6 ký tự')
];

exports.validateSigninRequest = [     
    check('email').isEmail()
    .withMessage('email hợp lệ là bắt buộc'),
    check('password').isLength({ min: 6 })
    .withMessage('Mật khẩu phải có độ dài hơn 6 ký tự')
];


exports.isRequestValidated = (req, res, next) => {
    const errors = validationResult(req);
    if(errors.array().length > 0){
        return res.status(400).json({ errors: errors.array()[0].msg })
    }
    next();
}