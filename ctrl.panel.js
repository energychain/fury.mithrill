var m = require("mithril");
var PanelModel=require("./model.panel.js");
var PanelView=require("./view.panel.js");

var Panel = function() {
	this.panel_model=new PanelModel();
	this.panel_view = new PanelView();
	this.panel_view.setModel(this.panel_model);
	
	this.setHeading=function(heading) {
			this.panel_model.heading=heading;
			m.redraw();			
	}
	
	this.setBody=function(body) {
			this.panel_model.body=body;
			m.redraw();			
	}
	this.setFooter=function(footer) {
			this.panel_model.footer=footer;
			m.redraw();			
	}
	
	this.view = function() {
		return this.panel_view.view();		
	}
};
module.exports = Panel;
