var m = require("mithril")

var fury = {
	StromDAOBONode:require("stromdao-businessobject"),
	furyrpc:"https://fury.network/rpc",
	furyabi:"https://cdn.rawgit.com/energychain/StromDAO-BusinessObject/master/smart_contracts/",
};


var Furyuser = {
	account:{},
	node:{},
	username:"",
	password:"",
    login: function(callback) {				
		document.Furyuser=Furyuser;
		var obj = {};		;		
		var account_obj=new fury.StromDAOBONode.Account(Furyuser.username,Furyuser.password);				
		account_obj.wallet().then(function(wallet) {									
				Furyuser.account.obj = account_obj;
				Furyuser.account.wallet=wallet;
				Furyuser.account.address = wallet.address;
				var node = new fury.StromDAOBONode.Node({external_id:Furyuser.username,testMode:true,rpc:fury.furyrpc,abilocation:fury.furyabi});
				node.roleLookup().then(function(rl) {
					rl.relations(Furyuser.account.address,222).then(function(tx) {
						if(tx=="0x0000000000000000000000000000000000000000") {
							node = new fury.StromDAOBONode.Node({external_id:username,privateKey:pk,testMode:true,rpc:fury.furyrpc,abilocation:fury.furyabi});
							Furyuser.node=node;	
							fury.fury=obj;
							if(typeof callback!="undefined") callback(Furyuser);
							return this;
						} else {
							node.stringstorage(tx).then(function(ss) {
								ss.str().then(function(str) {
									account_obj.decrypt(str).then(function(pk) {	
										rl.relations(Furyuser.account.address,223).then(function(tx) {
												if(tx=="0x0000000000000000000000000000000000000000") {
												node = new fury.StromDAOBONode.Node({external_id:Furyuser.username,privateKey:pk,testMode:true,rpc:fury.furyrpc,abilocation:fury.furyabi});
												Furyuser.node=node;	
												fury.fury=obj;
												if(typeof callback!="undefined") callback(Furyuser);
												return this;
											} else {
												node.stringstorage(tx).then(function(ss) {
													ss.str().then(function(str) {
														account_obj.decrypt(str).then(function(rsa_priv) {	
															rl.relations(Furyuser.account.address,224).then(function(tx) {
																node.stringstorage(tx).then(function(ss) {
																	ss.str().then(function(rsa_pub) {																		
																		node = new fury.StromDAOBONode.Node({external_id:Furyuser.username,privateKey:pk,testMode:true,rpc:fury.furyrpc,abilocation:fury.furyabi});
																		Furyuser.node=node;									
																		Furyuser.account.rsaPrivate=rsa_priv;
																		Furyuser.account.rsaPublic=rsa_pub;																		
																		if(typeof callback!="undefined") callback(Furyuser);																		
																		return this;
																	});
																});
															});																
														});
													});
												});
											}
										});									
									});
								});
							});
						}
					});
				});				
		});		
    },
}

module.exports = Furyuser
