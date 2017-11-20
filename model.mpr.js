var m = require("mithril")
var Furyuser = require("./model.furyuser.js");

var fury = {
	StromDAOBONode:require("stromdao-businessobject"),
	furyrpc:"https://fury.network/rpc",
	furyabi:"https://cdn.rawgit.com/energychain/StromDAO-BusinessObject/master/smart_contracts/",
};


var MPR_model = function(req_address) {
	
	this.address=req_address;
	this.power="-";
	this.time="-";
	this.storeReading=function() {
		Furyuser.node.mpr().then(function(mpr) {
			mpr.storeReading(MPR_model.power).then(function(tx) {				
				console.log(tx,MPR_model.power);			
			});
		});			
	}
    this.oninit=function(callback) {	
		if(typeof req_address=="undefined")  req_address=	Furyuser.node.wallet.address;
					
		Furyuser.node.mpr().then(function(mpr) {
				mpr.readings(req_address).then(function(reading) {
						MPR_model.address=req_address;
						MPR_model.power=reading.power.toString();
						MPR_model.time=reading.time.toString()*1000;
						if(typeof callback != "undefined") callback(MPR_model);						
				});
		});
    };
}

module.exports = MPR_model
