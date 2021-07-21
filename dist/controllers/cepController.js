"use strict";function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly){symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})}keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){_defineProperty(target,key,source[key])})}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source))}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})}}return target}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true})}else{obj[key]=value}return obj}function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg);var value=info.value}catch(error){reject(error);return}if(info.done){resolve(value)}else{Promise.resolve(value).then(_next,_throw)}}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise(function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(undefined)})}}var _getCep=require("../services/getCep");var cepController={getCep:function(){var _getCep2=_asyncToGenerator(regeneratorRuntime.mark(function _callee(req,res){var cepNumber,cepClean,query,index,cepArray,_query$data,cep,logradouro,bairro,localidade,uf,data;return regeneratorRuntime.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:cepNumber=req.params.cepNumber;cepClean=cepNumber.replace(/-/g,"");query={};index=7;case 4:if(!(index>=0)){_context.next=17;break}_context.next=7;return _getCep(cepClean);case 7:query=_context.sent;cepArray=cepClean.split("");if(!query.data.erro){_context.next=13;break}cepArray[index]="0";cepClean=cepArray.join("");return _context.abrupt("continue",14);case 13:return _context.abrupt("break",17);case 14:index--;_context.next=4;break;case 17:if(!query.data.erro){_context.next=19;break}return _context.abrupt("return",res.status(404).json({message:"CEP inv\xE1lido"}));case 19:_query$data=query.data,cep=_query$data.cep,logradouro=_query$data.logradouro,bairro=_query$data.bairro,localidade=_query$data.localidade,uf=_query$data.uf;data={cep:cep,rua:logradouro,bairro:bairro,cidade:localidade,estado:uf,"cep-geral":false};if(logradouro===""){data["cep-geral"]=true}return _context.abrupt("return",res.status(200).json(_objectSpread({},data)));case 23:case"end":return _context.stop();}}},_callee)}));function getCep(_x,_x2){return _getCep2.apply(this,arguments)}return getCep}()};module.exports=cepController;