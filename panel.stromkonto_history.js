var m = require("mithril")
var Panel = require("./ctrl.panel.js");
var Furyuser = require("./model.furyuser.js");
var Stromkonto = require("./model.stromkonto.js");

Panel.prototype.Stromkonto_history=function(address,sko_address) { 
	this.req_address=address;
	this.sko_address=sko_address;
	
	if(typeof address=="undefined") this.req_address=Furyuser.node.wallet.address;
	if(typeof sko=="undefined") this.sko_address=Furyuser.node.blg;
	
	this.stromkonto = new Stromkonto(this.sko_address,this.req_address);
	var me =this;		
	
	
	me.stromkonto.onhistory(this.sko_address,this.req_address,function(stromkonto) {
		me.setHeading("Transaction History on distributed ledger");	
		me.setFooter("Balancing account:"+document.resolveAddress(stromkonto.req_address)+"@"+document.resolveAddress(stromkonto.sko_address));
		stromkonto.history=stromkonto.history.reverse();
		var rows=[];
		for(var i=0;(i<stromkonto.history.length)&&(i<10);i++) {
			var row=stromkonto.history[i];
			rows.push(m("tr",[m("td[scope=row]",row.blockNumber),m("td",document.resolveAddress(row.from)),m("td",document.resolveAddress(row.to)),m("td[style=text-align:right]",document.toKWHString(row.base)),m("td[style=text-align:right]",document.toEURString(row.value))]));
		}
		
		var table_balance=m("table[class=table table-hover]",m("tbody",rows));
		var body=[];	
		body.push(table_balance);				
		me.setBody(m("div",body));			
	});
	
}

module.exports = Panel;
