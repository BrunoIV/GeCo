Ext.define('GeCo.Util', {
	singleton: true,
	
	goTab: function(xtype, hash, extraParams) {
		let tabContainer = Ext.ComponentMgr.get('tab-container');
		
		let tab = Ext.widget(xtype);
		tabContainer.add(tab);
	},
	
	goDialog: function(xtype, extraParams) {
		var panel = Ext.widget(xtype, {
			preventHeader: true //evita doble título
		});

		// Crea dialogo con panel dentro, heredando el título e icono del panel
		var window = Ext.create('Ext.window.Window', {
			title: panel.title,
			iconCls: panel.iconCls,
			items: panel,
			modal: true,
			resizable: false,
			layout: 'fit',
			height: (typeof panel.height === 'undefined' ? '70%' : panel.height),
			width: (typeof panel.width === 'undefined' ? '70%' : panel.width)
		});
	
			
		// Aplica los parámetros extra
		if (extraParams !== null) Ext.apply(panel, extraParams);
    	
    	window.show();
    },
});