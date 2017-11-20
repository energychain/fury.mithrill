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


document.toEURString=function(value) {
	return (value/10000000).toLocaleString(undefined, { minimumFractionDigits:2, maximumFractionDigits:2 })+" €";
}

document.toKWHString=function(value) {
	return (value/1000).toLocaleString(undefined, { minimumFractionDigits:3, maximumFractionDigits:3 })+" KWh";
}

var root = document.getElementById("app");
m.mount(root,require("./view.furyuserlogin.js"));






