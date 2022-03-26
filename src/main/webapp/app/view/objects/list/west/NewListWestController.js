Ext.define('GeCo.view.objects.list.west.NewListWestController',{
	extend: 'Ext.app.ViewController',
	alias: 'controller.NewListWest',

	init: function() {
		this.getViewModel().set('newlist_west', this);
	}
	
});