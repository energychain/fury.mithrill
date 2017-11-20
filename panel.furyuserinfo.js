var m = require("mithril")
var Panel = require("./ctrl.panel.js");
var Furyuser = require("./model.furyuser.js");


Panel.prototype.Furyuserinfo=function() { 
	this.setHeading("Fury WebUser Account");
	
	this.setBody( m("div",[		
		m("h3",Furyuser.account.address),
		m("p",[
			m("h4","RSA Public"),
			m("pre",Furyuser.account.rsaPublic)
		]),
		m("p",[
			m("h4","RSA Private"),
			m("pre",Furyuser.account.rsaPrivate)
		])
		]));	
}

module.exports = Panel;
