Ext.define('GeCo.view.objects.list.center.NewListCenter',{
	extend: 'Ext.grid.Panel',
	xtype: 'NewListCenter',
	controller: 'NewListCenter',

	title: ' ',  //necesito tener un título por defecto porque tiene un evento. No sirve vacio
	
	layout: 'fit',
	reference: 'sourceGrid',
	
	listeners: {
		afterrender: 'doSetSpecialEvents',
		beforerender: 'doLoadToolbarButtons',
		headerclick: 'addEditColumn',
		columnmove: 'reorderColumnsViewModel'
	},

	dockedItems: [{
		xtype: 'toolbar',
		dock: 'bottom',
		items: []
	}],
	
 	bind: {
		columns: '{NewListCenter.columns}',
		title: '{NewListCenter.title}',
		iconCls: '{NewListCenter.iconCls}'
	}
});