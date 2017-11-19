/*!
 * mithril Fury Network Extension
 * version: 0.0.1
 * Requires jQuery v1.7.2 or later
 * Project repository: https://github.com/zoernert/jquery.ipfsforms
 * Copyright 2017 Thorsten Zoerner
 * Dual licensed under the LGPL-2.1+ or MIT licenses
 * https://github.com/jquery-form/form#license
 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 2.1 of the License, or (at your option) any later version.
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
*/


var login = require("./view.furyuser.js");
var main = require("./view.main.js");

var root = document.getElementById("app");

m.route(root, "/login", {
    "/login": login,
    "/main": main,
})



