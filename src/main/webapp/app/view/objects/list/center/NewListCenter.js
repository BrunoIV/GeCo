Ext.define('GeCo.view.objects.list.center.NewListCenter',{
	extend: 'Ext.grid.Panel',
	xtype: 'NewListCenter',
	controller: 'NewListCenter',

	iconCls: 'fa fa-table',
	title: 'Vista previa listado',
	layout: 'fit',
	reference: 'sourceGrid',
	
	listeners: {
		afterrender: 'doSetSpecialEvents',
		headerclick: 'addEditTab'
	},

	dockedItems: [{
		xtype: 'toolbar',
		dock: 'bottom',
		items: []
	}],
	
 	bind: {
		columns: '{default_list_center_columns}'
	}
});