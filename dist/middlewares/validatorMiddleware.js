'use strict';var _require=require("express-validator"),validationResult=_require.validationResult;function validatorMiddleware(req,res,next){var errors=validationResult(req);if(!errors.isEmpty()){return res.status(406).json({message:"Your request is invalid. Here are the errors",errors:errors.mapped()})}next()}module.exports=validatorMiddleware;