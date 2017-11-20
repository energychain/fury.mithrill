var m = require("mithril")
var Furyuser = require("./model.furyuser.js");

var fury = {
	StromDAOBONode:require("stromdao-businessobject"),
	furyrpc:"https://fury.network/rpc",
	furyabi:"https://cdn.rawgit.com/energychain/StromDAO-BusinessObject/master/smart_contracts/",
};


var Stromkonto_model = function(sko_address,req_address) {
	
	this.req_address=req_address;
	this.sko_address=sko_address;
	this.balanceHaben="-";
	this.balanceSoll="-";
	this.baseHaben="-";
	this.baseSoll="-";
	
    this.oninit=function(sko_address,req_address,callback) {			
		if(typeof req_address=="undefined")  req_address=Furyuser.node.wallet.address;
		if(typeof sko_address=="undefined") sko_address=Furyuser.node.blg;				
		Furyuser.node.stromkonto(sko_address).then(function(sko) {					
						sko.balancesHaben(req_address).then(function(balanceHaben) {														
								sko.balancesSoll(req_address).then(function(balanceSoll) {										
										sko.baseHaben(req_address).then(function(baseHaben) {												
												sko.baseSoll(req_address).then(function(baseSoll) {														
														if(typeof callback != "undefined")  { 
															callback({
																	req_address:req_address,
																	sko_address:sko_address,
																	balanceHaben:balanceHaben,
																	balanceSoll:balanceSoll,
																	baseHaben:baseHaben,
																	baseSoll:baseSoll
															}); 
														}
												});
										});
								});		
						});
				});		
    };
}

module.exports = Stromkonto_model
