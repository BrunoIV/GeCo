Ext.define('GeCo.view.main.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',
        'GeCo.view.main.MainController',
        'GeCo.Util'
    ],

    controller: 'Main',
    viewModel: 'Main',
	
	layout: {
		type: 'vbox',
		align: 'stretch',
		pack: 'start'
	},
    
	items: [{
		xtype: 'panel',
		height: 40,
		html: 'GeCo V1'
	},{
		xtype: 'panel',
		items: [{
			xtype: 'button',
			iconCls: 'fa fa-table',
			text: 'Nuevo listado',
			listeners: {
				click: 'doOpenTab'
			}
		}]
	},{
		xtype: 'tabpanel',
		flex: 1,
		id: 'tab-container'
	}]
  
});
