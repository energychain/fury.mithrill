var m = require("mithril")


var PanelView = function() {	
	this.setModel=function(view_panel)  {
			this.panel_model=view_panel;
			m.redraw();
	};
    this.view=function() {			
		var panel_components=[];
		if(this.panel_model.heading!=null) {
			panel_components.push(m('div[class="panel-heading"]',this.panel_model.heading));	
		}
		if(this.panel_model.body!=null) {
			panel_components.push(m('div[class="panel-body"]',this.panel_model.body));	
		}
		if(this.panel_model.footer!=null) {
			panel_components.push(m('div[class="panel-footer"]',this.panel_model.footer));	
		}		
		ret=m("div[class='panel panel-default']",
			panel_components
		)
		return ret;
	}
};

module.exports = PanelView;
