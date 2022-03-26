Ext.define('GeCo.view.objects.list.center.NewListCenter',{
	extend: 'Ext.grid.Panel',
	xtype: 'NewListCenter',
	controller: 'NewListCenter',

	iconCls: 'fa fa-table',
	title: 'Vista previa listado',
	layout: 'fit',
	reference: 'sourceGrid',

	dockedItems: [{
        xtype: 'toolbar',
        dock: 'bottom',
        items: []
    }]
});