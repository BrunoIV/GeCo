Ext.define('GeCo.view.objects.list.west.NewListWest',{
	extend: 'Ext.form.Panel',
	controller: 'NewListWest',
	alias: 'widget.NewListWest',
	xtype: 'NewListWest',

	title: 'Filtro',
	iconCls: 'fa fa-filter',

	layout: {
		type: 'hbox',
		align: 'stretch'
	},

	height: '100%',
	items: [{
		xtype: 'form',
		width: 275,
		reference: 'westWidgets',

		autoScroll: true,
		bodyPadding: 5,
		layout: {
			type: 'anchor'
		},

		buttonAlign: 'center',
		minButtonWidth: 45,
		buttons: [{
			tooltip: 'Añadir Campo',
			iconCls: 'fa fa-plus-square',
			reference: 'plus'
		}, {
			tooltip: 'Quitar Campo',
			iconCls: 'fa fa-minus-square',
			reference: 'minus'
		}, {
			tooltip: 'Guardar Filtro',
			iconCls: 'fa fa-save',
			handler: 'doSave'
		}, {
			tooltip: 'Borrar Filtro',
			iconCls: 'fas fa-trash',
			handler: 'doReset'
		}, {
			tooltip: 'Buscar',
			iconCls: 'fa fa-search',
			handler: 'doSubmit'
		}]
	}]
});