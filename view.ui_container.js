var m = require("mithril")
var Panel = require("./ctrl.panel.js");
var Panels = require("./model.panels.js");

module.exports = {
	addPanel: function(panel) {			
			Panels.panels.push(panel.panel_view);			
			m.redraw();
	},
    view: function() { 			
		var elements=[];
		for(var i=0;i<Panels.panels.length;i++) {
				elements.push(m(Panels.panels[i]));
		}			
		return m("div",[
				m(require("./view.navbar.js")),		
				m("div[class=container]",elements)
			]);
	}
}
