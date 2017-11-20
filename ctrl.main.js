var m = require("mithril");
var Panel = require("./ctrl.panel.js");
var Furyuserinfo=require("./panel.furyuserinfo.js");
var Nodeinfo=require("./panel.nodeinfo.js");
var MPR=require("./panel.mpr.js");

module.exports = {
	
	main:function() {
		var root = document.body;	
	
		main_view=require("./view.ui_container.js");
		
		var p_mpr = new MPR();
		p_mpr.MPR();
		main_view.addPanel(p_mpr);
		
		
		
		var p_mpr2 = new MPR();
		p_mpr2.MPR("0x666C7b36432A977320792C4B198B283Ae21c0048");		
		main_view.addPanel(p_mpr2);
		
		
		var p2 = new Furyuserinfo();
		p2.Furyuserinfo();
		main_view.addPanel(p2);
		
		var p3 = new Nodeinfo();
		p3.Nodeinfo();				
		main_view.addPanel(p3);
		
		m.mount(root,main_view);		
	}
}