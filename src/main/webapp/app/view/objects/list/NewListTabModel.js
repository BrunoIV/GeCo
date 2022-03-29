Ext.define('GeCo.view.objects.list.NewListTabModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.NewListTab',
    
	data: {
		NewListCenter: {
			iconCls: 'fa fa-table',
			title: 'Vista previa listado',
			
			columns: [{
				xtype: 'gridcolumn',
				dataIndex: 'id',
				width: 50,
				text: 'Id'
			},{
				xtype: 'gridcolumn',
				text: '+',
				menuDisabled: true,
				align: 'center',
				width: 30,
				addNewTab: true
			}]
		},
		
//		default_list_center_columns: []
	}

});
