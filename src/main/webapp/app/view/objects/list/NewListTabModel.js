Ext.define('GeCo.view.objects.list.NewListTabModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.NewListTab',
    
	data: {
	
		NewListCenter: {
			iconCls: 'fa fa-table',
			title: 'Vista previa listado',
			
			buttons:[{
				tooltip: 'Agregar botón',
				iconCls: 'fa fa-plus',
				addNewButton: true,
				listeners: {
					click: 'doAddButtonToolbar'
				}
			}],
			
			columns: [{
				xtype: 'gridcolumn',
				dataIndex: 'id',
				width: 50,
				text: 'Id'
			},{
				xtype: 'gridcolumn',
				text: '+',
				menuDisabled: true,
				tooltip: 'Agregar pestaña',
				align: 'center',
				draggable: false,
				width: 30,
				addNewTab: true
			}]
		},
		
//		default_list_center_columns: []
	}

});
