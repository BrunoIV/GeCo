/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('GeCo.view.main.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'GeCo.view.main.MainController',
        'GeCo.view.main.MainModel',
        'GeCo.view.main.List',
        'GeCo.Util'
    ],

    controller: 'main',
    viewModel: 'main',
	
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
