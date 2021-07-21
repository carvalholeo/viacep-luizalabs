"use strict";var expressBouncer=require("express-bouncer");var bouncerLimiter=expressBouncer(1000,900000,5);bouncerLimiter.whitelist.push("127.0.0.1");bouncerLimiter.whitelist.push("localhost");bouncerLimiter.whitelist.push("::1");bouncerLimiter.blocked=function(req,res,next,remaining){return res.status(429).json({message:"Too many requests have been made. Please wait ".concat(remaining/1000," seconds.")})};module.exports=bouncerLimiter;