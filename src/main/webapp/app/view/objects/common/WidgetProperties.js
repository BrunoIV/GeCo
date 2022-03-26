Ext.define('GeCo.view.objects.common.WidgetProperties',{
	extend: 'Ext.grid.Panel',
	xtype: 'WidgetProperties',
	controller: 'WidgetProperties',
	store: Ext.create('GeCo.store.PropertiesWidgets', { autoLoad:true }),

	plugins: [
        Ext.create('Ext.grid.plugin.CellEditing', {
            clicksToEdit: 1
        })
    ],

	listeners: {
		edit: 'updatePropertyActiveWidget'
	},
	
	columns: [{
		header: 'Nombre',
		dataIndex: 'name',
		width: 120
	},{
		header: 'Valor',
		dataIndex: 'value',
		editor: 'textfield',
		flex:1,
		width: 120
	},{
		width: 50,
		sortable: false,
		xtype: 'widgetcolumn',
		widget: {
			xtype: 'button',
			text: '...',
			listeners: {
				click: 'doOpenEditor'
			}
			
		}
	}]
});