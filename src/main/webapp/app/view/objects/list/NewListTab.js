Ext.define('GeCo.view.objects.list.NewListTab',{
	extend: 'Ext.panel.Panel',
	alias: 'widget.NewListTab',
	xtype: 'NewListTab',
	viewModel: 'NewListTab',
	controller: 'NewListTab',

	title: 'Nuevo listado',
	iconCls: 'fa fa-list',

	layout: {
		type: 'hbox',
		align: 'stretch'
	},

	//Dejo este color de fondo para que con los margenes parezcan lineas
	bodyStyle:{"background-color":"#a7a7a7"}, 


	tbar: {
		items:[{
			xtype: 'button',
			iconCls: 'fa fa-bolt',
			listeners: {
				click: 'doGenerateCode'
			}
		},{
			xtype: 'button',
			iconCls: 'fa fa-cog',
			listeners: {
				click: 'doConfig'
			}
		}]
	},

	layout: {
		type: 'hbox',
		align: 'stretch'
	},

	items: [{
		xtype: 'NewListWest',
		margin: '0 3 0 0'
	},{
		layout: 'fit',
		items:[{
			xtype: 'NewListCenter',
		}],
		height: '100%',
		margin: '0 3 0 0',
		flex: 1
	},{
		flex: 1,
		margin: '0 3 0 0',
		xtype: 'NewListEast'
	},{
		width: 350,
		layout: 'fit',
		items: [{
			layout: {
				type: 'vbox',
				align: 'stretch'
			},
			items: [{
				xtype: 'WidgetProperties',
				margin: '3 0 0 0',
				height: '50%'
			}]
		}]
	}]

});