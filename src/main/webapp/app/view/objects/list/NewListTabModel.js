Ext.define('GeCo.view.objects.list.NewListTabModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.NewListTab',
    
	data: {
		default_list_center_columns: [{
			xtype: 'gridcolumn',
			dataIndex: 'id',
			text: 'Id'
		}]
	}

});
