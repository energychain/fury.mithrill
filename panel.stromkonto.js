var m = require("mithril")
var Panel = require("./ctrl.panel.js");
var Furyuser = require("./model.furyuser.js");
var Stromkonto = require("./model.stromkonto.js");

Panel.prototype.Stromkonto=function(address,sko_address) { 
	this.req_address=address;
	this.sko_address=sko_address;
	
	if(typeof address=="undefined") this.req_address=Furyuser.node.wallet.address;
	if(typeof sko=="undefined") this.sko_address=Furyuser.node.blg;
	
	this.stromkonto = new Stromkonto(this.sko_address,this.req_address);
	var me =this;		
	
	
	me.stromkonto.oninit(this.sko_address,this.req_address,function(stromkonto) {
		me.setHeading("Energy Ledger "+stromkonto.req_address+"@"+stromkonto.sko_address);	

		var table_balance=m("table[class=table table-hover]",m("tbody",[							
				m("tr",[ m("td[scope=row]","Soll"),m("td[style=text-align:right]",document.toEURString(stromkonto.balanceSoll))]),
				m("tr",[ m("td[scope=row]","Haben"),m("td[style=text-align:right]",document.toEURString(stromkonto.balanceHaben))]),
				m("tr",[ m("th[scope=row]","Balance"),m("th[style=text-align:right]",document.toEURString(stromkonto.balanceHaben-stromkonto.balanceSoll))])
				]));
				
		var table_base=m("table[class=table table-hover]",m("tbody",[									
				m("tr",[ m("td[scope=row]","Soll"),m("td[style=text-align:right]",document.toKWHString(stromkonto.baseSoll))]),
				m("tr",[ m("td[scope=row]","Haben"),m("td[style=text-align:right]",document.toKWHString(stromkonto.baseHaben))]),
				m("tr",[ m("th[scope=row]","Balance"),m("th[style=text-align:right]",document.toKWHString(stromkonto.baseHaben-stromkonto.baseSoll))]),
				]));
		var body=[];
		body.push(table_balance);		
		body.push(table_base);
		me.setBody(m("div",body));			
	});
	
}

module.exports = Panel;
