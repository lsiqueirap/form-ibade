'use strict';

var mongoose = require('mongoose');
	
var fs = require("fs");
exports.submitForm = function(req, res) {	

	var commonModel = mongoose.model('registration');
	req.body.createdAt = new Date().getTime();
	
	var commonFormData = new commonModel(req.body);


	commonFormData.save(function(err, result) {
		
		if (err) {
			
			res.json({
				status: false,
				message: err
			});
			return;
		}

		
		res.json({
			status: true,
			result: result
		});
	});
	return;
}
exports.getdata=function(req,res){

	var commonModel = mongoose.model('registration');
	var dataget=new commonModel();
	console.log("res",req.body)
	commonModel.find({_id:req.body.id},function(err, result) {
		if (err) {
			
			res.json({
				status: false,
				message: err
			});
			return;
		}

		
		res.json({
			status: true,
			result: result
		});
	});
	return;
}