var m = require("mithril")
var Furyuser = require("./model.furyuser.js")

module.exports = {
    view: function() {
         return m("form",{
                onsubmit: function(e) {
                    e.preventDefault()
                    Furyuser.requiresLogin="[disabled='disabled']";	
                    m.redraw();
                    Furyuser.login(function() {
						Furyuser.requiresLogin="";	
						m.redraw();
						
						if(typeof Furyuser.node.wallet != "undefined") {							
							var ctrl = require("./ctrl.main.js");
							ctrl.main();
													
						} else {
							console.warn("No Wallet associated!");
						}
					});
                }
            }, [
			m("h3", "Fury WebUser Login"),
            m("label", "Username"),
            m("input.input[type=text][placeholder=WebUser Name][class=form-control]", {
                oninput: m.withAttr("value", function(value) {Furyuser.username = value}),
                value: Furyuser.username
            }),
            m("label", "Password"),
            m("input.input[type=Password][placeholder=WebUser Password][class=form-control]",{
                oninput: m.withAttr("value", function(value) {Furyuser.password = value}),
                value: Furyuser.password
            }),
            m("hr"),         
			m("button.button[type=submit][class=form-control btn btn-default]"+Furyuser.requiresLogin, "Login"),
			
        ])
    }
}
