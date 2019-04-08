/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"Web/Whatever/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});