'use strict';require("dotenv").config();var createError=require("http-errors");var express=require("express");var path=require("path");var cookieParser=require("cookie-parser");var logger=require("morgan");var cors=require("cors");var helmet=require("helmet");var hpp=require("hpp");var _require=require("swagger-ui-express"),serve=_require.serve,setup=_require.setup;var cepRoutes=require("./routes/cepRoutes");var swaggerJson=require("../swagger.json");var tooBusyMiddleware=require("./middlewares/tooBusyMiddleware");var bouncerLimiter=require("./middlewares/bouncerLimiterMiddleware");var app=express();app.set("views",path.join(__dirname,"views"));app.set("view engine","");app.use(helmet());app.use(logger("dev"));app.use(express.json());app.use(express.urlencoded({extended:false}));app.use(cookieParser());app.use(hpp());app.use(tooBusyMiddleware);app.use(cors());app.use(express["static"](path.join(__dirname,"public")));app.use(bouncerLimiter.block);app.use("/cep",cepRoutes);app.use("/api-docs",serve,setup(swaggerJson));app.use(function(req,res,next){next(createError(404))});app.use(function(err,req,res,next){res.locals.message=err.message;res.locals.error=req.app.get("env")==="development"?err:{};res.status(err.status||500);res.json({message:err.message})});module.exports=app;