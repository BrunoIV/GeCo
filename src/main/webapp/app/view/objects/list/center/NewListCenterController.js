Ext.define('GeCo.view.objects.list.center.NewListCenterController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.NewListCenter',

	init: function() {
		this.getViewModel().set('newlist_center', this);
	}
});