var m = require("mithril")
var Panel = require("./ctrl.panel.js");
var Furyuser = require("./model.furyuser.js");
var MPR = require("./model.mpr.js");

Panel.prototype.MPR=function(address) { 
	if(typeof address=="undefined") address=Furyuser.node.wallet.address;
	
	this.MPR_model = new MPR(address);
	var me =this;		
	
	var update=function() {
		me.MPR_model.oninit(function(MPR_model) {
			me.setHeading("Meter Point Reading "+document.resolveAddress(MPR_model.address));	
			var table=m("table[class=table table-condensed]",[							
					m("tr",[ m("td","Reading"),m("td",document.toKWHString(MPR_model.power))]),
					m("tr",[ m("td","Time"),m("td",new Date(MPR_model.time).toLocaleString())])
				]);
			var body=[];
			body.push(table);
			if(MPR_model.address.toLowerCase()==Furyuser.node.wallet.address.toLowerCase()) {
					body.push(m("hr"));
					var reading_form=m("form",{						
							onsubmit: function(e) {
								e.preventDefault()
								me.MPR_model.storeReading();
							}						
						},[  
							m("label", "Manuel Reading (in Wh)"),
							m("input.input[type=text][placeholder=Reading][class=form-control]", {
								oninput: m.withAttr("value", function(value) {MPR_model.power = value}),
								value: MPR_model.power
							}),
							m("button.button[type=submit][class=form-control btn btn-danger][style=margin-top:10px;]", "Save")
						]);
					body.push(reading_form);
			}
			me.setBody(m("div",body));			
		});
	}
	update();
	setInterval(update,10000);
}

module.exports = Panel;
