Ext.define('GeCo.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.Main',

    doOpenTab: function() {
		GeCo.Util.goTab('NewListTab');
	}
});
