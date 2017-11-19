var m = require("mithril")
var Furyuser = require("./model.furyuser.js")


/*
	<nav class="navbar navbar-default">
		<div class="navbar-left">
			<span class="navbar-brand">
		  <span class="glyphicon glyphicon-user"></span>&nbsp;<span class="account"></span>
		  </span>
		</div>
	</nav>
 */
module.exports = {
    view: function() {
         return m("nav",{class:"navbar navbar-default"},[
			m("div",{class:"navbar-left"},[
				m("span",{class:"navbar-brand"},[
					m("span",{class:"glyphicon glyphicon-user",style:"margin-right:10px"}," "),
					m("span",{class:"account"}, Furyuser.username)
					])
				])
			]);                
    }
}
