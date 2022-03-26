Ext.define('GeCo.Util', {
	singleton: true,
	
	goTab: function(xtype, hash, extraParams) {
		let tabContainer = Ext.ComponentMgr.get('tab-container');
		
		let tab = Ext.widget(xtype);
		tabContainer.add(tab);
	}
});