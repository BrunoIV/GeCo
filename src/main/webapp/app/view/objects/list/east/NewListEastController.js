Ext.define('GeCo.view.objects.list.west.NewListEastController',{
	extend: 'Ext.app.ViewController',
	alias: 'controller.NewListEast',
	
	init: function() {
		this.getViewModel().set('newlist_east', this);
	}

});