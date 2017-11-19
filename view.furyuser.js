var m = require("mithril")
var Furyuser = require("./model.furyuser.js")

module.exports = {
    view: function() {
         return m("form",{
                onsubmit: function(e) {
                    e.preventDefault()
                    Furyuser.login(function() {
						var main = require("./view.main.js");
						var root = document.getElementById("app");
						m.mount(root, main);							
					})
                }
            }, [
			m("h3", "Fury WebUser Login"),
            m("label.label", "Username"),
            m("input.input[type=text][placeholder=WebUser Name][class=form-control]", {
                oninput: m.withAttr("value", function(value) {Furyuser.username = value}),
                value: Furyuser.username
            }),
            m("label.label", "Password"),
            m("input.input[type=Password][placeholder=WebUser Password][class=form-control]",{
                oninput: m.withAttr("value", function(value) {Furyuser.password = value}),
                value: Furyuser.password
            }),
            m("hr"),
            m("button.button[type=submit][class=form-control btn btn-danger]", "Login"),
        ])
    }
}
