Ext.define('GeCo.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',

    doOpenTab: function() {
		GeCo.Util.goTab('NewListTab');
	}
});
