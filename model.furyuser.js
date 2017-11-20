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
	requiresLogin:'',
    login: function(callback) {		
		
		document.Furyuser=Furyuser;
		var obj = {};		;		
		var account_obj=new fury.StromDAOBONode.Account(Furyuser.username,Furyuser.password);				
		account_obj.wallet().then(function(wallet) {									
				Furyuser.account.obj = account_obj;
				Furyuser.account.wallet=wallet;
				Furyuser.account.address = wallet.address;
				var node = new fury.StromDAOBONode.Node({external_id:Furyuser.username,privateKey:wallet.privateKey,testMode:true,rpc:fury.furyrpc,abilocation:fury.furyabi});				
				node.roleLookup().then(function(rl) {
					rl.relations(Furyuser.account.address,222).then(function(tx) {
						if(tx=="0x0000000000000000000000000000000000000000") {
							if(typeof callback!="undefined") callback(Furyuser);
							return this;
						} else {							
							node.stringstorage(tx).then(function(ss) {
								ss.str().then(function(str) {
									account_obj.decrypt(str).then(function(pk) {																				
										node.furyuser().then(function(furyuser) {											
											furyuser.getRSAKeys(account_obj).then(function() {
												node = new fury.StromDAOBONode.Node({external_id:Furyuser.username,privateKey:pk,testMode:true,rpc:fury.furyrpc,abilocation:fury.furyabi});	
												Furyuser.node=node;									
												Furyuser.account.rsaPrivate=account_obj.RSAPrivateKey;
												Furyuser.account.rsaPublic=account_obj.RSAPublicKey;	
												rl.relations(node.wallet.address,41).then(function(tx) {
													Furyuser.node.blg=tx;
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
    },
}

module.exports = Furyuser
