var m = require("mithril")
var Panel = require("./ctrl.panel.js");
var Furyuser = require("./model.furyuser.js");


Panel.prototype.Nodeinfo=function() { 
	this.setHeading("Node Account");
	
	this.setBody( m("div",[		
		m("h3",document.resolveAddress(Furyuser.node.wallet.address)),
		m("p",[
			m("h4","RSA Public"),
			m("pre",Furyuser.node.RSAPublicKey)
		]),
		m("p",[
			m("h4","RSA Private"),
			m("pre",Furyuser.node.RSAPrivateKey)
		])
		]));	
}

module.exports = Panel;
