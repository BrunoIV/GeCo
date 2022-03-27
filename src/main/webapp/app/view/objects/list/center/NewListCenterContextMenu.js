Ext.define('GeCo.view.objects.list.center.NewListCenteContextMenu', {
	extend: 'Ext.menu.Menu',
	xtype: 'NewListCenteContextMenu',
	controller: 'NewListCenter',
	tree: {},

	items: [{
		text: 'Agregar botón',
		iconCls: 'fa fa-mouse-pointer',
		listeners: {
			click: 'doAddButtonDialog'
		}
	},{
		text: 'Agregar columna',
		iconCls: 'fa fa-columns',
		listeners: {
			click : 'doAddColumnDialog'
		}
	}]
});
